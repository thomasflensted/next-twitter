// import { z } from "zod";

// export const maximumAllowedSize = 1024 * 1024 * 5 // 5 MB
// export const allowedFileTypes = ["image/jpeg", "image/png", "image/webp", 'application/octet-stream'];

// export const ProfileImageSchema = z.object({
//     profilePic: z
//         .instanceof(File, { message: "Something went wrong." })
//         .refine(file => file.size < maximumAllowedSize,
//             { message: "Maximum allowed file size is 5 MB." })
//         .refine(file => allowedFileTypes.includes(file.type),
//             { message: "File type is not allowed. Allowed file types are: JPEG, PNG and WEBP." })
//         .optional(),
//     coverPhoto: z
//         .instanceof(File, { message: "Something went wrong." })
//         .refine(file => file.size < maximumAllowedSize,
//             { message: "Maximum allowed file size is 5 MB." })
//         .refine(file => allowedFileTypes.includes(file.type),
//             { message: "File type is not allowed. Allowed file types are: JPEG, PNG and WEBP." })
//         .optional()
// })