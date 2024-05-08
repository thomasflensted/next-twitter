'use client'

import { postTweet } from "@/app/data/actions"
import TextField from "./TextField"
import OptionsBar from "./OptionsBar"
import SubmitBtn from "./SubmitBtn"
import { SetStateAction, createContext, useEffect, useState } from "react"
import NewTweetImage from "./NewTweetImage"

type ContextType = {
    text: string,
    setText: React.Dispatch<SetStateAction<string>>
}

export const TextContext = createContext<ContextType | null>(null);

const NewTweetForm = () => {

    const [text, setText] = useState('');
    const [image, setImage] = useState<File | undefined>(undefined);
    const [fileUrl, setFileUrl] = useState<string | undefined>('');

    useEffect(() => {
        if (fileUrl) URL.revokeObjectURL(fileUrl);
        if (image) {
            const url = URL.createObjectURL(image);
            setFileUrl(url);
        } else {
            setFileUrl(undefined)
        }
    }, [image])

    return (
        <TextContext.Provider value={{ text, setText }}>
            <form onSubmit={() => setText('')} className="h-full w-full flex flex-col p-4" action={postTweet}>
                <TextField text={text} setText={setText} />
                <NewTweetImage image={image} fileUrl={fileUrl} setImage={setImage} />
                <div className="flex justify-between mt-2">
                    <OptionsBar image={image} setImage={setImage} />
                    <SubmitBtn />
                </div>
            </form>
        </TextContext.Provider>
    )
}
export default NewTweetForm