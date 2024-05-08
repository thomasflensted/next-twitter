'use client'

import ImproveWithAI from "./options/ImproveWithAI";
import ImagePicker from "./options/ImagePicker";
import EmojiPicker from "./options/EmojiPicker";
import LocationPicker from "./options/LocationPicker";
import { Dispatch, SetStateAction } from "react";

const OptionsBar = ({ image, setImage }: { image: File | undefined, setImage: Dispatch<SetStateAction<File | undefined>> }) => {

    return (
        <div className="flex gap-4  flex-grow items-center">
            <ImproveWithAI />
            <ImagePicker setImage={setImage} />
            <EmojiPicker />
            <LocationPicker />
        </div>
    )
}
export default OptionsBar