'use server'

import { revalidatePath } from "next/cache";
import { db } from "./db";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export async function postTweet(formData: FormData) {

    const content = formData.get('content');
    if (!content) return;
    await db.query(`INSERT INTO tweets (content, location)
                                VALUES ('${content}', '');`);
    revalidatePath('/');
}

export async function deleteTweet(id: number) {
    if (!id) return;
    await db.query(`DELETE FROM tweets WHERE id = ${id}`);
    revalidatePath('/');
}

export async function improveWithAI(text: string) {
    if (!text) return;

    const completion = await openai.chat.completions.create({
        messages: [{
            role: "user",
            content: `Improve the following text and only give me the result, result must be max 140 characters: ${text}`
        }],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
}

export async function queryAI(text: string) {
    if (!text) return;

    const result = await openai.chat.completions.create({
        messages: [{ role: "user", content: `Return only the result for this query, result must be max 140 characters: ${text}` }],
        model: "gpt-3.5-turbo",
    });
    return result.choices[0].message.content;
}