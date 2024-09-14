import { z } from "zod";

export const spacePunctuationAndNumbersRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s0-9]/g;;
export const regexPunctuationAndNumbersDashExcluded = /[!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~0-9]/g;

export const ProfileSchema = z.object({
    name: z
        .coerce.string().trim()
        .min(1, { message: 'Name must be at least 1 character.' })
        .refine((txt) => !txt.match(regexPunctuationAndNumbersDashExcluded),
            { message: "Only letters, dashes and spaces are allowed." }),
    handle: z
        .coerce.string().trim().toLowerCase()
        .min(3, { message: 'Handle must be at least 3 characters.' })
        .refine((txt) => !txt.match(spacePunctuationAndNumbersRegex),
            { message: "Only letters are allowed." }),
    website: z
        .coerce.string().optional(),
    location: z
        .coerce.string()
        .min(2, { message: "Location must be at least 2 characters." })
        .optional(),
    bio: z
        .coerce.string()
        .optional()
})