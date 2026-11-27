import React, { useState } from "react";
import { useAdminAuth, type AdminSection } from "@/lib/admin-auth-context";
import { AdminSidebar } from "./admin-sidebar";
import { AdminHeader } from "./admin-header";
import { DashboardSection } from "./sections/DashboardSection";
import { CrmSection } from "./sections/CrmSection";
import { GlobalMarketsSection } from "./sections/GlobalMarketsSection";
import { DocumentCenterSection } from "./sections/DocumentCenterSection";
import { OpportunitiesSection } from "./sections/OpportunitiesSection";
import { ContentCmsSection } from "./sections/ContentCmsSection";
import { ComplianceSection } from "./sections/ComplianceSection";
import { UsersSection } from "./sections/UsersSection";
import { AnalyticsSection } from "./sections/AnalyticsSection";
import { SystemSettingsSection } from "./sections/SystemSettingsSection";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export function AdminWorkspaceView() {
  const { canAccessSection } = useAdminAuth();
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectSection = (section: AdminSection) => {
    if (canAccessSection(section)) {
      setActiveSection(section);
      setMobileMenuOpen(false);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardSection onNavigate={handleSelectSection} />;
      case "crm":
        return <CrmSection />;
      case "markets":
        return <GlobalMarketsSection />;
      case "docs":
        return <DocumentCenterSection />;
      case "opportunities":
        return <OpportunitiesSection />;
      case "content":
        return <ContentCmsSection />;
      case "compliance":
        return <ComplianceSection />;
      case "users":
        return <UsersSection />;
      case "analytics":
        return <AnalyticsSection />;
      case "settings":
        return <SystemSettingsSection />;
      default:
        return <DashboardSection onNavigate={handleSelectSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex overflow-hidden font-sans" dir="rtl">
      {/* Desktop Persistent Sidebar */}
      <div className="hidden lg:flex shrink-0">
        <AdminSidebar
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />
      </div>

      {/* Mobile Drawer Sidebar */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="p-0 w-72 bg-slate-900 border-slate-800 text-slate-100" dir="rtl">
          <AdminSidebar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            onCloseMobile={() => setMobileMenuOpen(false)}
          />
        </SheetContent>
      </Sheet>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <AdminHeader
          activeSection={activeSection}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950">
          <div className="max-w-7xl mx-auto space-y-6">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
}
