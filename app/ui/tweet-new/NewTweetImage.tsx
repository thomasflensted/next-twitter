import { Dispatch, SetStateAction } from "react"
import { IoCloseCircleSharp } from "react-icons/io5";

type Props = {
    image: File | undefined,
    fileUrl: string | undefined
    setImage: Dispatch<SetStateAction<File | undefined>>
}

const NewTweetImage = ({ image, fileUrl, setImage }: Props) => {
    return image && fileUrl ? (
        <div className="w-full h-auto rounded-lg overflow-hidden relative">
            <IoCloseCircleSharp
                onClick={() => setImage(undefined)}
                className="text-white absolute top-2 left-2 text-2xl hover:scale-110 transition-transform ease-in-out" />
            <img
                src={fileUrl}
                alt="Uploaded image"
            />
        </div>
    ) : null
}
export default NewTweetImage