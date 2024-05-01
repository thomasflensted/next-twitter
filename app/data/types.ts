export type Tweet = {
    id: number,
    content: string,
    location: string,
    created_at: string,
    updated_at: string
};

export type NewTweet = Omit<Tweet, 'id'>;