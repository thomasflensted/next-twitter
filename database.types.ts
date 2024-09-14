
import { Profile, ProfilePreview, TweetType } from "./app/lib/types"

// GENERATED TYPES

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          bio: string | null
          cover_photo: string | null
          created_at: string
          handle: string
          id: number
          location: string | null
          name: string
          profile_pic: string | null
          updated_at: string
          user_id: string | null
          website: string | null
        }
        Insert: {
          bio?: string | null
          cover_photo?: string | null
          created_at?: string
          handle: string
          id?: number
          location?: string | null
          name: string
          profile_pic?: string | null
          updated_at?: string
          user_id?: string | null
          website?: string | null
        }
        Update: {
          bio?: string | null
          cover_photo?: string | null
          created_at?: string
          handle?: string
          id?: number
          location?: string | null
          name?: string
          profile_pic?: string | null
          updated_at?: string
          user_id?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      bookmarks: {
        Row: {
          bookmarked_tweet: number
          user_id: string
        }
        Insert: {
          bookmarked_tweet: number
          user_id: string
        }
        Update: {
          bookmarked_tweet?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_bookmarked_tweet_fkey"
            columns: ["bookmarked_tweet"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      follows: {
        Row: {
          following: string
          user_id: string
        }
        Insert: {
          following: string
          user_id: string
        }
        Update: {
          following?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follows_following_fkey"
            columns: ["following"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          liked_tweet: number
          user_id: string
        }
        Insert: {
          liked_tweet: number
          user_id: string
        }
        Update: {
          liked_tweet?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_liked_tweet_fkey"
            columns: ["liked_tweet"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tweets: {
        Row: {
          content: string
          created_at: string
          id: number
          image: string | null
          location: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          image?: string | null
          location?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          image?: string | null
          location?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tweets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_profile: {
        Args: { user_handle: string, current_user_id: string }
        Returns: Profile
      },
      get_account_info: {
        Args: { user_handle: string, current_user_id: string }
        Returns: Profile[]
      },
      get_user_tweets: {
        Args: { user_handle: string, current_user_id: string }
        Returns: TweetType[]
      },
      get_tweets_from_following: {
        Args: { follower_id: string },
        Returns: TweetType[]
      },
      get_bookmarked_tweets: {
        Args: { current_user_id: string },
        Returns: TweetType[]
      },
      get_suggestions: {
        Args: { current_user_id: string },
        Returns: ProfilePreview[]
      },
      get_users_followed_by_handle: {
        Args: { target_handle: string, current_user_id: string },
        Returns: ProfilePreview[]
      },
      get_followers_of_handle: {
        Args: { target_handle: string, current_user_id: string },
        Returns: ProfilePreview[]
      },
      get_tweet: {
        Args: { tweet_id: string, current_user_id: string },
        Returns: TweetType[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never
