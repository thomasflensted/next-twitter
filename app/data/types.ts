export type Tweet = {
    id: number,
    content: string,
    location: string,
    created_at: string,
    name: string,
    handle: string,
    image: string | null,
};

export type NewTweet = Omit<Tweet, 'id'>;