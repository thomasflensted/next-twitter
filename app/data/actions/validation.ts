import { z } from 'zod';

type ResultObject = {
    succes?: string,
    failure?: string,
    errors?: {}
}

export const TweetValidationForm = z.object({
    content: z.string({ message: "Tweet must be text." }).min(1, { message: "A tweet cannot by empty." }),
    image: z.instanceof(File, { message: "Something went wrong." }).optional(),
})

export function validateTweetData(content: any, image: File): ResultObject {

    const res = TweetValidationForm.safeParse({ content, image });
    if (!res.success) {
        return {
            failure: "Something went wrong.",
            errors: res.error.flatten().fieldErrors,
        }
    }
    return { succes: 'Tweet Posted' }
}