import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export interface AdminProfile {
  id: string;
  email: string;
  full_name_en: string;
  full_name_ar: string;
  sector_scope: string;
  phone?: string | null;
  is_active: boolean;
  mfa_enabled: boolean;
  last_login_at?: string | null;
  created_at: string;
}

export interface AdminRole {
  id: string;
  name_en: string;
  name_ar: string;
  description?: string | null;
}

export type AdminSection =
  | "dashboard"
  | "crm"
  | "markets"
  | "docs"
  | "opportunities"
  | "content"
  | "compliance"
  | "users"
  | "analytics"
  | "settings";

interface AdminAuthContextType {
  user: User | null;
  session: Session | null;
  profile: AdminProfile | null;
  roles: AdminRole[];
  permissions: string[];
  isLoading: boolean;
  isAuthorizedStaff: boolean;
  isSuperAdmin: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  requestPasswordReset: (email: string) => Promise<{ success: boolean; error?: string }>;
  updatePassword: (password: string) => Promise<{ success: boolean; error?: string }>;
  refreshAuth: () => Promise<void>;
  hasRole: (roleId: string) => boolean;
  hasPermission: (permissionId: string) => boolean;
  canAccessSection: (section: AdminSection) => boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<AdminProfile | null>(null);
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfileAndRoles = useCallback(async (userId: string, userEmail?: string) => {
    try {
      // 1. Fetch Profile
      const { data: profileData, error: profileErr } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

      if (profileErr) {
        console.warn("[AdminAuth] Could not fetch profile:", profileErr.message);
      }

      if (profileData) {
        setProfile(profileData as AdminProfile);
      } else if (userEmail) {
        // Fallback profile object if trigger hasn't fired yet
        setProfile({
          id: userId,
          email: userEmail,
          full_name_ar: "مدير النظام",
          full_name_en: "System Administrator",
          sector_scope: "corporate",
          is_active: true,
          mfa_enabled: false,
          created_at: new Date().toISOString(),
        });
      }

      // 2. Fetch User Roles
      const { data: userRolesData, error: rolesErr } = await supabase
        .from("user_roles")
        .select("role_id, roles(id, name_en, name_ar, description)")
        .eq("user_id", userId);

      if (rolesErr) {
        console.warn("[AdminAuth] Could not fetch roles:", rolesErr.message);
      }

      const assignedRoles: AdminRole[] = [];
      const roleIds: string[] = [];

      if (userRolesData && Array.isArray(userRolesData)) {
        for (const item of userRolesData) {
          if (item.roles && typeof item.roles === "object") {
            const r = item.roles as unknown as AdminRole;
            assignedRoles.push(r);
            roleIds.push(r.id);
          } else if (item.role_id) {
            roleIds.push(item.role_id);
            assignedRoles.push({
              id: item.role_id,
              name_en: item.role_id,
              name_ar: item.role_id,
            });
          }
        }
      }
      setRoles(assignedRoles);

      // 3. Fetch Permissions for these roles
      if (roleIds.length > 0) {
        const { data: rolePermsData } = await supabase
          .from("role_permissions")
          .select("permission_id")
          .in("role_id", roleIds);

        if (rolePermsData && Array.isArray(rolePermsData)) {
          const perms = Array.from(new Set(rolePermsData.map((p) => p.permission_id)));
          setPermissions(perms);
        } else {
          setPermissions([]);
        }
      } else {
        setPermissions([]);
      }
    } catch (err: unknown) {
      console.error("[AdminAuth] Initialization error:", err);
      setError(err instanceof Error ? err.message : "فشل تحميل بيانات الصلاحيات");
    }
  }, []);

  const refreshAuth = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, error: sessionErr } = await supabase.auth.getSession();
      if (sessionErr) throw sessionErr;

      const currentSession = data.session;
      setSession(currentSession);
      setUser(currentSession?.user ?? null);

      if (currentSession?.user) {
        await fetchProfileAndRoles(currentSession.user.id, currentSession.user.email);
      } else {
        setProfile(null);
        setRoles([]);
        setPermissions([]);
      }
    } catch (err: unknown) {
      console.error("[AdminAuth] Session refresh error:", err);
      setError(err instanceof Error ? err.message : "فشل التحقق من الجلسة");
    } finally {
      setIsLoading(false);
    }
  }, [fetchProfileAndRoles]);

  useEffect(() => {
    refreshAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);

      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "USER_UPDATED") {
        if (newSession?.user) {
          await fetchProfileAndRoles(newSession.user.id, newSession.user.email);
        }
      } else if (event === "SIGNED_OUT") {
        setProfile(null);
        setRoles([]);
        setPermissions([]);
      }
      setIsLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [refreshAuth, fetchProfileAndRoles]);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setError(null);
      const { data, error: signErr } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (signErr) {
        return { success: false, error: signErr.message };
      }

      if (!data.user) {
        return { success: false, error: "تعذر التحقق من المستخدم" };
      }

      await fetchProfileAndRoles(data.user.id, data.user.email);
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "حدث خطأ غير متوقع أثناء الدخول";
      setError(msg);
      return { success: false, error: msg };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.warn("[AdminAuth] SignOut error:", err);
    } finally {
      setUser(null);
      setSession(null);
      setProfile(null);
      setRoles([]);
      setPermissions([]);
    }
  };

  const requestPasswordReset = async (email: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://sami-trade.com";
      const { error: resetErr } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
        redirectTo: `${siteUrl}/admin/login?recovery=true`,
      });
      if (resetErr) {
        return { success: false, error: resetErr.message };
      }
      return { success: true };
    } catch (err: unknown) {
      return { success: false, error: err instanceof Error ? err.message : "فشل إرسال رابط الاستعادة" };
    }
  };

  const updatePassword = async (password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error: updateErr } = await supabase.auth.updateUser({ password });
      if (updateErr) {
        return { success: false, error: updateErr.message };
      }
      return { success: true };
    } catch (err: unknown) {
      return { success: false, error: err instanceof Error ? err.message : "فشل تعيين كلمة المرور الجديدة" };
    }
  };

  const hasRole = (roleId: string): boolean => {
    return roles.some((r) => r.id === roleId);
  };

  const isSuperAdmin = hasRole("super_admin");

  const hasPermission = (permissionId: string): boolean => {
    if (isSuperAdmin) return true;
    return permissions.includes(permissionId);
  };

  const isAuthorizedStaff = Boolean(
    user &&
    (profile?.is_active ?? true) &&
    (roles.length > 0 || isSuperAdmin)
  );

  const canAccessSection = (section: AdminSection): boolean => {
    if (!isAuthorizedStaff) return false;
    if (isSuperAdmin) return true;

    switch (section) {
      case "dashboard":
        return true;
      case "crm":
        return hasPermission("crm:manage") || hasRole("group_manager");
      case "markets":
        return (
          hasPermission("studies:draft") ||
          hasPermission("studies:publish") ||
          hasPermission("studies:edit") ||
          hasRole("research_lead") ||
          hasRole("research_editor")
        );
      case "docs":
        return hasRole("group_manager") || hasRole("sector_manager") || hasPermission("studies:publish");
      case "opportunities":
        return hasRole("group_manager") || hasRole("compliance_officer") || hasPermission("crm:manage");
      case "content":
        return hasRole("group_manager") || hasRole("sector_manager");
      case "compliance":
        return hasPermission("audit:read") || hasRole("compliance_officer") || hasRole("auditor_read_only");
      case "users":
        return isSuperAdmin;
      case "analytics":
        return hasRole("group_manager") || hasRole("sector_manager");
      case "settings":
        return isSuperAdmin;
      default:
        return false;
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        session,
        profile,
        roles,
        permissions,
        isLoading,
        isAuthorizedStaff,
        isSuperAdmin,
        error,
        login,
        logout,
        requestPasswordReset,
        updatePassword,
        refreshAuth,
        hasRole,
        hasPermission,
        canAccessSection,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
