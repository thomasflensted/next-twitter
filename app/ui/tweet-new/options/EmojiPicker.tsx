'use client'

import { IoMdHappy } from "react-icons/io"
import EmojiPicker from 'emoji-picker-react';
import { useContext, useState } from "react";
import { TextContext } from "../../forms/NewTweetForm";

const EmojiPickerComponent = () => {

    const [pickerIsVisible, setPickerIsVisible] = useState(false);
    const textContext = useContext(TextContext);

    const handleEmojiClick = (emoji: string) => {
        setPickerIsVisible(false);
        textContext?.setText(textContext.text + emoji);
    }

    return (
        <div className="relative">
            <IoMdHappy
                onClick={() => setPickerIsVisible(!pickerIsVisible)}
                title="Add Emoji"
                className="text-emerald-500 text-lg cursor-pointer hover:text-emerald-600" />
            <EmojiPicker
                onEmojiClick={(e) => handleEmojiClick(e.emoji)}
                open={pickerIsVisible}
                lazyLoadEmojis={true}
                className="-translate-x-12 translate-y-2 z-10"
                style={{ position: 'absolute' }}
                width={400} />
        </div>
    )
}
export default EmojiPickerComponent