export type Tweet = {
    id: number,
    content: string,
    location: string,
    image: string | null,
    created_at: Date,
    updated_at: Date,
    user_id: number,
};

export type TweetWithAdditionalData = Tweet & {
    author_name: string,
    author_handle: string,
    author_profile_pic: string,
    is_own_tweet: boolean,
    is_bookmarked: boolean,
    is_liked: boolean,
}

export type NewTweet = Omit<Tweet, 'id'>;

export type Profile = {
    id: number,
    kinde_id: string,
    handle: string
    name: string,
    location: string,
    bio: string,
    website: string,
    created_at: Date,
    updated_at: Date,
    profile_pic: string,
    cover_photo: string,
    does_follow?: boolean
}

export type Follows = {
    following: number,
    followers: number
};