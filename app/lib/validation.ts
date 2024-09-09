import { z } from 'zod';

export const allowedFileTypes = ["image/jpeg", "image/png", "image/webp"]
export const spacePunctuationAndNumbersRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s0-9]/g;;
export const regexPunctuationAndNumbersDashExcluded = /[!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~0-9]/g;
export const maximumAllowedSize = 1024 * 1024 * 5 // 5 MB

export const TweetValidationForm = z.object({
    content: z
        .coerce.string({ message: "Tweet must be text." })
        .min(1, { message: "Tweet cannot be empty." }),
    image: z
        .instanceof(File, { message: "Something went wrong." })
        .refine(file => file.size < maximumAllowedSize,
            { message: "Maximum allowed file size is 5 MB." })
        .refine(file => allowedFileTypes.includes(file.type),
            { message: "File type is not allowed. Allowed file types are: JPEG, PNG and WEBP." })
        .optional()
})

export const ProfileImageValidationForm = z.object({
    profilePic: z
        .instanceof(File, { message: "Something went wrong." })
        .refine(file => file.size < maximumAllowedSize,
            { message: "Maximum allowed file size is 5 MB." })
        .refine(file => allowedFileTypes.includes(file.type),
            { message: "File type is not allowed. Allowed file types are: JPEG, PNG and WEBP." })
        .optional(),
    coverPhoto: z
        .instanceof(File, { message: "Something went wrong." })
        .refine(file => file.size < maximumAllowedSize,
            { message: "Maximum allowed file size is 5 MB." })
        .refine(file => allowedFileTypes.includes(file.type),
            { message: "File type is not allowed. Allowed file types are: JPEG, PNG and WEBP." })
        .optional()
})

export const ProfileValidationForm = z.object({
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
        .coerce.string()
        .optional(),
    location: z
        .coerce.string()
        .min(2, { message: "Location must be at least 2 characters." })
        .optional(),
    bio: z
        .coerce.string()
        .optional()
})

export const FullProfileValidationForm = ProfileValidationForm.merge(ProfileImageValidationForm);