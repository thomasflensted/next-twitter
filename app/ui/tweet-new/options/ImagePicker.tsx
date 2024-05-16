'use client'

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef } from "react"
import { FaRegImage } from "react-icons/fa6"

const ImagePicker = ({ image, setImage }: { image: File | null, setImage: Dispatch<SetStateAction<File | null>> }) => {

    const imageRef = useRef<any>(null)

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    useEffect(() => {
        if (!image) imageRef.current.value = null;
    }, [image])

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