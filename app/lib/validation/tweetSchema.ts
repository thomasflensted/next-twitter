import { z } from 'zod';
import { ImageSchema } from './imageSchema';

const TweetContentSchema = z.object({
    content: z
        .coerce.string({ message: "Tweet must be text." })
        .min(1, { message: "Tweet cannot be empty." })
})

export const TweetSchema = TweetContentSchema.extend({ image: ImageSchema });