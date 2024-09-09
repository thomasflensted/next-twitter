import { createClient } from "@/utils/supabase/server";

export async function getFollowers(handle: string) {
    const supabase = createClient()
    const res = await supabase
        .rpc('get_followers',
            { user_handle: handle });
    return res;
}

export async function getFollowing(handle: string) {
    const supabase = createClient()
    const res = await supabase
        .rpc('get_following',
            { user_handle: handle });
    return res;
}