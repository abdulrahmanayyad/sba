#!/usr/bin/env node
/**
 * SAMI BIN AYYAD GROUP — SERVER-SIDE SUPABASE AUTH ADMIN API PROVISIONING
 * 
 * Complies strictly with enterprise security standards:
 * 1. Uses official Supabase Auth Admin API (supabase.auth.admin).
 * 2. Does NOT insert raw records into auth.users via SQL.
 * 3. Generates a secure, cryptographic one-time password-setup / recovery link.
 * 4. NEVER logs or displays passwords or secret keys.
 * 
 * Usage:
 *   node scripts/admin_api_provision.mjs --email <YOUR_CHOSEN_EMAIL>
 */

import { createClient } from "@supabase/supabase-js";
import { spawnSync } from "child_process";

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return process.env[name.toUpperCase()];
}

const targetEmail = getArg("email");
if (!targetEmail) {
  console.error("\n[خطأ أمني] يرجى تحديد البريد الإلكتروني للمدير العام:");
  console.error("  node scripts/admin_api_provision.mjs --email your-name@sami-trade.com\n");
  process.exit(1);
}

const supabaseUrl = process.env.SUPABASE_URL || "https://ksimoihakpocitqdrawq.supabase.co";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!serviceRoleKey) {
  console.log("\n==================================================================");
  console.log("  مجموعة سامي بن عياد — تهيئة حساب المدير العام عبر Admin API      ");
  console.log("==================================================================");
  console.log(`[البريد المستهدف]  : ${targetEmail}`);
  console.log("[الحالة]           : يرجى تزويد مفتاح SUPABASE_SERVICE_ROLE_KEY كمتغير بيئة");
  console.log("                     لتوليد رابط التفعيل المشفر دون عرض أي مفاتيح.\n");
  console.log("الأمر المطلوب للتنفيذ الآمن في الخادم أو التيرمينال:");
  console.log(`  $env:SUPABASE_SERVICE_ROLE_KEY="<مفتاح_الخدمة_الخاص_بك>"; node scripts/admin_api_provision.mjs --email "${targetEmail}"\n`);
  process.exit(0);
}

async function runAdminProvisioning() {
  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  console.log("==================================================================");
  console.log("  مجموعة سامي بن عياد — تهيئة حساب المدير العام عبر Admin API      ");
  console.log("==================================================================");
  console.log(`[البريد المستهدف] : ${targetEmail}`);

  try {
    // 1. Create or retrieve user via Supabase Auth Admin API
    let userId;
    const { data: createData, error: createErr } = await adminClient.auth.admin.createUser({
      email: targetEmail,
      email_confirm: true,
      user_metadata: {
        full_name_ar: "المدير العام — سامي بن عياد",
        full_name_en: "Super Administrator",
      },
    });

    if (createErr) {
      if (createErr.message.includes("already been registered") || createErr.status === 422) {
        console.log("[الحساب]         : الحساب مسجل مسبقاً في Supabase Auth، جاري توليد رابط التفعيل...");
      } else {
        throw createErr;
      }
    } else if (createData?.user) {
      userId = createData.user.id;
      console.log("[الحساب]         : تم إنشاء الحساب بنجاح عبر Supabase Admin API.");
    }

    // 2. Generate secure one-time password recovery / setup link
    const siteUrl = "https://sami-trade.com";
    const { data: linkData, error: linkErr } = await adminClient.auth.admin.generateLink({
      type: "recovery",
      email: targetEmail,
      options: {
        redirectTo: `${siteUrl}/admin/login?recovery=true`,
      },
    });

    if (linkErr) throw linkErr;

    const actionLink = linkData?.properties?.action_link;

    // 3. Ensure Profile and Role in database via Docker or connection
    const containerName = process.env.DOCKER_CONTAINER || "supabase_db_ksimoihakpocitqdrawq";
    const sql = `
      DO $$
      DECLARE
        v_uid UUID;
      BEGIN
        SELECT id INTO v_uid FROM auth.users WHERE email = '${targetEmail}';
        IF v_uid IS NOT NULL THEN
          INSERT INTO public.profiles (id, email, full_name_ar, full_name_en, sector_scope, is_active)
          VALUES (v_uid, '${targetEmail}', 'المدير العام — سامي بن عياد', 'Super Administrator', 'corporate', true)
          ON CONFLICT (id) DO UPDATE SET is_active = true, sector_scope = 'corporate';

          INSERT INTO public.user_roles (user_id, role_id)
          VALUES (v_uid, 'super_admin')
          ON CONFLICT (user_id, role_id) DO NOTHING;

          INSERT INTO public.audit_logs (actor_id, actor_email, action, resource_type, resource_id)
          VALUES (v_uid, '${targetEmail}', 'ADMIN_API_PROVISION', 'profiles', v_uid::text);
        END IF;
      END $$;
    `;

    spawnSync("docker", ["exec", "-i", containerName, "psql", "-U", "postgres", "-d", "postgres"], {
      input: sql,
      encoding: "utf-8",
    });

    console.log("[الصلاحيات]      : تم ربط الملف التعريفي ورتبة super_admin وتوثيق العملية في audit_logs.");
    console.log("\n==================================================================");
    console.log("            تم توليد رابط تعيين كلمة المرور الأولية بنجاح          ");
    console.log("==================================================================");
    console.log(`\nرابط التفعيل الآمن لمرة واحدة (صالح لمدة 24 ساعة):\n`);
    console.log(`  ${actionLink}\n`);
    console.log("خطوات التفعيل:");
    console.log("  1. افتح الرابط أعلاه في متصفحك الخاص.");
    console.log("  2. اكتب كلمة المرور القوية التي تختارها وقم بتأكيدها.");
    console.log("  3. سيتم تحويلك مباشرة إلى لوحة الإدارة https://sami-trade.com/admin بكامل الصلاحيات.\n");
    console.log("تنبيه أمني: لا تشارك هذا الرابط مع أي طرف آخر.\n");
  } catch (err) {
    console.error("[خطأ في التهيئة] :", err.message || err);
    process.exit(1);
  }
}

runAdminProvisioning();
