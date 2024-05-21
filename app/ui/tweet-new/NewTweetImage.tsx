import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { IoCloseCircleSharp } from "react-icons/io5";

type Props = {
    image: File | null,
    setImage: Dispatch<SetStateAction<File | null>>
}

const NewTweetImage = ({ image, setImage }: Props) => {

    const [fileUrl, setFileUrl] = useState<string | undefined>('');
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (fileUrl) URL.revokeObjectURL(fileUrl);
        if (image) {
            const url = URL.createObjectURL(image);
            setFileUrl(url);
        } else {
            setFileUrl(undefined)
        }
    }, [image])

    return image && fileUrl ? (
        <div
            className="w-full h-auto rounded-lg overflow-hidden relative my-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            {isHovering &&
                <div className="p-1 bg-black rounded-full absolute top-2 left-2">
                    <IoCloseCircleSharp
                        onClick={() => setImage(null)}
                        className="text-white  text-2xl hover:scale-110 transition-transform ease-in" />
                </div>}
            <img
                src={fileUrl}
                alt="Uploaded image"
            />
        </div>
    ) : null
}
export default NewTweetImage