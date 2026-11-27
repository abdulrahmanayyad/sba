-- ==============================================================================
-- SAMI BIN AYYAD GROUP — PROVISION SUPER ADMIN SQL TEMPLATE
-- Execute this script in Supabase Dashboard SQL Editor to create or promote
-- your Super Admin account without exposing passwords in git.
-- ==============================================================================

DO $$
DECLARE
    v_email TEXT := 'admin@sami-trade.com'; -- Replace with your desired admin email
    v_password TEXT := 'SBA_Admin_2026_SecureKey!'; -- Replace with your chosen strong password
    v_user_id UUID;
BEGIN
    -- 1. Check if user already exists in auth.users
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
        RAISE NOTICE 'Created new auth user with UUID: %', v_user_id;
    ELSE
        UPDATE auth.users
        SET encrypted_password = crypt(v_password, gen_salt('bf')),
            email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
            updated_at = NOW()
        WHERE id = v_user_id;
        RAISE NOTICE 'Updated existing auth user with UUID: %', v_user_id;
    END IF;

    -- 2. Ensure profile in public.profiles
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
        sector_scope = 'corporate',
        is_active = true,
        updated_at = NOW();

    -- 3. Assign super_admin role in public.user_roles
    INSERT INTO public.user_roles (user_id, role_id)
    VALUES (v_user_id, 'super_admin')
    ON CONFLICT (user_id, role_id) DO NOTHING;

    -- 4. Audit Log
    INSERT INTO public.audit_logs (
        actor_id,
        actor_email,
        action,
        resource_type,
        resource_id
    ) VALUES (
        v_user_id,
        v_email,
        'PROVISION_SUPER_ADMIN_SQL',
        'profiles',
        v_user_id::text
    );

    RAISE NOTICE 'SUPER ADMIN PROVISIONED SUCCESSFULLY FOR: %', v_email;
END $$;
