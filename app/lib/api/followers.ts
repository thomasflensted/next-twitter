import { createClient } from "@/utils/supabase/server";
import { getUserId } from "./users";

export async function getFollowers(handle: string) {
    const supabase = createClient()
    const userId = await getUserId();
    const res = await supabase
        .rpc('get_followers_of_handle',
            { target_handle: handle, current_user_id: userId });
    return res;
}

export async function getFollowing(handle: string) {
    const supabase = createClient()
    const userId = await getUserId();
    const res = await supabase
        .rpc('get_users_followed_by_handle',
            { target_handle: handle, current_user_id: userId });
    return res;
}