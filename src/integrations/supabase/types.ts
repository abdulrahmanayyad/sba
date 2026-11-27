export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      inquiries: {
        Row: {
          company: string
          contact_name: string
          country: string
          created_at: string
          email: string
          file_paths: string[]
          id: string
          message: string
          model_code: string
          phone: string
          product_type: string
          quantity: string
          timeline: string
        }
        Insert: {
          company?: string
          contact_name?: string
          country?: string
          created_at?: string
          email?: string
          file_paths?: string[]
          id?: string
          message?: string
          model_code?: string
          phone?: string
          product_type?: string
          quantity?: string
          timeline?: string
        }
        Update: {
          company?: string
          contact_name?: string
          country?: string
          created_at?: string
          email?: string
          file_paths?: string[]
          id?: string
          message?: string
          model_code?: string
          phone?: string
          product_type?: string
          quantity?: string
          timeline?: string
        }
        Relationships: []
      }
      models: {
        Row: {
          category: string
          code: string
          colour: string
          composition: string
          created_at: string
          fabric: string
          moq: number
          name: string
          season: string
          segment: string
          sizes: string
          tags: string[]
        }
        Insert: {
          category: string
          code: string
          colour?: string
          composition?: string
          created_at?: string
          fabric?: string
          moq?: number
          name: string
          season?: string
          segment: string
          sizes?: string
          tags?: string[]
        }
        Update: {
          category?: string
          code?: string
          colour?: string
          composition?: string
          created_at?: string
          fabric?: string
          moq?: number
          name?: string
          season?: string
          segment?: string
          sizes?: string
          tags?: string[]
        }
        Relationships: []
      }
      central_submissions: {
        Row: {
          id: string
          reference_code: string
          form_type: string
          form_title_ar: string
          form_title_en: string
          sector: string
          status: string
          applicant_name: string
          applicant_email: string
          applicant_phone: string
          applicant_company: string | null
          applicant_country: string | null
          applicant_city: string | null
          applicant_job_title: string | null
          details: Json
          model_code: string | null
          assigned_specialist: string | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          reference_code: string
          form_type: string
          form_title_ar: string
          form_title_en: string
          sector: string
          status?: string
          applicant_name: string
          applicant_email: string
          applicant_phone: string
          applicant_company?: string | null
          applicant_country?: string | null
          applicant_city?: string | null
          applicant_job_title?: string | null
          details?: Json
          model_code?: string | null
          assigned_specialist?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          reference_code?: string
          form_type?: string
          form_title_ar?: string
          form_title_en?: string
          sector?: string
          status?: string
          applicant_name?: string
          applicant_email?: string
          applicant_phone?: string
          applicant_company?: string | null
          applicant_country?: string | null
          applicant_city?: string | null
          applicant_job_title?: string | null
          details?: Json
          model_code?: string | null
          assigned_specialist?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      submission_notes: {
        Row: {
          id: string
          submission_id: string
          author_id: string | null
          author_name: string
          note_text: string
          created_at: string
        }
        Insert: {
          id?: string
          submission_id: string
          author_id?: string | null
          author_name: string
          note_text: string
          created_at?: string
        }
        Update: {
          id?: string
          submission_id?: string
          author_id?: string | null
          author_name?: string
          note_text?: string
          created_at?: string
        }
        Relationships: []
      }
      submission_audit_logs: {
        Row: {
          id: string
          submission_id: string
          action: string
          performed_by: string
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          submission_id: string
          action: string
          performed_by: string
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          submission_id?: string
          action?: string
          performed_by?: string
          metadata?: Json | null
          created_at?: string
        }
        Relationships: []
      }
      verification_dossiers: {
        Row: {
          id: string
          project_reference: string
          project_name_ar: string
          project_name_en: string
          client_name_ar: string
          client_name_en: string
          location_ar: string
          location_en: string
          contract_date: string | null
          execution_period: string | null
          project_value_disclosed: string | null
          scope_of_work_ar: string
          scope_of_work_en: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_reference: string
          project_name_ar: string
          project_name_en: string
          client_name_ar: string
          client_name_en: string
          location_ar: string
          location_en: string
          contract_date?: string | null
          execution_period?: string | null
          project_value_disclosed?: string | null
          scope_of_work_ar: string
          scope_of_work_en: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_reference?: string
          project_name_ar?: string
          project_name_en?: string
          client_name_ar?: string
          client_name_en?: string
          location_ar?: string
          location_en?: string
          contract_date?: string | null
          execution_period?: string | null
          project_value_disclosed?: string | null
          scope_of_work_ar?: string
          scope_of_work_en?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      verification_documents: {
        Row: {
          id: string
          dossier_id: string
          doc_type: string
          title_ar: string
          title_en: string
          description_ar: string | null
          description_en: string | null
          file_path: string
          file_size_bytes: number
          mime_type: string
          is_redacted: boolean
          legal_disclosure_confirmed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          dossier_id: string
          doc_type: string
          title_ar: string
          title_en: string
          description_ar?: string | null
          description_en?: string | null
          file_path: string
          file_size_bytes?: number
          mime_type?: string
          is_redacted?: boolean
          legal_disclosure_confirmed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          dossier_id?: string
          doc_type?: string
          title_ar?: string
          title_en?: string
          description_ar?: string | null
          description_en?: string | null
          file_path?: string
          file_size_bytes?: number
          mime_type?: string
          is_redacted?: boolean
          legal_disclosure_confirmed?: boolean
          created_at?: string
        }
        Relationships: []
      }
      verification_requests: {
        Row: {
          id: string
          request_reference: string
          dossier_id: string
          requester_name: string
          requester_email: string
          requester_phone: string
          requester_organization: string
          requester_role: string | null
          justification_purpose: string
          nda_accepted: boolean
          nda_accepted_at: string | null
          status: string
          reviewed_by: string | null
          reviewed_at: string | null
          rejection_reason: string | null
          created_at: string
        }
        Insert: {
          id?: string
          request_reference: string
          dossier_id: string
          requester_name: string
          requester_email: string
          requester_phone: string
          requester_organization: string
          requester_role?: string | null
          justification_purpose: string
          nda_accepted?: boolean
          nda_accepted_at?: string | null
          status?: string
          reviewed_by?: string | null
          reviewed_at?: string | null
          rejection_reason?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          request_reference?: string
          dossier_id?: string
          requester_name?: string
          requester_email?: string
          requester_phone?: string
          requester_organization?: string
          requester_role?: string | null
          justification_purpose?: string
          nda_accepted?: boolean
          nda_accepted_at?: string | null
          status?: string
          reviewed_by?: string | null
          reviewed_at?: string | null
          rejection_reason?: string | null
          created_at?: string
        }
        Relationships: []
      }
      verification_tokens: {
        Row: {
          id: string
          request_id: string
          token_hash: string
          expires_at: string
          max_views: number
          view_count: number
          is_revoked: boolean
          created_at: string
        }
        Insert: {
          id?: string
          request_id: string
          token_hash: string
          expires_at: string
          max_views?: number
          view_count?: number
          is_revoked?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          request_id?: string
          token_hash?: string
          expires_at?: string
          max_views?: number
          view_count?: number
          is_revoked?: boolean
          created_at?: string
        }
        Relationships: []
      }
      verification_access_logs: {
        Row: {
          id: string
          request_id: string | null
          document_id: string | null
          token_used: string | null
          ip_address: string | null
          user_agent: string | null
          action: string
          timestamp: string
        }
        Insert: {
          id?: string
          request_id?: string | null
          document_id?: string | null
          token_used?: string | null
          ip_address?: string | null
          user_agent?: string | null
          action: string
          timestamp?: string
        }
        Update: {
          id?: string
          request_id?: string | null
          document_id?: string | null
          token_used?: string | null
          ip_address?: string | null
          user_agent?: string | null
          action?: string
          timestamp?: string
        }
        Relationships: []
      }
      global_market_studies: {
        Row: {
          id: string
          slug: string
          sector: string
          scope: string
          region: string
          country_code: string | null
          country_name_ar: string
          country_name_en: string
          title_ar: string
          title_en: string
          subtitle_ar: string | null
          subtitle_en: string | null
          opportunity_score: number | null
          opportunity_tier: string | null
          opportunity_tier_ar: string | null
          regional_rank: number | null
          trade_indicator_display: string | null
          trade_indicator_year: string | null
          product_tags_ar: string[]
          product_tags_en: string[]
          kpis: Json
          sections: Json
          sources: Json
          download_docx_url: string | null
          download_xlsx_url: string | null
          download_zip_url: string | null
          status: string
          approval_status: string
          version: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          sector: string
          scope?: string
          region: string
          country_code?: string | null
          country_name_ar: string
          country_name_en: string
          title_ar: string
          title_en: string
          subtitle_ar?: string | null
          subtitle_en?: string | null
          opportunity_score?: number | null
          opportunity_tier?: string | null
          opportunity_tier_ar?: string | null
          regional_rank?: number | null
          trade_indicator_display?: string | null
          trade_indicator_year?: string | null
          product_tags_ar?: string[]
          product_tags_en?: string[]
          kpis?: Json
          sections?: Json
          sources?: Json
          download_docx_url?: string | null
          download_xlsx_url?: string | null
          download_zip_url?: string | null
          status?: string
          approval_status?: string
          version?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          sector?: string
          scope?: string
          region?: string
          country_code?: string | null
          country_name_ar?: string
          country_name_en?: string
          title_ar?: string
          title_en?: string
          subtitle_ar?: string | null
          subtitle_en?: string | null
          opportunity_score?: number | null
          opportunity_tier?: string | null
          opportunity_tier_ar?: string | null
          regional_rank?: number | null
          trade_indicator_display?: string | null
          trade_indicator_year?: string | null
          product_tags_ar?: string[]
          product_tags_en?: string[]
          kpis?: Json
          sections?: Json
          sources?: Json
          download_docx_url?: string | null
          download_xlsx_url?: string | null
          download_zip_url?: string | null
          status?: string
          approval_status?: string
          version?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          role: string
          department: string | null
          is_active: boolean
          phone: string | null
          last_login_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name: string
          role?: string
          department?: string | null
          is_active?: boolean
          phone?: string | null
          last_login_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: string
          department?: string | null
          is_active?: boolean
          phone?: string | null
          last_login_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: "super_admin" | "sector_director" | "compliance_officer" | "analyst" | "client_guest"
      inquiry_status:
        | "new"
        | "under_review"
        | "info_required"
        | "qualified"
        | "not_qualified"
        | "assigned"
        | "contacted"
        | "scheduled"
        | "proposal_sent"
        | "in_progress"
        | "completed"
        | "closed"
      sector_type: "construction" | "garment" | "environmental" | "food" | "investor" | "group" | "multi"
      verification_request_status: "pending_review" | "under_nda_verification" | "approved" | "rejected" | "expired" | "revoked"
      study_status: "in_research" | "under_review" | "completed" | "needs_update" | "archived"
      approval_status: "draft" | "reviewed" | "approved"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
