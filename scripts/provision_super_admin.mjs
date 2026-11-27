#!/usr/bin/env node
/**
 * SAMI BIN AYYAD GROUP — INSTITUTIONAL SUPER ADMIN PROVISIONING UTILITY
 * 
 * Safely provisions or updates a Super Admin account in Supabase / PostgreSQL
 * without hardcoding credentials in git or project history.
 * 
 * Usage:
 *   node scripts/provision_super_admin.mjs --email admin@sami-trade.com
 *   node scripts/provision_super_admin.mjs --email admin@sami-trade.com --password <YourStrongPassword>
 */

import { spawnSync } from "child_process";
import crypto from "crypto";

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return process.env[`SUPER_ADMIN_${name.toUpperCase()}`];
}

const targetEmail = (getArg("email") || "admin@sami-trade.com").trim().toLowerCase();
let targetPassword = getArg("password");

if (!targetPassword) {
  targetPassword = crypto.randomBytes(9).toString("base64").slice(0, 12) + "!A9#";
  console.log("\n[INFO] لم يتم تحديد كلمة مرور، تم توليد كلمة مرور عشوائية فائقة الأمان.");
}

const containerName = process.env.DOCKER_CONTAINER || "supabase_db_ksimoihakpocitqdrawq";

console.log("==================================================================");
console.log("  مجموعة سامي بن عياد القابضة — أداة تعيين المدير العام (Super Admin)  ");
console.log("==================================================================");
console.log(`[TARGET EMAIL]     : ${targetEmail}`);
console.log(`[TARGET CONTAINER] : ${containerName}`);

const sql = `
DO $$
DECLARE
    v_email TEXT := '${targetEmail}';
    v_password TEXT := '${targetPassword}';
    v_user_id UUID;
BEGIN
    SELECT id INTO v_user_id FROM auth.users WHERE email = v_email;

    IF v_user_id IS NULL THEN
        v_user_id := gen_random_uuid();
        INSERT INTO auth.users (
            id,
            instance_id,
            email,
            encrypted_password,
            email_confirmed_at,
            raw_app_meta_data,
            raw_user_meta_data,
            created_at,
            updated_at,
            role,
            aud
        ) VALUES (
            v_user_id,
            '00000000-0000-0000-0000-000000000000',
            v_email,
            crypt(v_password, gen_salt('bf')),
            NOW(),
            '{"provider":"email","providers":["email"]}',
            '{"full_name_ar":"المدير العام","full_name_en":"Super Administrator"}',
            NOW(),
            NOW(),
            'authenticated',
            'authenticated'
        );
        RAISE NOTICE 'SUCCESS_CREATED: %', v_user_id;
    ELSE
        UPDATE auth.users
        SET encrypted_password = crypt(v_password, gen_salt('bf')),
            email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
            updated_at = NOW()
        WHERE id = v_user_id;
        RAISE NOTICE 'SUCCESS_UPDATED: %', v_user_id;
    END IF;

    -- Ensure profile in public.profiles
    INSERT INTO public.profiles (
        id,
        email,
        full_name_ar,
        full_name_en,
        sector_scope,
        is_active,
        mfa_enabled
    ) VALUES (
        v_user_id,
        v_email,
        'المدير العام — سامي بن عياد',
        'Super Administrator — Sami Bin Ayyad',
        'corporate',
        true,
        false
    )
    ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        full_name_ar = EXCLUDED.full_name_ar,
        full_name_en = EXCLUDED.full_name_en,
        sector_scope = 'corporate',
        is_active = true,
        updated_at = NOW();

    -- Assign super_admin role
    INSERT INTO public.user_roles (user_id, role_id)
    VALUES (v_user_id, 'super_admin')
    ON CONFLICT (user_id, role_id) DO NOTHING;

    -- Log to audit_logs
    INSERT INTO public.audit_logs (
        actor_id,
        actor_email,
        action,
        resource_type,
        resource_id
    ) VALUES (
        v_user_id,
        v_email,
        'PROVISION_SUPER_ADMIN',
        'profiles',
        v_user_id::text
    );
END $$;
`;

const res = spawnSync("docker", ["exec", "-i", containerName, "psql", "-U", "postgres", "-d", "postgres"], {
  input: sql,
  encoding: "utf-8",
});

if (res.error) {
  console.error("[ERROR] تعذر تنفيذ الأمر عبر Docker:", res.error.message);
  process.exit(1);
}

if (res.status !== 0) {
  console.error("[ERROR] فشل تنفيذ استعلام التعيين:");
  console.error(res.stderr || res.stdout);
  process.exit(res.status || 1);
}

console.log(res.stdout);
console.log("\n==================================================================");
console.log("             تهانينا! اكتمل إنشاء وتفعيل حساب المدير العام            ");
console.log("==================================================================");
console.log(`  رابط لوحة الإدارة   : https://sami-trade.com/admin`);
console.log(`  رابط تسجيل الدخول   : https://sami-trade.com/admin/login`);
console.log(`  البريد الإلكتروني   : ${targetEmail}`);
console.log(`  كلمة المرور         : ${targetPassword}`);
console.log("==================================================================");
console.log("تنبيه أمني: احفظ كلمة المرور في مكان آمن، ولا تشاركها عبر القنوات غير المشفرة.\n");
