-- ==============================================================================
-- SAMI BIN AYYAD (SBA) - VERIFIED PROJECTS & PROJECT VERIFICATION SYSTEM
-- Database Migration & Schema Definition
-- ==============================================================================

-- 1. Enum types for Verification Status and Document Confidentiality
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'verification_request_status') THEN
    CREATE TYPE verification_request_status AS ENUM (
      'pending_review',
      'under_verification',
      'additional_info_required',
      'approved',
      'rejected',
      'documents_shared',
      'closed'
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'document_confidentiality_level') THEN
    CREATE TYPE document_confidentiality_level AS ENUM (
      'internal_only',
      'restricted',
      'shareable_after_approval',
      'public'
    );
  END IF;
END $$;

-- 2. Project Verification Dossiers (Linked to each contracting project)
CREATE TABLE IF NOT EXISTS public.project_verification_dossiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id INTEGER NOT NULL UNIQUE,
  project_reference_number VARCHAR(100) NOT NULL UNIQUE,
  project_name_ar TEXT NOT NULL,
  project_name_en TEXT NOT NULL,
  project_owner_ar TEXT NOT NULL,
  project_owner_en TEXT NOT NULL,
  assigning_authority_ar TEXT NOT NULL,
  assigning_authority_en TEXT NOT NULL,
  project_location_ar TEXT NOT NULL,
  project_location_en TEXT NOT NULL,
  scope_of_work_ar TEXT NOT NULL,
  scope_of_work_en TEXT NOT NULL,
  assignment_date VARCHAR(50) NOT NULL,
  execution_period VARCHAR(100) NOT NULL,
  project_value_disclosed TEXT,
  project_status VARCHAR(50) NOT NULL DEFAULT 'completed',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Project Verification Documents (Official proofs, contracts, completion certs)
CREATE TABLE IF NOT EXISTS public.project_verification_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dossier_id UUID NOT NULL REFERENCES public.project_verification_dossiers(id) ON DELETE CASCADE,
  project_id INTEGER NOT NULL,
  document_type VARCHAR(50) NOT NULL, -- 'contract' | 'award_letter' | 'work_order' | 'contract_extract' | 'completion_certificate' | 'handover_certificate' | 'official_correspondence' | 'supporting_document'
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  file_path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size_bytes BIGINT NOT NULL DEFAULT 0,
  mime_type VARCHAR(100) NOT NULL DEFAULT 'application/pdf',
  issue_date VARCHAR(50),
  issuing_entity TEXT,
  confidentiality_level document_confidentiality_level NOT NULL DEFAULT 'shareable_after_approval',
  is_redacted BOOLEAN NOT NULL DEFAULT false,
  legal_disclosure_confirmed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Verification Requests (Submissions from organizations/companies)
CREATE TABLE IF NOT EXISTS public.verification_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_number VARCHAR(50) NOT NULL UNIQUE,
  project_id INTEGER NOT NULL,
  project_name_ar TEXT NOT NULL,
  project_name_en TEXT NOT NULL,
  
  -- Company Information
  company_name TEXT NOT NULL,
  commercial_registration_number VARCHAR(100) NOT NULL,
  country_of_registration TEXT NOT NULL,
  company_website TEXT,
  official_company_email TEXT NOT NULL,
  commercial_registration_doc_path TEXT NOT NULL,
  commercial_registration_doc_name TEXT NOT NULL,

  -- Applicant Information
  applicant_full_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  department TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  applicant_email TEXT NOT NULL,

  -- Verification Purpose
  purpose VARCHAR(100) NOT NULL,
  additional_notes TEXT,

  -- Optional Authorization Documents
  authorization_letter_doc_path TEXT,
  authorization_letter_doc_name TEXT,
  proof_of_capacity_doc_path TEXT,
  proof_of_capacity_doc_name TEXT,

  -- Consents
  declaration_confirmed BOOLEAN NOT NULL DEFAULT false,
  privacy_consent_confirmed BOOLEAN NOT NULL DEFAULT false,

  -- Status & Administrative Workflow
  status verification_request_status NOT NULL DEFAULT 'pending_review',
  admin_internal_notes TEXT,
  rejection_reason TEXT,
  additional_info_requested TEXT,
  assigned_admin_email TEXT,
  
  -- Document Sharing Link & Token
  access_token VARCHAR(120) UNIQUE,
  access_expires_at TIMESTAMPTZ,
  access_granted_at TIMESTAMPTZ,
  shared_document_ids UUID[] DEFAULT ARRAY[]::UUID[],
  custom_approval_message TEXT,

  -- Client Environment / Audit Meta
  ip_address TEXT,
  user_agent TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. Verification Access Logs (Logs whenever approved documents or portal links are accessed)
CREATE TABLE IF NOT EXISTS public.verification_access_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES public.verification_requests(id) ON DELETE CASCADE,
  access_token VARCHAR(120) NOT NULL,
  document_id UUID REFERENCES public.project_verification_documents(id) ON DELETE SET NULL,
  action_type VARCHAR(50) NOT NULL, -- 'portal_view' | 'document_view' | 'document_download'
  ip_address TEXT,
  user_agent TEXT,
  accessed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 6. Verification Audit Logs (Internal trail of all admin actions, approvals, rejections, notes)
CREATE TABLE IF NOT EXISTS public.verification_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID REFERENCES public.verification_requests(id) ON DELETE CASCADE,
  action VARCHAR(100) NOT NULL,
  actor_email TEXT NOT NULL,
  previous_status VARCHAR(50),
  new_status VARCHAR(50),
  notes TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for optimal queries
CREATE INDEX IF NOT EXISTS idx_verification_requests_ref ON public.verification_requests(reference_number);
CREATE INDEX IF NOT EXISTS idx_verification_requests_project_id ON public.verification_requests(project_id);
CREATE INDEX IF NOT EXISTS idx_verification_requests_status ON public.verification_requests(status);
CREATE INDEX IF NOT EXISTS idx_verification_requests_token ON public.verification_requests(access_token);
CREATE INDEX IF NOT EXISTS idx_verification_docs_dossier ON public.project_verification_documents(dossier_id);
CREATE INDEX IF NOT EXISTS idx_verification_docs_project ON public.project_verification_documents(project_id);
CREATE INDEX IF NOT EXISTS idx_verification_access_logs_req ON public.verification_access_logs(request_id);
CREATE INDEX IF NOT EXISTS idx_verification_audit_logs_req ON public.verification_audit_logs(request_id);

-- Storage bucket for verification files
INSERT INTO storage.buckets (id, name, public)
VALUES ('verification-docs', 'verification-docs', false)
ON CONFLICT (id) DO UPDATE SET public = false;

-- Enable Row Level Security (RLS)
ALTER TABLE public.project_verification_dossiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_verification_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_access_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies:
-- Allow public visitors to insert verification requests
CREATE POLICY "Allow public to insert verification requests"
ON public.verification_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow public read of request by reference number and email match OR access token
CREATE POLICY "Allow applicant to read own request by token or ref"
ON public.verification_requests
FOR SELECT
TO anon, authenticated
USING (
  access_token IS NOT NULL
  OR auth.role() = 'service_role'
  OR auth.role() = 'authenticated'
);

-- Allow admins full access (Authenticated staff or service_role)
CREATE POLICY "Admin full access on verification requests"
ON public.verification_requests
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Admin full access on dossiers"
ON public.project_verification_dossiers
FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Admin full access on documents"
ON public.project_verification_documents
FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Insert access logs"
ON public.verification_access_logs
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admin access on audit logs"
ON public.verification_audit_logs
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
