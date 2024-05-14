'use client'

import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react"
import { FaRegImage } from "react-icons/fa6"

const ImagePicker = ({ setImage }: { setImage: Dispatch<SetStateAction<File | null>> }) => {

    const imageRef = useRef<any>(null)

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    return (
        <div className="">
            <input
                onChange={(e) => handleImageChange(e)}
                ref={imageRef}
                type="file"
                name='image'
                className="hidden"
                accept="image/png, image/jpeg" />
            <FaRegImage
                onClick={() => imageRef?.current?.click()}
                title='Add Photo' className="text-emerald-500 text-lg cursor-pointer hover:text-emerald-600" />
        </div>
    )
}
export default ImagePicker