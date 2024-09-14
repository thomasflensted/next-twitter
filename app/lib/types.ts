import { Database } from "@/database.types"

// TWEETS

type RawTweet = Omit<Database['public']['Tables']['tweets']['Row'], 'user_id'>;

type AccountProperties = Pick<
    Database['public']['Tables']['accounts']['Row'],
    'handle' | 'name' | 'profile_pic'
>

type TweetExtras = {
    is_own_tweet: boolean
    is_liked: boolean
    is_bookmarked: boolean
}

export type TweetType = RawTweet & AccountProperties & TweetExtras

// USERS
type RawProfile = Omit<Database['public']['Tables']['accounts']['Row'], 'user_id'>;

type UserExtras = {
    is_own_account: boolean,
    following_count: number,
    followers_count: number,
    is_following: boolean
};

export type Profile = RawProfile & UserExtras;

export type ProfilePreview = {
    name: string,
    handle: string,
    bio: string,
    profile_pic: string,
    is_following: boolean,
    is_myself: boolean
};

export type TweetValidationState = {
    success?: string,
    message?: string,
    errors?: {
        content?: string[];
        image?: string[];
    };
}

export type UserDetailsValidationState = {
    success?: string,
    message?: string,
    errors?: {
        name?: string[];
        handle?: string[];
        website?: string[];
        location?: string[];
        bio?: string[];
        profilePic?: string[];
        coverPhoto?: string[];
    };
}