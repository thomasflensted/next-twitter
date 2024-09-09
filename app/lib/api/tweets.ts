import { createClient } from "@/utils/supabase/server";
import { getUserId } from "./users";

export async function getUserTweets(handle: string, userId: string) {
    const supabase = createClient()
    const res = await supabase
        .rpc('get_user_tweets',
            { user_handle: handle, current_user_id: userId });
    return res;
}

export async function getTweet(tweetId: string) {
    const supabase = createClient()
    const userId = await getUserId();
    const res = await supabase
        .rpc('get_tweet',
            { tweet_id: tweetId, current_user_id: userId });
    return res;
}