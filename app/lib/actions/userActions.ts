'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { getUserId } from "../api/users";
import { ProfileSchema } from "../validation/profileSchema";
import { redirect } from "next/navigation";

export async function unfollowUser(userHandle: string) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    const { data } = await supabase
        .from('accounts')
        .select('user_id')
        .eq('handle', userHandle);
    if (!data || !data[0].user_id) return;
    await supabase.from('follows')
        .delete()
        .eq('user_id', userId)
        .eq('following', data[0].user_id);
    revalidatePath('/' + userHandle);
}

export async function followUser(userHandle: string) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    const { data } = await supabase
        .from('accounts')
        .select('user_id')
        .eq('handle', userHandle);
    if (!data || !data[0].user_id) return;
    await supabase
        .from('follows')
        .insert({ user_id: userId, following: data[0].user_id });
    //revalidatePath('/' + userHandle);
}

export type AccountState = {
    error: {
        profile_pic?: string[],
        cover_photo?: string[],
        name?: string[],
        handle?: string[],
        bio?: string[],
        location?: string[],
        website?: string[],
        general?: string | null
    } | null
}

export async function updateAccount(
    prevState: AccountState,
    formData: FormData): Promise<AccountState> {

    const res = ProfileSchema.safeParse({ ...Object.fromEntries(formData) });

    if (!res.success) {
        return {
            error: {
                ...res.error.flatten().fieldErrors,
                general: 'Validation failed'
            }
        }
    } else {
        const supabase = createClient()
        const userId = await getUserId();
        const { error } = await supabase
            .from('accounts')
            .update({
                name: res.data.name,
                handle: res.data.handle,
                bio: res.data.bio,
                location: res.data.location,
                website: res.data.website,
            })
            .eq('user_id', userId);
        if (error) {
            return { error: { general: error.message } }
        } else {
            redirect('/' + res.data.handle);
        }
    }
}