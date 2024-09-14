import { z } from "zod";

export const maximumAllowedSize = 1024 * 1024 * 5 // 5 MB
export const allowedFileTypes = ["image/jpeg", "image/png", "image/webp", 'application/octet-stream'];

export const ImageSchema = z
    .instanceof(File, { message: "Something went wrong." })
    .refine(file => file.size < maximumAllowedSize, {
        message: "Maximum allowed file size is 5 MB."
    })
    .refine(file => allowedFileTypes.includes(file.type), {
        message: "File type is not allowed. Allowed file types are: JPEG, PNG and WEBP."
    })
    .optional()
    .nullable()
    .transform(data =>
        data instanceof File && data.type === 'application/octet-stream' && data.size === 0
            ? null
            : data
    );
