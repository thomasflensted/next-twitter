import { Cross2Icon, Pencil1Icon } from "@radix-ui/react-icons";
import { ReactNode, useRef, useState } from "react";

const ProfilePicInput = ({ fileUrl, children }: { fileUrl: string | null, children: ReactNode }) => {

    const [image, setImage] = useState<string | null>(fileUrl);
    const profilePicRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (file: FileList | null) => {
        if (!file) return
        if ([`image/jpeg`, `image/png`, `image/webp`].includes(file[0].type)) {
            setImage(URL.createObjectURL(file[0]))
        }
    }

    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="relative">
                <div className="w-28 rounded-full h-28 bg-gray-100 relative border flex items-center justify-center overflow-hidden">
                    {image && <img
                        className="absolute w-full h-full object-cover"
                        src={image}
                        alt="profile picture" />}
                </div>
                <div
                    onClick={() => profilePicRef.current?.click()}
                    className="hover:bg-gray-100 hover:scale-110 transition cursor-pointer p-1 rounded-full border bg-gray-50 absolute bottom-2 right-1 flex items-center justify-center">
                    <Pencil1Icon className="text-emerald-600" />
                </div>
                {image !== fileUrl && <div
                    onClick={() => setImage(fileUrl)}
                    className="hover:bg-gray-100 hover:scale-110 transition cursor-pointer p-1 rounded-full border bg-gray-50 absolute bottom-2 left-1 flex items-center justify-center">
                    <Cross2Icon className="text-emerald-600" />
                </div>}
                <input
                    onChange={(e) => handleFileChange(e.target?.files)}
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    ref={profilePicRef}
                    className="hidden"
                    name="profilepic" />
            </div>
            {children}
        </div>
    )
}
export default ProfilePicInput