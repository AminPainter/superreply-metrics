export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      account_insights: {
        Row: {
          business_id: number
          created_at: string
          date: string
          id: number
          metadata: Json | null
        }
        Insert: {
          business_id: number
          created_at?: string
          date?: string
          id?: number
          metadata?: Json | null
        }
        Update: {
          business_id?: number
          created_at?: string
          date?: string
          id?: number
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "account_insights_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      account_members: {
        Row: {
          account_id: string
          created_at: string
          first_name: string
          id: string
          last_name: string | null
          modified_at: string
          role: Database["public"]["Enums"]["member_role"]
          user_id: string
        }
        Insert: {
          account_id: string
          created_at?: string
          first_name: string
          id?: string
          last_name?: string | null
          modified_at?: string
          role?: Database["public"]["Enums"]["member_role"]
          user_id: string
        }
        Update: {
          account_id?: string
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string | null
          modified_at?: string
          role?: Database["public"]["Enums"]["member_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_members_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      account_payments_details: {
        Row: {
          bank_account_number: string | null
          bank_beneficiary_name: string | null
          bank_ifsc_code: string | null
          business_id: number
          created_at: string
          is_active: boolean
          pg_account_id: string
          pg_account_product_id: string | null
          pg_address: Json | null
          pg_contact_name: string | null
          pg_customer_facing_business_name: string | null
          pg_email: string | null
          pg_legal_business_name: string | null
          pg_phone: string | null
          pg_stakeholder_id: string | null
          settlement_metadata: Json
          status: string | null
        }
        Insert: {
          bank_account_number?: string | null
          bank_beneficiary_name?: string | null
          bank_ifsc_code?: string | null
          business_id: number
          created_at?: string
          is_active?: boolean
          pg_account_id: string
          pg_account_product_id?: string | null
          pg_address?: Json | null
          pg_contact_name?: string | null
          pg_customer_facing_business_name?: string | null
          pg_email?: string | null
          pg_legal_business_name?: string | null
          pg_phone?: string | null
          pg_stakeholder_id?: string | null
          settlement_metadata?: Json
          status?: string | null
        }
        Update: {
          bank_account_number?: string | null
          bank_beneficiary_name?: string | null
          bank_ifsc_code?: string | null
          business_id?: number
          created_at?: string
          is_active?: boolean
          pg_account_id?: string
          pg_account_product_id?: string | null
          pg_address?: Json | null
          pg_contact_name?: string | null
          pg_customer_facing_business_name?: string | null
          pg_email?: string | null
          pg_legal_business_name?: string | null
          pg_phone?: string | null
          pg_stakeholder_id?: string | null
          settlement_metadata?: Json
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "account_payments_details_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      account_stats_daily: {
        Row: {
          business_id: number
          created_at: string
          date: string
          id: number
          modified_at: string | null
          total_comments: number | null
          total_contacts: number | null
        }
        Insert: {
          business_id: number
          created_at?: string
          date: string
          id?: number
          modified_at?: string | null
          total_comments?: number | null
          total_contacts?: number | null
        }
        Update: {
          business_id?: number
          created_at?: string
          date?: string
          id?: number
          modified_at?: string | null
          total_comments?: number | null
          total_contacts?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "account_stats_daily_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      accounts: {
        Row: {
          created_at: string
          id: string
          metadata: Json | null
          modified_at: string
          name: string
          status: Database["public"]["Enums"]["account_status"]
        }
        Insert: {
          created_at?: string
          id?: string
          metadata?: Json | null
          modified_at?: string
          name: string
          status?: Database["public"]["Enums"]["account_status"]
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json | null
          modified_at?: string
          name?: string
          status?: Database["public"]["Enums"]["account_status"]
        }
        Relationships: []
      }
      actions: {
        Row: {
          created_at: string
          description: string | null
          details: Json | null
          id: number
          type: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          details?: Json | null
          id?: number
          type?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          details?: Json | null
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      agent_follow_up_queue: {
        Row: {
          agent_id: string
          business_id: number
          contact_id: number
          created_at: string
          delay_time: number
          follow_up_index: number
          id: number
          is_processed: boolean
          trigger_time: string
        }
        Insert: {
          agent_id: string
          business_id: number
          contact_id: number
          created_at?: string
          delay_time: number
          follow_up_index: number
          id?: number
          is_processed?: boolean
          trigger_time: string
        }
        Update: {
          agent_id?: string
          business_id?: number
          contact_id?: number
          created_at?: string
          delay_time?: number
          follow_up_index?: number
          id?: number
          is_processed?: boolean
          trigger_time?: string
        }
        Relationships: []
      }
      agent_tools: {
        Row: {
          agent_version_id: string
          created_at: string
          execution_metadata: Json | null
          id: string
          modified_at: string
          tool_definition: Json
          tool_name: Database["public"]["Enums"]["tool_name_enum"]
        }
        Insert: {
          agent_version_id: string
          created_at?: string
          execution_metadata?: Json | null
          id?: string
          modified_at?: string
          tool_definition: Json
          tool_name: Database["public"]["Enums"]["tool_name_enum"]
        }
        Update: {
          agent_version_id?: string
          created_at?: string
          execution_metadata?: Json | null
          id?: string
          modified_at?: string
          tool_definition?: Json
          tool_name?: Database["public"]["Enums"]["tool_name_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "agent_tools_agent_version_id_fkey"
            columns: ["agent_version_id"]
            isOneToOne: false
            referencedRelation: "agent_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_versions: {
        Row: {
          agent_id: string
          builder_state: Json | null
          created_at: string | null
          follow_ups: Json
          id: string
          is_draft: boolean
          modified_at: string | null
          prompt: Json
          response_delay_first_message: Database["public"]["Enums"]["agent_response_delay"]
          response_delay_subsequent_messages: Database["public"]["Enums"]["agent_response_delay"]
          trigger_tags: string[]
        }
        Insert: {
          agent_id: string
          builder_state?: Json | null
          created_at?: string | null
          follow_ups?: Json
          id?: string
          is_draft?: boolean
          modified_at?: string | null
          prompt: Json
          response_delay_first_message?: Database["public"]["Enums"]["agent_response_delay"]
          response_delay_subsequent_messages?: Database["public"]["Enums"]["agent_response_delay"]
          trigger_tags?: string[]
        }
        Update: {
          agent_id?: string
          builder_state?: Json | null
          created_at?: string | null
          follow_ups?: Json
          id?: string
          is_draft?: boolean
          modified_at?: string | null
          prompt?: Json
          response_delay_first_message?: Database["public"]["Enums"]["agent_response_delay"]
          response_delay_subsequent_messages?: Database["public"]["Enums"]["agent_response_delay"]
          trigger_tags?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "agent_versions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agents: {
        Row: {
          active_version_id: string | null
          builder_type: Database["public"]["Enums"]["agent_builder_type"]
          business_id: number
          created_at: string
          description: string | null
          id: string
          is_faq_embedding_enabled: boolean
          model_name: Database["public"]["Enums"]["llm_model_name"]
          modified_at: string
          name: string
          status: Database["public"]["Enums"]["agent_status"]
          temperature: number
        }
        Insert: {
          active_version_id?: string | null
          builder_type?: Database["public"]["Enums"]["agent_builder_type"]
          business_id: number
          created_at?: string
          description?: string | null
          id?: string
          is_faq_embedding_enabled?: boolean
          model_name?: Database["public"]["Enums"]["llm_model_name"]
          modified_at?: string
          name: string
          status?: Database["public"]["Enums"]["agent_status"]
          temperature?: number
        }
        Update: {
          active_version_id?: string | null
          builder_type?: Database["public"]["Enums"]["agent_builder_type"]
          business_id?: number
          created_at?: string
          description?: string | null
          id?: string
          is_faq_embedding_enabled?: boolean
          model_name?: Database["public"]["Enums"]["llm_model_name"]
          modified_at?: string
          name?: string
          status?: Database["public"]["Enums"]["agent_status"]
          temperature?: number
        }
        Relationships: [
          {
            foreignKeyName: "agents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_active_version"
            columns: ["active_version_id"]
            isOneToOne: false
            referencedRelation: "agent_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      business_members: {
        Row: {
          account_member_id: string
          business_id: number
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          account_member_id: string
          business_id: number
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          account_member_id?: string
          business_id?: number
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_members_account_member_id_fkey"
            columns: ["account_member_id"]
            isOneToOne: false
            referencedRelation: "account_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_members_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          account_id: string
          alerts: Json | null
          business_code: string[] | null
          contact_details: Json | null
          created_at: string
          DEP_access_token: string | null
          DEP_account_status: string | null
          DEP_account_status_timestamp: string | null
          DEP_account_type: Database["public"]["Enums"]["account_type"]
          DEP_expires_at: number | null
          DEP_is_access_token_valid: boolean
          DEP_is_next_reel: boolean
          DEP_is_next_story: boolean
          DEP_platform_user_id: string | null
          DEP_profile_picture: string | null
          DEP_social_media: Database["public"]["Enums"]["social_media_platform"]
          id: number
          industry: string | null
          is_sales_agent_active: boolean
          metadata: Json | null
          modified_at: string
          name: string
          subscription_status: boolean
          user_id: string
        }
        Insert: {
          account_id: string
          alerts?: Json | null
          business_code?: string[] | null
          contact_details?: Json | null
          created_at?: string
          DEP_access_token?: string | null
          DEP_account_status?: string | null
          DEP_account_status_timestamp?: string | null
          DEP_account_type?: Database["public"]["Enums"]["account_type"]
          DEP_expires_at?: number | null
          DEP_is_access_token_valid?: boolean
          DEP_is_next_reel?: boolean
          DEP_is_next_story?: boolean
          DEP_platform_user_id?: string | null
          DEP_profile_picture?: string | null
          DEP_social_media?: Database["public"]["Enums"]["social_media_platform"]
          id?: number
          industry?: string | null
          is_sales_agent_active?: boolean
          metadata?: Json | null
          modified_at?: string
          name: string
          subscription_status?: boolean
          user_id: string
        }
        Update: {
          account_id?: string
          alerts?: Json | null
          business_code?: string[] | null
          contact_details?: Json | null
          created_at?: string
          DEP_access_token?: string | null
          DEP_account_status?: string | null
          DEP_account_status_timestamp?: string | null
          DEP_account_type?: Database["public"]["Enums"]["account_type"]
          DEP_expires_at?: number | null
          DEP_is_access_token_valid?: boolean
          DEP_is_next_reel?: boolean
          DEP_is_next_story?: boolean
          DEP_platform_user_id?: string | null
          DEP_profile_picture?: string | null
          DEP_social_media?: Database["public"]["Enums"]["social_media_platform"]
          id?: number
          industry?: string | null
          is_sales_agent_active?: boolean
          metadata?: Json | null
          modified_at?: string
          name?: string
          subscription_status?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "businesses_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      calendly_bookings: {
        Row: {
          booking_type: string
          calendly_user_id: string
          created_at: string
          event_uri: string
          id: number
          invitee_email: string
          invitee_first_name: string | null
          invitee_last_name: string | null
          invitee_name: string | null
          invitee_timezone: string
          metadata: Json | null
          modified_at: string | null
          phone_number: string | null
          scheduled_event_end_time: string | null
          scheduled_event_start_time: string | null
          scheduled_event_uri: string | null
          status: Database["public"]["Enums"]["calendly_bookings_status"]
        }
        Insert: {
          booking_type?: string
          calendly_user_id: string
          created_at?: string
          event_uri: string
          id?: number
          invitee_email: string
          invitee_first_name?: string | null
          invitee_last_name?: string | null
          invitee_name?: string | null
          invitee_timezone?: string
          metadata?: Json | null
          modified_at?: string | null
          phone_number?: string | null
          scheduled_event_end_time?: string | null
          scheduled_event_start_time?: string | null
          scheduled_event_uri?: string | null
          status?: Database["public"]["Enums"]["calendly_bookings_status"]
        }
        Update: {
          booking_type?: string
          calendly_user_id?: string
          created_at?: string
          event_uri?: string
          id?: number
          invitee_email?: string
          invitee_first_name?: string | null
          invitee_last_name?: string | null
          invitee_name?: string | null
          invitee_timezone?: string
          metadata?: Json | null
          modified_at?: string | null
          phone_number?: string | null
          scheduled_event_end_time?: string | null
          scheduled_event_start_time?: string | null
          scheduled_event_uri?: string | null
          status?: Database["public"]["Enums"]["calendly_bookings_status"]
        }
        Relationships: [
          {
            foreignKeyName: "calendly_bookings_calendly_user_id_fkey"
            columns: ["calendly_user_id"]
            isOneToOne: false
            referencedRelation: "external_integrations"
            referencedColumns: ["provider_user_id"]
          },
        ]
      }
      calendly_notifications: {
        Row: {
          created_at: string
          enabled_notifications: string[]
          event_type_id: string
          external_integration_user_id: string
          id: string
          metadata: Json | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          enabled_notifications?: string[]
          event_type_id: string
          external_integration_user_id: string
          id?: string
          metadata?: Json | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          enabled_notifications?: string[]
          event_type_id?: string
          external_integration_user_id?: string
          id?: string
          metadata?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendly_notifications_external_user_fkey"
            columns: ["external_integration_user_id"]
            isOneToOne: true
            referencedRelation: "external_integrations"
            referencedColumns: ["provider_user_id"]
          },
        ]
      }
      channels: {
        Row: {
          access_token: string | null
          auth_method: Database["public"]["Enums"]["auth_method_type"]
          business_id: number
          channel_status: string | null
          channel_status_timestamp: string | null
          channel_type: Database["public"]["Enums"]["channel_type"] | null
          created_at: string
          expires_at: number | null
          id: string
          is_access_token_valid: boolean
          is_next_reel: boolean
          is_next_story: boolean
          metadata: Json | null
          modified_at: string
          name: string | null
          platform_user_id: string
          profile_picture: string | null
        }
        Insert: {
          access_token?: string | null
          auth_method?: Database["public"]["Enums"]["auth_method_type"]
          business_id: number
          channel_status?: string | null
          channel_status_timestamp?: string | null
          channel_type?: Database["public"]["Enums"]["channel_type"] | null
          created_at?: string
          expires_at?: number | null
          id?: string
          is_access_token_valid?: boolean
          is_next_reel?: boolean
          is_next_story?: boolean
          metadata?: Json | null
          modified_at?: string
          name?: string | null
          platform_user_id: string
          profile_picture?: string | null
        }
        Update: {
          access_token?: string | null
          auth_method?: Database["public"]["Enums"]["auth_method_type"]
          business_id?: number
          channel_status?: string | null
          channel_status_timestamp?: string | null
          channel_type?: Database["public"]["Enums"]["channel_type"] | null
          created_at?: string
          expires_at?: number | null
          id?: string
          is_access_token_valid?: boolean
          is_next_reel?: boolean
          is_next_story?: boolean
          metadata?: Json | null
          modified_at?: string
          name?: string | null
          platform_user_id?: string
          profile_picture?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "channels_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      conditions: {
        Row: {
          created_at: string
          id: number
          type: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          type?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          type?: string | null
          value?: string | null
        }
        Relationships: []
      }
      contact_tags: {
        Row: {
          contact_id: number
          created_at: string
          id: number
          modified_at: string
          tag_id: number
        }
        Insert: {
          contact_id: number
          created_at?: string
          id?: number
          modified_at?: string
          tag_id: number
        }
        Update: {
          contact_id?: number
          created_at?: string
          id?: number
          modified_at?: string
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "contact_tags_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          agent_thread_id: string | null
          business_id: number
          channel_id: string | null
          channel_type: Database["public"]["Enums"]["channel_type"]
          contacts_ghl_id: string | null
          created_at: string
          follower_count: number | null
          gender: string | null
          id: number
          igsid: string
          is_business_follow_user: boolean | null
          is_user_follow_business: boolean | null
          metadata: Json | null
          modified_at: string
          name: string | null
          platform_conversation_id: string | null
          profile_picture: string | null
          source: string
          state: Database["public"]["Enums"]["contact_state"] | null
          state_modified_time: string | null
          username: string
        }
        Insert: {
          agent_thread_id?: string | null
          business_id: number
          channel_id?: string | null
          channel_type?: Database["public"]["Enums"]["channel_type"]
          contacts_ghl_id?: string | null
          created_at?: string
          follower_count?: number | null
          gender?: string | null
          id?: number
          igsid: string
          is_business_follow_user?: boolean | null
          is_user_follow_business?: boolean | null
          metadata?: Json | null
          modified_at?: string
          name?: string | null
          platform_conversation_id?: string | null
          profile_picture?: string | null
          source?: string
          state?: Database["public"]["Enums"]["contact_state"] | null
          state_modified_time?: string | null
          username: string
        }
        Update: {
          agent_thread_id?: string | null
          business_id?: number
          channel_id?: string | null
          channel_type?: Database["public"]["Enums"]["channel_type"]
          contacts_ghl_id?: string | null
          created_at?: string
          follower_count?: number | null
          gender?: string | null
          id?: number
          igsid?: string
          is_business_follow_user?: boolean | null
          is_user_follow_business?: boolean | null
          metadata?: Json | null
          modified_at?: string
          name?: string | null
          platform_conversation_id?: string | null
          profile_picture?: string | null
          source?: string
          state?: Database["public"]["Enums"]["contact_state"] | null
          state_modified_time?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "contacts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_contacts_ghl_id_fkey"
            columns: ["contacts_ghl_id"]
            isOneToOne: false
            referencedRelation: "contacts_ghl"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts_ghl: {
        Row: {
          business_id: number
          created_at: string
          email: string | null
          first_name: string | null
          ghl_contact_id: string
          id: string
          last_name: string | null
          modified_at: string
          name: string | null
          phone: string | null
          tags: Json | null
        }
        Insert: {
          business_id: number
          created_at?: string
          email?: string | null
          first_name?: string | null
          ghl_contact_id: string
          id?: string
          last_name?: string | null
          modified_at?: string
          name?: string | null
          phone?: string | null
          tags?: Json | null
        }
        Update: {
          business_id?: number
          created_at?: string
          email?: string | null
          first_name?: string | null
          ghl_contact_id?: string
          id?: string
          last_name?: string | null
          modified_at?: string
          name?: string | null
          phone?: string | null
          tags?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_ghl_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      external_integrations: {
        Row: {
          access_token: string | null
          business_id: number | null
          created_at: string
          id: number
          metadata: Json | null
          modified_at: string
          organization_uri: string | null
          phone_number: string | null
          provider: Database["public"]["Enums"]["external_integration_provider"]
          provider_user_id: string
          refresh_token: string | null
          token_expires_at: string | null
          webhook_id: string | null
          webhook_url: string | null
        }
        Insert: {
          access_token?: string | null
          business_id?: number | null
          created_at?: string
          id?: number
          metadata?: Json | null
          modified_at?: string
          organization_uri?: string | null
          phone_number?: string | null
          provider: Database["public"]["Enums"]["external_integration_provider"]
          provider_user_id: string
          refresh_token?: string | null
          token_expires_at?: string | null
          webhook_id?: string | null
          webhook_url?: string | null
        }
        Update: {
          access_token?: string | null
          business_id?: number | null
          created_at?: string
          id?: number
          metadata?: Json | null
          modified_at?: string
          organization_uri?: string | null
          phone_number?: string | null
          provider?: Database["public"]["Enums"]["external_integration_provider"]
          provider_user_id?: string
          refresh_token?: string | null
          token_expires_at?: string | null
          webhook_id?: string | null
          webhook_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "external_integrations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      google_calendar_bookings: {
        Row: {
          attendees: Json | null
          business_id: number
          conference_data: Json | null
          created_at: string
          creator_email: string | null
          description: string | null
          event_end_time: string
          event_start_time: string
          google_event_etag: string | null
          google_event_id: string
          hangout_link: string | null
          html_link: string | null
          ical_uid: string | null
          id: number
          metadata: Json | null
          modified_at: string | null
          organizer_email: string | null
          status: string
          summary: string
          timezone: string
        }
        Insert: {
          attendees?: Json | null
          business_id: number
          conference_data?: Json | null
          created_at?: string
          creator_email?: string | null
          description?: string | null
          event_end_time: string
          event_start_time: string
          google_event_etag?: string | null
          google_event_id: string
          hangout_link?: string | null
          html_link?: string | null
          ical_uid?: string | null
          id?: number
          metadata?: Json | null
          modified_at?: string | null
          organizer_email?: string | null
          status?: string
          summary: string
          timezone: string
        }
        Update: {
          attendees?: Json | null
          business_id?: number
          conference_data?: Json | null
          created_at?: string
          creator_email?: string | null
          description?: string | null
          event_end_time?: string
          event_start_time?: string
          google_event_etag?: string | null
          google_event_id?: string
          hangout_link?: string | null
          html_link?: string | null
          ical_uid?: string | null
          id?: number
          metadata?: Json | null
          modified_at?: string | null
          organizer_email?: string | null
          status?: string
          summary?: string
          timezone?: string
        }
        Relationships: [
          {
            foreignKeyName: "google_calendar_bookings_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      llm_model_pricing: {
        Row: {
          cached_cost_per_1m: number
          input_cost_per_1m: number
          model_name: string
          output_cost_per_1m: number
          updated_at: string
        }
        Insert: {
          cached_cost_per_1m: number
          input_cost_per_1m: number
          model_name: string
          output_cost_per_1m: number
          updated_at?: string
        }
        Update: {
          cached_cost_per_1m?: number
          input_cost_per_1m?: number
          model_name?: string
          output_cost_per_1m?: number
          updated_at?: string
        }
        Relationships: []
      }
      media_details: {
        Row: {
          business_id: number
          comments_count: number | null
          created_at: string
          creation_date: string | null
          id: number
          like_count: number | null
          media_id: string
          media_metadata: Json | null
          media_type: string | null
          media_url: string | null
          modified_at: string
        }
        Insert: {
          business_id: number
          comments_count?: number | null
          created_at?: string
          creation_date?: string | null
          id?: number
          like_count?: number | null
          media_id: string
          media_metadata?: Json | null
          media_type?: string | null
          media_url?: string | null
          modified_at?: string
        }
        Update: {
          business_id?: number
          comments_count?: number | null
          created_at?: string
          creation_date?: string | null
          id?: number
          like_count?: number | null
          media_id?: string
          media_metadata?: Json | null
          media_type?: string | null
          media_url?: string | null
          modified_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_details_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      media_insights: {
        Row: {
          created_at: string
          date: string
          id: number
          media_id: string | null
          metadata: Json
        }
        Insert: {
          created_at?: string
          date: string
          id?: number
          media_id?: string | null
          metadata: Json
        }
        Update: {
          created_at?: string
          date?: string
          id?: number
          media_id?: string | null
          metadata?: Json
        }
        Relationships: [
          {
            foreignKeyName: "media_insights_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "media_list"
            referencedColumns: ["media_id"]
          },
        ]
      }
      media_list: {
        Row: {
          business_id: number | null
          created_at: string
          creation_date: string | null
          id: number
          media_id: string
          media_type: string
          metadata: Json | null
          modified_at: string
        }
        Insert: {
          business_id?: number | null
          created_at?: string
          creation_date?: string | null
          id?: number
          media_id: string
          media_type?: string
          metadata?: Json | null
          modified_at?: string
        }
        Update: {
          business_id?: number | null
          created_at?: string
          creation_date?: string | null
          id?: number
          media_id?: string
          media_type?: string
          metadata?: Json | null
          modified_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_list_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      message_queue: {
        Row: {
          business_id: number
          contact_id: number
          created_at: string
          delay_time: number | null
          id: number
          is_processed: boolean
          trigger_time: string | null
          workflow_step_id: number
        }
        Insert: {
          business_id: number
          contact_id: number
          created_at?: string
          delay_time?: number | null
          id?: number
          is_processed?: boolean
          trigger_time?: string | null
          workflow_step_id: number
        }
        Update: {
          business_id?: number
          contact_id?: number
          created_at?: string
          delay_time?: number | null
          id?: number
          is_processed?: boolean
          trigger_time?: string | null
          workflow_step_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "message_queue_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_subscription_buckets: {
        Row: {
          contacts_consumed: number
          contacts_consumed_ai: number
          created_at: string
          id: number
          month_end: string
          month_start: string
          status: string | null
          subscription_cycle_id: number
        }
        Insert: {
          contacts_consumed?: number
          contacts_consumed_ai?: number
          created_at?: string
          id?: number
          month_end: string
          month_start: string
          status?: string | null
          subscription_cycle_id: number
        }
        Update: {
          contacts_consumed?: number
          contacts_consumed_ai?: number
          created_at?: string
          id?: number
          month_end?: string
          month_start?: string
          status?: string | null
          subscription_cycle_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "monthly_subscription_buckets_subscription_cycle_id_fkey"
            columns: ["subscription_cycle_id"]
            isOneToOne: false
            referencedRelation: "subscription_cycles"
            referencedColumns: ["id"]
          },
        ]
      }
      open_ai_consumption: {
        Row: {
          business_id: number | null
          cached_tokens: number | null
          contact_id: number | null
          created_at: string
          error_category: string | null
          id: number
          input_tokens: number | null
          metadata: Json | null
          model_name: Database["public"]["Enums"]["llm_model_name"] | null
          output_tokens: number | null
          total_cost_usd: number | null
          trace_id: string | null
        }
        Insert: {
          business_id?: number | null
          cached_tokens?: number | null
          contact_id?: number | null
          created_at?: string
          error_category?: string | null
          id?: number
          input_tokens?: number | null
          metadata?: Json | null
          model_name?: Database["public"]["Enums"]["llm_model_name"] | null
          output_tokens?: number | null
          total_cost_usd?: number | null
          trace_id?: string | null
        }
        Update: {
          business_id?: number | null
          cached_tokens?: number | null
          contact_id?: number | null
          created_at?: string
          error_category?: string | null
          id?: number
          input_tokens?: number | null
          metadata?: Json | null
          model_name?: Database["public"]["Enums"]["llm_model_name"] | null
          output_tokens?: number | null
          total_cost_usd?: number | null
          trace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "open_ai_consumption_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "open_ai_consumption_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      order_settlements: {
        Row: {
          amount: number
          business_id: number
          created_at: string
          id: number
          metadata: Json | null
          pg_account_id: string
          pg_settlement_id: string
          status: string
        }
        Insert: {
          amount: number
          business_id: number
          created_at?: string
          id?: number
          metadata?: Json | null
          pg_account_id: string
          pg_settlement_id: string
          status: string
        }
        Update: {
          amount?: number
          business_id?: number
          created_at?: string
          id?: number
          metadata?: Json | null
          pg_account_id?: string
          pg_settlement_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_settlements_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_settlements_pg_account_id_fkey"
            columns: ["pg_account_id"]
            isOneToOne: false
            referencedRelation: "account_payments_details"
            referencedColumns: ["pg_account_id"]
          },
        ]
      }
      orders: {
        Row: {
          amount: number
          contact_id: number
          created_at: string
          id: number
          modified_at: string
          order_metadata: Json | null
          payment_link: string | null
          pg_settlement_id: string | null
          product_id: number
          razorpay_order_id: string | null
          refund_status:
            | Database["public"]["Enums"]["order_refund_status"]
            | null
          settlement_status: string | null
          status: Database["public"]["Enums"]["order_status"]
          transfer_id: string | null
          transfer_metadata: Json | null
          transfer_status: string | null
          workflow_id: number | null
        }
        Insert: {
          amount: number
          contact_id: number
          created_at?: string
          id?: number
          modified_at?: string
          order_metadata?: Json | null
          payment_link?: string | null
          pg_settlement_id?: string | null
          product_id: number
          razorpay_order_id?: string | null
          refund_status?:
            | Database["public"]["Enums"]["order_refund_status"]
            | null
          settlement_status?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          transfer_id?: string | null
          transfer_metadata?: Json | null
          transfer_status?: string | null
          workflow_id?: number | null
        }
        Update: {
          amount?: number
          contact_id?: number
          created_at?: string
          id?: number
          modified_at?: string
          order_metadata?: Json | null
          payment_link?: string | null
          pg_settlement_id?: string | null
          product_id?: number
          razorpay_order_id?: string | null
          refund_status?:
            | Database["public"]["Enums"]["order_refund_status"]
            | null
          settlement_status?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          transfer_id?: string | null
          transfer_metadata?: Json | null
          transfer_status?: string | null
          workflow_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_pg_settlement_id_fkey"
            columns: ["pg_settlement_id"]
            isOneToOne: false
            referencedRelation: "order_settlements"
            referencedColumns: ["pg_settlement_id"]
          },
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_integrations: {
        Row: {
          access_token: string
          business_id: number
          created_at: string
          id: string
          is_active: boolean
          metadata: Json | null
          modified_at: string
          provider: string
          provider_user_id: string
          refresh_token: string
          token_expires_at: string | null
          webhook_id: string | null
        }
        Insert: {
          access_token: string
          business_id: number
          created_at?: string
          id?: string
          is_active?: boolean
          metadata?: Json | null
          modified_at?: string
          provider?: string
          provider_user_id: string
          refresh_token: string
          token_expires_at?: string | null
          webhook_id?: string | null
        }
        Update: {
          access_token?: string
          business_id?: number
          created_at?: string
          id?: string
          is_active?: boolean
          metadata?: Json | null
          modified_at?: string
          provider?: string
          provider_user_id?: string
          refresh_token?: string
          token_expires_at?: string | null
          webhook_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_integrations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          amount: number
          business_id: number
          created_at: string
          id: number
          product_metadata: Json | null
          product_name: string
        }
        Insert: {
          amount?: number
          business_id: number
          created_at?: string
          id?: number
          product_metadata?: Json | null
          product_name: string
        }
        Update: {
          amount?: number
          business_id?: number
          created_at?: string
          id?: number
          product_metadata?: Json | null
          product_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_agent_faq_embeddings: {
        Row: {
          answer: string
          business_id: number
          created_at: string
          embedding: string
          id: number
          modified_at: string
          question: string
        }
        Insert: {
          answer: string
          business_id: number
          created_at?: string
          embedding: string
          id?: number
          modified_at?: string
          question: string
        }
        Update: {
          answer?: string
          business_id?: number
          created_at?: string
          embedding?: string
          id?: number
          modified_at?: string
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_agent_faq_embeddings_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      social_media_activity_logs: {
        Row: {
          action_metadata: Json | null
          business_id: number
          channel_id: string | null
          contact_id: number | null
          created_at: string
          id: number
          interaction_type: Database["public"]["Enums"]["interaction_types"]
          media_id: string | null
          processing_status: Database["public"]["Enums"]["social_media_activity_logs_status"]
          source: string
        }
        Insert: {
          action_metadata?: Json | null
          business_id: number
          channel_id?: string | null
          contact_id?: number | null
          created_at?: string
          id?: number
          interaction_type?: Database["public"]["Enums"]["interaction_types"]
          media_id?: string | null
          processing_status?: Database["public"]["Enums"]["social_media_activity_logs_status"]
          source?: string
        }
        Update: {
          action_metadata?: Json | null
          business_id?: number
          channel_id?: string | null
          contact_id?: number | null
          created_at?: string
          id?: number
          interaction_type?: Database["public"]["Enums"]["interaction_types"]
          media_id?: string | null
          processing_status?: Database["public"]["Enums"]["social_media_activity_logs_status"]
          source?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_media_activity_logs_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_media_activity_logs_replica_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_media_activity_logs_replica_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_contact_usage: {
        Row: {
          business_id: number
          contacts_used: number
          contacts_used_ai: number
          created_at: string | null
          date: string
          id: number
          monthly_subscription_bucket_id: number
        }
        Insert: {
          business_id: number
          contacts_used?: number
          contacts_used_ai?: number
          created_at?: string | null
          date?: string
          id?: number
          monthly_subscription_bucket_id: number
        }
        Update: {
          business_id?: number
          contacts_used?: number
          contacts_used_ai?: number
          created_at?: string | null
          date?: string
          id?: number
          monthly_subscription_bucket_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "subscription_contact_usage_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_contact_usage_monthly_subscription_bucket_id_fkey"
            columns: ["monthly_subscription_bucket_id"]
            isOneToOne: false
            referencedRelation: "monthly_subscription_buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_contacts: {
        Row: {
          business_id: number
          contact_id: number
          created_at: string
          id: number
          monthly_subscription_bucket_id: number
        }
        Insert: {
          business_id: number
          contact_id: number
          created_at?: string
          id?: number
          monthly_subscription_bucket_id: number
        }
        Update: {
          business_id?: number
          contact_id?: number
          created_at?: string
          id?: number
          monthly_subscription_bucket_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "subscription_contacts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_contacts_monthly_subscription_bucket_id_fkey"
            columns: ["monthly_subscription_bucket_id"]
            isOneToOne: false
            referencedRelation: "monthly_subscription_buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_contacts_ai: {
        Row: {
          business_id: number
          contact_id: number
          created_at: string
          id: number
          monthly_subscription_bucket_id: number
        }
        Insert: {
          business_id: number
          contact_id: number
          created_at?: string
          id?: number
          monthly_subscription_bucket_id: number
        }
        Update: {
          business_id?: number
          contact_id?: number
          created_at?: string
          id?: number
          monthly_subscription_bucket_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "subscription_contacts_ai_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_contacts_ai_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: true
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_contacts_ai_monthly_subscription_bucket_id_fkey"
            columns: ["monthly_subscription_bucket_id"]
            isOneToOne: false
            referencedRelation: "monthly_subscription_buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_cycles: {
        Row: {
          created_at: string
          end_date: string
          id: number
          last_notified_threshold: number
          last_notified_threshold_ai: number
          start_date: string
          status: Database["public"]["Enums"]["subscription_status"]
          subscription_id: number
          subscription_type: Database["public"]["Enums"]["subscription_types"]
          total_contacts_allowed: number
          total_contacts_allowed_ai: number
          total_contacts_consumed: number
          total_contacts_consumed_ai: number
        }
        Insert: {
          created_at?: string
          end_date: string
          id?: number
          last_notified_threshold?: number
          last_notified_threshold_ai?: number
          start_date: string
          status?: Database["public"]["Enums"]["subscription_status"]
          subscription_id: number
          subscription_type?: Database["public"]["Enums"]["subscription_types"]
          total_contacts_allowed?: number
          total_contacts_allowed_ai?: number
          total_contacts_consumed?: number
          total_contacts_consumed_ai?: number
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: number
          last_notified_threshold?: number
          last_notified_threshold_ai?: number
          start_date?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          subscription_id?: number
          subscription_type?: Database["public"]["Enums"]["subscription_types"]
          total_contacts_allowed?: number
          total_contacts_allowed_ai?: number
          total_contacts_consumed?: number
          total_contacts_consumed_ai?: number
        }
        Relationships: [
          {
            foreignKeyName: "subscription_cycles_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          active_monthly_subscription_bucket_id: number | null
          active_subscription_cycle: number | null
          billing_period_months: number
          business_id: number
          chargebee_subscription_id: string | null
          created_at: string
          id: number
          metadata: Json | null
          next_renewal_date: string | null
          status: Database["public"]["Enums"]["subscription_status"]
          subscription_type: string | null
          total_runs_allowed: number | null
        }
        Insert: {
          active_monthly_subscription_bucket_id?: number | null
          active_subscription_cycle?: number | null
          billing_period_months?: number
          business_id: number
          chargebee_subscription_id?: string | null
          created_at?: string
          id?: number
          metadata?: Json | null
          next_renewal_date?: string | null
          status?: Database["public"]["Enums"]["subscription_status"]
          subscription_type?: string | null
          total_runs_allowed?: number | null
        }
        Update: {
          active_monthly_subscription_bucket_id?: number | null
          active_subscription_cycle?: number | null
          billing_period_months?: number
          business_id?: number
          chargebee_subscription_id?: string | null
          created_at?: string
          id?: number
          metadata?: Json | null
          next_renewal_date?: string | null
          status?: Database["public"]["Enums"]["subscription_status"]
          subscription_type?: string | null
          total_runs_allowed?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_active_monthly_subscription_bucket_id_fkey"
            columns: ["active_monthly_subscription_bucket_id"]
            isOneToOne: false
            referencedRelation: "monthly_subscription_buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          business_id: number
          created_at: string
          id: number
          modified_at: string
          name: string
        }
        Insert: {
          business_id: number
          created_at?: string
          id?: number
          modified_at?: string
          name: string
        }
        Update: {
          business_id?: number
          created_at?: string
          id?: number
          modified_at?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "tags_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      triggers: {
        Row: {
          applicable_channels: string[] | null
          created_at: string
          description: string | null
          details: Json | null
          id: number
          modified_at: string | null
          type: Database["public"]["Enums"]["trigger_names"]
        }
        Insert: {
          applicable_channels?: string[] | null
          created_at?: string
          description?: string | null
          details?: Json | null
          id?: number
          modified_at?: string | null
          type?: Database["public"]["Enums"]["trigger_names"]
        }
        Update: {
          applicable_channels?: string[] | null
          created_at?: string
          description?: string | null
          details?: Json | null
          id?: number
          modified_at?: string | null
          type?: Database["public"]["Enums"]["trigger_names"]
        }
        Relationships: []
      }
      url_data: {
        Row: {
          created_at: string
          id: number
          type: string
          url: string
          workflow_id: number | null
          workflow_step_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          type?: string
          url: string
          workflow_id?: number | null
          workflow_step_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          type?: string
          url?: string
          workflow_id?: number | null
          workflow_step_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "url_data_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "url_data_workflow_step_id_fkey"
            columns: ["workflow_step_id"]
            isOneToOne: false
            referencedRelation: "workflow_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_dm_logs: {
        Row: {
          created_at: string
          id: number
          message_template: string | null
          metadata: Json | null
          receiver_phone_no: string | null
          sender_phone_no: string | null
          status: Database["public"]["Enums"]["whatsapp_alert_status"] | null
        }
        Insert: {
          created_at?: string
          id?: number
          message_template?: string | null
          metadata?: Json | null
          receiver_phone_no?: string | null
          sender_phone_no?: string | null
          status?: Database["public"]["Enums"]["whatsapp_alert_status"] | null
        }
        Update: {
          created_at?: string
          id?: number
          message_template?: string | null
          metadata?: Json | null
          receiver_phone_no?: string | null
          sender_phone_no?: string | null
          status?: Database["public"]["Enums"]["whatsapp_alert_status"] | null
        }
        Relationships: []
      }
      workflow_runs: {
        Row: {
          business_id: number
          created_at: string
          date: string
          id: number
          workflow_runs: number
        }
        Insert: {
          business_id: number
          created_at?: string
          date: string
          id?: number
          workflow_runs?: number
        }
        Update: {
          business_id?: number
          created_at?: string
          date?: string
          id?: number
          workflow_runs?: number
        }
        Relationships: [
          {
            foreignKeyName: "workflow_runs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_stats: {
        Row: {
          created_at: string
          dm_button_click: number | null
          dm_engaged: number | null
          dm_seen: number | null
          dm_sent: number | null
          id: number
          modified_at: string
          workflow_id: number
        }
        Insert: {
          created_at?: string
          dm_button_click?: number | null
          dm_engaged?: number | null
          dm_seen?: number | null
          dm_sent?: number | null
          id?: number
          modified_at?: string
          workflow_id: number
        }
        Update: {
          created_at?: string
          dm_button_click?: number | null
          dm_engaged?: number | null
          dm_seen?: number | null
          dm_sent?: number | null
          id?: number
          modified_at?: string
          workflow_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "workflow_stats_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: true
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_steps: {
        Row: {
          created_at: string
          group_id: number | null
          id: number
          is_active: boolean
          metadata: Json | null
          next_step: number | null
          type: Database["public"]["Enums"]["workflow_step_type"]
          workflow_id: number
        }
        Insert: {
          created_at?: string
          group_id?: number | null
          id?: number
          is_active?: boolean
          metadata?: Json | null
          next_step?: number | null
          type: Database["public"]["Enums"]["workflow_step_type"]
          workflow_id: number
        }
        Update: {
          created_at?: string
          group_id?: number | null
          id?: number
          is_active?: boolean
          metadata?: Json | null
          next_step?: number | null
          type?: Database["public"]["Enums"]["workflow_step_type"]
          workflow_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "workflow_steps_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_steps_logs: {
        Row: {
          contact_id: number | null
          created_at: string
          id: number
          metadata: Json | null
          social_media_status: Database["public"]["Enums"]["Social Media Status"]
          system_status: string
          workflow_id: number | null
          workflow_step_id: number | null
        }
        Insert: {
          contact_id?: number | null
          created_at?: string
          id?: number
          metadata?: Json | null
          social_media_status?: Database["public"]["Enums"]["Social Media Status"]
          system_status: string
          workflow_id?: number | null
          workflow_step_id?: number | null
        }
        Update: {
          contact_id?: number | null
          created_at?: string
          id?: number
          metadata?: Json | null
          social_media_status?: Database["public"]["Enums"]["Social Media Status"]
          system_status?: string
          workflow_id?: number | null
          workflow_step_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_workflow_steps_logs_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_steps_logs_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_steps_logs_workflow_step_id_fkey"
            columns: ["workflow_step_id"]
            isOneToOne: false
            referencedRelation: "workflow_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_triggers: {
        Row: {
          business_id: number
          created_at: string
          excluded_keywords: string[] | null
          first_workflow_step: number | null
          id: number
          included_keywords: string[] | null
          is_active: boolean
          is_deleted: boolean
          mediaIds: string[] | null
          modified_at: string
          trigger_type: Database["public"]["Enums"]["trigger_types"]
          workflow_id: number
        }
        Insert: {
          business_id: number
          created_at?: string
          excluded_keywords?: string[] | null
          first_workflow_step?: number | null
          id?: number
          included_keywords?: string[] | null
          is_active?: boolean
          is_deleted?: boolean
          mediaIds?: string[] | null
          modified_at?: string
          trigger_type: Database["public"]["Enums"]["trigger_types"]
          workflow_id: number
        }
        Update: {
          business_id?: number
          created_at?: string
          excluded_keywords?: string[] | null
          first_workflow_step?: number | null
          id?: number
          included_keywords?: string[] | null
          is_active?: boolean
          is_deleted?: boolean
          mediaIds?: string[] | null
          modified_at?: string
          trigger_type?: Database["public"]["Enums"]["trigger_types"]
          workflow_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "workflow_triggers_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_triggers_first_workflow_step_fkey"
            columns: ["first_workflow_step"]
            isOneToOne: false
            referencedRelation: "workflow_steps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_triggers_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflows: {
        Row: {
          advanced_workflow_nodes: Json | null
          business_id: number
          category: string | null
          created_at: string
          description: string | null
          details: Json | null
          first_workflow_step: number | null
          id: number
          is_active: boolean
          is_deleted: boolean
          modified_at: string
          name: string
          no_of_runs: number
          trigger_id: number[] | null
        }
        Insert: {
          advanced_workflow_nodes?: Json | null
          business_id: number
          category?: string | null
          created_at?: string
          description?: string | null
          details?: Json | null
          first_workflow_step?: number | null
          id?: number
          is_active?: boolean
          is_deleted?: boolean
          modified_at?: string
          name: string
          no_of_runs?: number
          trigger_id?: number[] | null
        }
        Update: {
          advanced_workflow_nodes?: Json | null
          business_id?: number
          category?: string | null
          created_at?: string
          description?: string | null
          details?: Json | null
          first_workflow_step?: number | null
          id?: number
          is_active?: boolean
          is_deleted?: boolean
          modified_at?: string
          name?: string
          no_of_runs?: number
          trigger_id?: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_workflows_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      avg_trace_cost_by_business: {
        Args: {
          from_ts: string
          to_ts?: string
        }
        Returns: {
          business_id: number
          avg_trace_cost: number
        }[]
      }
      check_or_create_order: {
        Args: {
          param_contact_id: number
          param_product_id: number
          param_workflow_id: number
        }
        Returns: Json
      }
      cost_by_business: {
        Args: {
          from_ts: string
          to_ts?: string
        }
        Returns: {
          business_id: number
          total_cost: number
        }[]
      }
      create_account: {
        Args: {
          p_company_name: string
          p_first_name: string
          p_last_name?: string
          p_user_id: string
        }
        Returns: Json
      }
      create_business: {
        Args: {
          p_business_name: string
          p_crm: string
          p_industry: string
          p_user_id: string
        }
        Returns: Json
      }
      fetch_account_alerts_and_trial_stats: {
        Args: { business_id_param: number }
        Returns: {
          alerts: Json
          total_runs_allowed: number
          total_runs_consumed: number
          trial_limit: string
        }[]
      }
      get_contacts_with_stats: {
        Args: {
          p_business_id: number
          p_filter?: string
          p_page?: number
          p_page_size?: number
          p_search_query?: string
        }
        Returns: Json
      }
      get_order_amounts: {
        Args: {
          business_id_param: number
          end_date: string
          order_status_param: string
          product_id_param: string
          start_date: string
        }
        Returns: Json
      }
      get_order_stats: {
        Args: {
          business_id_param: number
          end_date: string
          last_modified_at_param: string
          order_status_param: string
          page_size: number
          product_id_param: string
          start_date: string
        }
        Returns: Json
      }
      get_workflow_contact_details: {
        Args: {
          page: number
          page_size: number
          selected_value: string
          workflow_id_param: number
        }
        Returns: Json
      }
      get_workflow_stats: {
        Args: {
          business_id_param: number
          page: number
          page_size: number
          search_query: string
          selected_value: string
        }
        Returns: Json
      }
      increment_subscription_contacts: {
        Args: {
          business_id_param: number
          contact_id_param: number
          usage_type_param?: Database["public"]["Enums"]["credit_usage_type"]
        }
        Returns: Json
      }
      increment_workflow_runs: {
        Args: {
          business_id_param: number
          contact_id_param: number
          workflow_id_param: number
        }
        Returns: undefined
      }
      match_sales_agent_faqs: {
        Args: {
          match_count: number
          match_threshold: number
          query_embedding: string
          target_business_id: number
        }
        Returns: {
          answer: string
          distance: number
          question: string
        }[]
      }
      rotate_subscription_monthly_buckets: { Args: never; Returns: undefined }
      unique_contacts_by_business: {
        Args: {
          from_ts: string
          to_ts?: string
        }
        Returns: {
          business_id: number
          unique_contacts: number
        }[]
      }
      update_trial_status: {
        Args: never
        Returns: {
          business_id: number
          whatsapp_status: string
        }[]
      }
      update_workflow_stats: {
        Args: { p_business_id?: number }
        Returns: undefined
      }
      update_workflow_steps_logs: {
        Args: {
          p_contact_id: number
          p_metadata: Json
          p_social_media_status: string
          p_system_status: string
          p_workflow_id: number
          p_workflow_step_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      account_status: "ACTIVE"
      account_type: "FACEBOOK" | "INSTAGRAM"
      agent_builder_type: "LEGACY" | "WIZARD"
      agent_response_delay: "FAST" | "MEDIUM" | "SLOW"
      agent_status: "ACTIVE" | "DISABLED"
      auth_method_type: "INSTAGRAM" | "FACEBOOK" | "GHL"
      calendly_bookings_status: "ACTIVE" | "CANCELLED"
      calendly_reminder_notifications:
        | "AT_BOOKING_TIME"
        | "8_AM_ON_DAY_OF_CALL"
        | "1_HOUR_BEFORE_AUDIO_CALL"
        | "1_HOUR_BEFORE_MESSAGE"
      channel_type: "INSTAGRAM" | "WHATSAPP" | "SMS" | "EMAIL" | "FACEBOOK"
      contact_state:
        | "RELEVANT"
        | "NON_RELEVANT"
        | "LEAD_QUALIFIED"
        | "LEAD_CLOSED"
        | "BLOCKED"
        | "LEAD_PAUSED"
        | "HUMAN_HANDOVER"
      credit_usage_type: "NORMAL" | "AI"
      external_integration_provider: "GOOGLE" | "WHATSAPP" | "CALENDLY"
      interaction_types:
        | "COMMENT_USER"
        | "COMMENT_SELF"
        | "COMMENT_REPLY_USER"
        | "COMMENT_REPLY_SELF"
        | "DM_READ_BY_USER"
        | "DM_SENT_BY_BUSINESS"
        | "DM_SENT_BY_USER"
        | "DM_POSTBACK_CLICK"
        | "OTHER"
        | "DM_STORY_REPLY"
        | "DM_REEL_SENT_BY_USER"
        | "DM_REEL_SENT_BY_BUSINESS"
        | "COMMENT_USER_AD"
        | "DM_SENT_BY_USER_REFERRAL_AD"
        | "DM_CONTENT_SENT_BY_USER"
        | "DM_CONTENT_SENT_BY_BUSINESS"
        | "DM_POSTBACK_CLICK_BUSINESS"
        | "DM_POST_SENT_BY_USER"
        | "DM_POST_SENT_BY_BUSINESS"
        | "CONTACT_CREATE"
        | "CONTACT_UPDATE"
        | "CONTACT_DELETE"
        | "CONTACT_DND_UPDATE"
        | "CONTACT_TAG_UPDATE"
        | "INTERNAL_COMMENT"
      llm_model_name:
        | "gpt-4.1-2025-04-14"
        | "gpt-5.2-2025-12-11"
        | "gpt-4.1-mini-2025-04-14"
      member_role: "OWNER" | "MEMBER"
      order_refund_status: "CREATED" | "PROCESSED"
      order_status:
        | "PENDING"
        | "SUCCESS"
        | "FAILURE"
        | "REFUND_CREATED"
        | "REFUND_PROCESSED"
        | "EXPIRED"
      "Social Media Status":
        | "COMMENT_REPLY"
        | "DM_SENT"
        | "DM_SENT_FOLLOW"
        | "DM_READ"
        | "DM_ENGAGED"
        | "DM_BUTTON_CLICK"
        | "OTHER"
      social_media_activity_logs_status:
        | "PRIVATE_REPLY_LIMIT_REACHED"
        | "PROCESSED"
        | "NOT_PROCESSED"
      social_media_platform: "INSTAGRAM"
      subscription_status: "ACTIVE" | "EXPIRED" | "READY"
      subscription_types:
        | "TRIAL"
        | "GROWTH"
        | "INFINITY"
        | "STARTER"
        | "HYPER_GROWTH"
        | "BUSINESS"
        | "BASIC"
        | "VA"
        | "INFINITY_ANNUAL"
      tool_name_enum:
        | "BOOK_CALENDLY_CALL"
        | "UPDATE_RECORD"
        | "FETCH_CALENDLY_SLOTS"
        | "RUN_WORKFLOW_STEP"
        | "FETCH_GHL_CALENDAR_SLOTS"
        | "BOOK_GHL_CALENDAR_SLOT"
        | "RESCHEDULE_GHL_CALENDAR_BOOKING"
        | "CANCEL_GHL_CALENDAR_BOOKING"
      trigger_names:
        | "IG_COMMENT_ON_SELF_POST"
        | "IG_MENTION_ON_SELF_POST"
        | "IG_MENTION_ON_OTHER_POST"
        | "IG_STORY_REPLY"
        | "IG_DM_RECEIVED"
        | "IG_REEL_SHARED_BY_USER"
        | "IG_COMMENT_ON_SELF_AD"
      trigger_types:
        | "IG_COMMENT"
        | "IG_DM"
        | "IG_REEL_SHARE"
        | "IG_STORY_REPLY"
        | "IG_AD_COMMENT"
        | "IG_AD_REPLY"
        | "IG_DM_CONTENT_SHARE"
        | "IG_DM_INTENT"
      whatsapp_alert_status: "SUCCESS" | "FAILURE"
      workflow_step_type:
        | "SEND_MESSAGE"
        | "CONDITION"
        | "ACTION"
        | "DELAY"
        | "COMMENT_REPLY"
        | "SUPER_AGENT"
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      account_status: ["ACTIVE"],
      account_type: ["FACEBOOK", "INSTAGRAM"],
      agent_builder_type: ["LEGACY", "WIZARD"],
      agent_response_delay: ["FAST", "MEDIUM", "SLOW"],
      agent_status: ["ACTIVE", "DISABLED"],
      auth_method_type: ["INSTAGRAM", "FACEBOOK", "GHL"],
      calendly_bookings_status: ["ACTIVE", "CANCELLED"],
      calendly_reminder_notifications: [
        "AT_BOOKING_TIME",
        "8_AM_ON_DAY_OF_CALL",
        "1_HOUR_BEFORE_AUDIO_CALL",
        "1_HOUR_BEFORE_MESSAGE",
      ],
      channel_type: ["INSTAGRAM", "WHATSAPP", "SMS", "EMAIL", "FACEBOOK"],
      contact_state: [
        "RELEVANT",
        "NON_RELEVANT",
        "LEAD_QUALIFIED",
        "LEAD_CLOSED",
        "BLOCKED",
        "LEAD_PAUSED",
        "HUMAN_HANDOVER",
      ],
      credit_usage_type: ["NORMAL", "AI"],
      external_integration_provider: ["GOOGLE", "WHATSAPP", "CALENDLY"],
      interaction_types: [
        "COMMENT_USER",
        "COMMENT_SELF",
        "COMMENT_REPLY_USER",
        "COMMENT_REPLY_SELF",
        "DM_READ_BY_USER",
        "DM_SENT_BY_BUSINESS",
        "DM_SENT_BY_USER",
        "DM_POSTBACK_CLICK",
        "OTHER",
        "DM_STORY_REPLY",
        "DM_REEL_SENT_BY_USER",
        "DM_REEL_SENT_BY_BUSINESS",
        "COMMENT_USER_AD",
        "DM_SENT_BY_USER_REFERRAL_AD",
        "DM_CONTENT_SENT_BY_USER",
        "DM_CONTENT_SENT_BY_BUSINESS",
        "DM_POSTBACK_CLICK_BUSINESS",
        "DM_POST_SENT_BY_USER",
        "DM_POST_SENT_BY_BUSINESS",
        "CONTACT_CREATE",
        "CONTACT_UPDATE",
        "CONTACT_DELETE",
        "CONTACT_DND_UPDATE",
        "CONTACT_TAG_UPDATE",
        "INTERNAL_COMMENT",
      ],
      llm_model_name: [
        "gpt-4.1-2025-04-14",
        "gpt-5.2-2025-12-11",
        "gpt-4.1-mini-2025-04-14",
      ],
      member_role: ["OWNER", "MEMBER"],
      order_refund_status: ["CREATED", "PROCESSED"],
      order_status: [
        "PENDING",
        "SUCCESS",
        "FAILURE",
        "REFUND_CREATED",
        "REFUND_PROCESSED",
        "EXPIRED",
      ],
      "Social Media Status": [
        "COMMENT_REPLY",
        "DM_SENT",
        "DM_SENT_FOLLOW",
        "DM_READ",
        "DM_ENGAGED",
        "DM_BUTTON_CLICK",
        "OTHER",
      ],
      social_media_activity_logs_status: [
        "PRIVATE_REPLY_LIMIT_REACHED",
        "PROCESSED",
        "NOT_PROCESSED",
      ],
      social_media_platform: ["INSTAGRAM"],
      subscription_status: ["ACTIVE", "EXPIRED", "READY"],
      subscription_types: [
        "TRIAL",
        "GROWTH",
        "INFINITY",
        "STARTER",
        "HYPER_GROWTH",
        "BUSINESS",
        "BASIC",
        "VA",
        "INFINITY_ANNUAL",
      ],
      tool_name_enum: [
        "BOOK_CALENDLY_CALL",
        "UPDATE_RECORD",
        "FETCH_CALENDLY_SLOTS",
        "RUN_WORKFLOW_STEP",
        "FETCH_GHL_CALENDAR_SLOTS",
        "BOOK_GHL_CALENDAR_SLOT",
        "RESCHEDULE_GHL_CALENDAR_BOOKING",
        "CANCEL_GHL_CALENDAR_BOOKING",
      ],
      trigger_names: [
        "IG_COMMENT_ON_SELF_POST",
        "IG_MENTION_ON_SELF_POST",
        "IG_MENTION_ON_OTHER_POST",
        "IG_STORY_REPLY",
        "IG_DM_RECEIVED",
        "IG_REEL_SHARED_BY_USER",
        "IG_COMMENT_ON_SELF_AD",
      ],
      trigger_types: [
        "IG_COMMENT",
        "IG_DM",
        "IG_REEL_SHARE",
        "IG_STORY_REPLY",
        "IG_AD_COMMENT",
        "IG_AD_REPLY",
        "IG_DM_CONTENT_SHARE",
        "IG_DM_INTENT",
      ],
      whatsapp_alert_status: ["SUCCESS", "FAILURE"],
      workflow_step_type: [
        "SEND_MESSAGE",
        "CONDITION",
        "ACTION",
        "DELAY",
        "COMMENT_REPLY",
        "SUPER_AGENT",
      ],
    },
  },
} as const
