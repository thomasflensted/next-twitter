import { Pencil1Icon, Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode, useRef, useState } from "react"

type Props = {
    fileUrl: string | null
    children: ReactNode
}

const CoverPhotoInput = ({ fileUrl, children }: Props) => {

    const [image, setImage] = useState<string | null>(fileUrl);
    const coverPhotoRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (file: FileList | null) => {
        if (!file) return
        if ([`image/jpeg`, `image/png`, `image/webp`].includes(file[0].type)) {
            setImage(URL.createObjectURL(file[0]))
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="w-full rounded border h-40 bg-gray-100 overflow-hidden relative">
                {image && <img className="absolute w-full h-full object-cover" src={image} alt="cover photo" />}
                <div
                    onClick={() => coverPhotoRef.current?.click()}
                    className="hover:bg-gray-100 hover:scale-110 transition cursor-pointer p-1 rounded-full border bg-gray-50 absolute top-2 right-2 flex items-center justify-center">
                    <Pencil1Icon className="text-emerald-600" />
                </div>
                {fileUrl !== image && <div
                    onClick={() => setImage(fileUrl)}
                    className="hover:bg-gray-100 hover:scale-110 transition cursor-pointer p-1 rounded-full border bg-gray-50 absolute top-2 left-2 flex items-center justify-center">
                    <Cross2Icon className="text-emerald-600" />
                </div>}
            </div>
            <input
                onChange={(e) => handleFileChange(e.target?.files)}
                type="file"
                accept="image/jpeg, image/png, image/webp"
                ref={coverPhotoRef}
                className="hidden"
                name="coverphoto" />
            {children}
        </div>
    )
}

export default CoverPhotoInput
