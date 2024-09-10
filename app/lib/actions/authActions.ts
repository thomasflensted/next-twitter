'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { getUserId } from '../api/users'
import { queryAI } from './aiActions'

export type SignUpFormState = {
    error: {
        email?: string[],
        password?: string[],
        confirm?: string[],
        general?: string | null
    } | null | undefined
}

export type SignInFormState = {
    error: {
        email?: string[],
        password?: string[],
        general?: string | null
    } | null | undefined
}

export async function login(prevState: SignInFormState, formData: FormData) {

    const email = formData.get('email');
    const password = formData.get('password');

    const schema = z
        .object({
            email: z
                .string()
                .email({ message: "Invalid email." }),
            password: z
                .string()
                .min(1, { message: "Password cannot be empty." })
        })

    const res = schema.safeParse({ email, password })

    if (!res.success) {
        return { error: { ...res.error.flatten().fieldErrors, general: '' } }
    } else {
        const supabase = createClient()
        const { error } = await supabase.auth.signInWithPassword({
            email: res.data.email,
            password: res.data.password
        })
        if (error) {
            return { error: { general: error.message } }
        }
    }
    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(prevState: SignUpFormState, formData: FormData) {

    const email = formData.get('email');
    const password = formData.get('password');
    const confirm = formData.get('confirmpw');

    const schema = z.object({
        email: z
            .string()
            .email({ message: "Invalid email." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." })
            .refine(pw => /^(?=.*[a-zA-Z])(?=.*\d)/.test(pw),
                { message: "Password must contain at least one letter and one digit." }),
        confirm: z
            .string()
    }).refine(data => data.password === data.confirm, {
        message: "Passwords do not match.",
        path: ['confirm']
    })

    const res = schema.safeParse({ email, password, confirm })
    const supabase = createClient()

    if (!res.success) {
        return { error: { ...res.error.flatten().fieldErrors, general: '' } }
    } else {
        const { error } = await supabase.auth.signUp({
            email: res.data.email,
            password: res.data.password
        })
        if (error) {
            return { error: { general: error.message } }
        }
    }

    const userId = await getUserId();

    const tempName = res.data.email.split('@')[0];
    const bio = await queryAI(
        `Write a short bio about a made-up person. 
        Deduce the users name from this: ${tempName}.
        End it with "Made by AI."`);

    await supabase
        .from('accounts')
        .insert({
            user_id: userId,
            name: tempName,
            handle: tempName,
            bio
        })

    revalidatePath('/', 'layout')
    redirect('/')
}