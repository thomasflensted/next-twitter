'use server'

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
        messages: [{ role: "user", content: `Return only the result for the following query, result must be max 140 characters: ${text}` }],
        model: "gpt-3.5-turbo",
    });
    return result.choices[0].message.content;
}

export async function fixTextWithAI(text: string) {
    if (!text) return;

    const result = await openai.chat.completions.create({
        messages: [{
            role: "user", content: `Correct the following text for uppercase and lowercase letters, 
            typos and punctuation. Only give me the result, result must be max 140 characters: ${text}`
        }],
        model: "gpt-3.5-turbo",
    });
    return result.choices[0].message.content;
}


//this is a tweet iwth osme text that shoud probably have some commas or sometyhing but im too lazy to do it and the ai can do it