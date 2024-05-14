'use client'

import TextField from "./TextField"
import OptionsBar from "./OptionsBar"
import SubmitBtn from "./SubmitBtn"
import { SetStateAction, createContext, useState } from "react"
import NewTweetImage from "./NewTweetImage"
import { postTweet } from "@/app/data/actions/tweetActions"

type ContextType = {
    text: string,
    setText: React.Dispatch<SetStateAction<string>>
}

export const TextContext = createContext<ContextType | null>(null);

const NewTweetForm = () => {

    const [text, setText] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [location, setLocation] = useState<string | undefined>(undefined);

    return (
        <TextContext.Provider value={{ text, setText }}>
            <form
                name="tweetform"
                onSubmit={() => setText('')}
                action={postTweet}
                className="h-full w-full flex flex-col p-4">
                <TextField text={text} setText={setText} />
                <NewTweetImage image={image} setImage={setImage} />
                <div className="flex justify-between mt-2">
                    <OptionsBar image={image} setImage={setImage} />
                    <SubmitBtn />
                </div>
            </form>
        </TextContext.Provider>
    )
}
export default NewTweetForm