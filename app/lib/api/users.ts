'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUserId() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) redirect('/signin');
    return data.user.id;
}

export async function getAccountInfo(handle: string, userId: string) {
    const supabase = createClient()
    const res = await supabase
        .rpc('get_account_info',
            { user_handle: handle, current_user_id: userId })
        .single();
    return res;
}

export async function getProfileImages(handle: string) {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('accounts')
        .select('profile_pic, cover_photo')
        .eq('handle', handle)
        .single();
    if (error || !data) return { profile_pic: null, cover_photo: null };
    return data;
}

export async function doesUserExist(handle: string) {
    const supabase = createClient()
    const res = await supabase
        .from('accounts')
        .select('id')
        .eq('handle', handle)
        .limit(1)
        .single();
    return res;
}