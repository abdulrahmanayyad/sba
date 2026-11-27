-- ==============================================================================
-- SBA GROUP — CORE BACKEND DATABASE MIGRATION
-- Migration Name: 20261126_sba_core_backend.sql
-- Description: Sets up Profiles (RBAC), Central Form Submissions (CRM),
--              Project Verification & Dossier Access Control, and Global Studies.
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. ENUMS
-- ------------------------------------------------------------------------------
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('super_admin', 'sector_director', 'compliance_officer', 'analyst', 'client_guest');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE inquiry_status AS ENUM (
        'new', 'under_review', 'info_required', 'qualified', 'not_qualified', 
        'assigned', 'contacted', 'scheduled', 'proposal_sent', 'in_progress', 
        'completed', 'closed'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE sector_type AS ENUM (
        'construction', 'garment', 'environmental', 'food', 'investor', 'group', 'multi'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE verification_request_status AS ENUM (
        'pending_review', 'under_nda_verification', 'approved', 'rejected', 'expired', 'revoked'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE study_status AS ENUM ('in_research', 'under_review', 'completed', 'needs_update', 'archived');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE approval_status AS ENUM ('draft', 'reviewed', 'approved');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ------------------------------------------------------------------------------
-- 2. PROFILES & ROLES (RBAC)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role user_role DEFAULT 'analyst' NOT NULL,
    department VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    phone VARCHAR(50),
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ------------------------------------------------------------------------------
-- 3. CENTRAL SUBMISSIONS (CRM PIPELINE FOR ALL 13 FORMS)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.central_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_code VARCHAR(32) UNIQUE NOT NULL,
    form_type VARCHAR(64) NOT NULL,
    form_title_ar VARCHAR(255) NOT NULL,
    form_title_en VARCHAR(255) NOT NULL,
    sector sector_type NOT NULL,
    status inquiry_status DEFAULT 'new' NOT NULL,
    applicant_name VARCHAR(255) NOT NULL,
    applicant_email VARCHAR(255) NOT NULL,
    applicant_phone VARCHAR(50) NOT NULL,
    applicant_company VARCHAR(255),
    applicant_country VARCHAR(100),
    applicant_city VARCHAR(100),
    applicant_job_title VARCHAR(150),
    details JSONB DEFAULT '{}'::jsonb NOT NULL,
    model_code VARCHAR(64),
    assigned_specialist UUID REFERENCES public.profiles(id),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.submission_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID NOT NULL REFERENCES public.central_submissions(id) ON DELETE CASCADE,
    author_id UUID REFERENCES public.profiles(id),
    author_name VARCHAR(255) NOT NULL,
    note_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.submission_audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID NOT NULL REFERENCES public.central_submissions(id) ON DELETE CASCADE,
    action VARCHAR(100) NOT NULL,
    performed_by VARCHAR(255) NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ------------------------------------------------------------------------------
-- 4. CONSTRUCTION PROJECT VERIFICATION & DUE DILIGENCE DOSSIERS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.verification_dossiers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_reference VARCHAR(64) UNIQUE NOT NULL,
    project_name_ar VARCHAR(255) NOT NULL,
    project_name_en VARCHAR(255) NOT NULL,
    client_name_ar VARCHAR(255) NOT NULL,
    client_name_en VARCHAR(255) NOT NULL,
    location_ar VARCHAR(255) NOT NULL,
    location_en VARCHAR(255) NOT NULL,
    contract_date DATE,
    execution_period VARCHAR(100),
    project_value_disclosed VARCHAR(100) DEFAULT 'بيانات تعاقدية حساسة وخاصة (NDA)',
    scope_of_work_ar TEXT NOT NULL,
    scope_of_work_en TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.verification_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dossier_id UUID NOT NULL REFERENCES public.verification_dossiers(id) ON DELETE CASCADE,
    doc_type VARCHAR(64) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    description_ar TEXT,
    description_en TEXT,
    file_path TEXT NOT NULL,
    file_size_bytes BIGINT DEFAULT 0 NOT NULL,
    mime_type VARCHAR(100) DEFAULT 'application/pdf',
    is_redacted BOOLEAN DEFAULT TRUE NOT NULL,
    legal_disclosure_confirmed BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.verification_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_reference VARCHAR(32) UNIQUE NOT NULL,
    dossier_id UUID NOT NULL REFERENCES public.verification_dossiers(id),
    requester_name VARCHAR(255) NOT NULL,
    requester_email VARCHAR(255) NOT NULL,
    requester_phone VARCHAR(50) NOT NULL,
    requester_organization VARCHAR(255) NOT NULL,
    requester_role VARCHAR(150),
    justification_purpose TEXT NOT NULL,
    nda_accepted BOOLEAN DEFAULT FALSE NOT NULL,
    nda_accepted_at TIMESTAMPTZ,
    status verification_request_status DEFAULT 'pending_review' NOT NULL,
    reviewed_by UUID REFERENCES public.profiles(id),
    reviewed_at TIMESTAMPTZ,
    rejection_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.verification_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id UUID NOT NULL REFERENCES public.verification_requests(id) ON DELETE CASCADE,
    token_hash VARCHAR(128) UNIQUE NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    max_views INT DEFAULT 5 NOT NULL,
    view_count INT DEFAULT 0 NOT NULL,
    is_revoked BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.verification_access_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id UUID REFERENCES public.verification_requests(id) ON DELETE SET NULL,
    document_id UUID REFERENCES public.verification_documents(id) ON DELETE SET NULL,
    token_used VARCHAR(64),
    ip_address INET,
    user_agent TEXT,
    action VARCHAR(64) NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ------------------------------------------------------------------------------
-- 5. GLOBAL MARKET STUDIES REPOSITORY
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.global_market_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(128) UNIQUE NOT NULL,
    sector sector_type NOT NULL,
    scope VARCHAR(32) DEFAULT 'global' NOT NULL,
    region VARCHAR(64) NOT NULL,
    country_code VARCHAR(10),
    country_name_ar VARCHAR(255) NOT NULL,
    country_name_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    subtitle_ar TEXT,
    subtitle_en TEXT,
    opportunity_score NUMERIC(5, 2),
    opportunity_tier VARCHAR(64),
    opportunity_tier_ar VARCHAR(64),
    regional_rank INT,
    trade_indicator_display VARCHAR(100),
    trade_indicator_year VARCHAR(10),
    product_tags_ar TEXT[] DEFAULT '{}',
    product_tags_en TEXT[] DEFAULT '{}',
    kpis JSONB DEFAULT '[]'::jsonb NOT NULL,
    sections JSONB DEFAULT '{}'::jsonb NOT NULL,
    sources JSONB DEFAULT '[]'::jsonb NOT NULL,
    download_docx_url TEXT,
    download_xlsx_url TEXT,
    download_zip_url TEXT,
    status study_status DEFAULT 'completed' NOT NULL,
    approval_status approval_status DEFAULT 'approved' NOT NULL,
    version VARCHAR(20) DEFAULT '1.0' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ------------------------------------------------------------------------------
-- 6. ROW-LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.central_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submission_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submission_audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_dossiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_access_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.global_market_studies ENABLE ROW LEVEL SECURITY;

-- Anonymous users can INSERT submissions
CREATE POLICY "Allow anonymous submission inserts" 
ON public.central_submissions 
FOR INSERT 
WITH CHECK (true);

-- Anonymous users can create verification requests
CREATE POLICY "Allow anonymous verification request creation" 
ON public.verification_requests 
FOR INSERT 
WITH CHECK (true);

-- Anonymous users can read published global studies
CREATE POLICY "Allow public read published studies" 
ON public.global_market_studies 
FOR SELECT 
USING (status = 'completed' AND approval_status = 'approved');

-- Anonymous users can read active dossiers summary
CREATE POLICY "Allow public read active dossiers" 
ON public.verification_dossiers 
FOR SELECT 
USING (is_active = true);
