'use client'

import TextField from "../tweet-new/TextField"
import OptionsBar from "../tweet-new/OptionsBar"
import SubmitBtn from "../tweet-new/SubmitBtn"
import { Dispatch, SetStateAction, createContext, useState } from "react"
import NewTweetImage from "../tweet-new/NewTweetImage"

import { useFormState } from "react-dom"
import ResponseMsg from "../global/FormResponseMsg"
import { postTweet } from "@/app/lib/actions/tweets"

type ContextType = {
    text: string,
    setText: Dispatch<SetStateAction<string>>
}

export const TextContext = createContext<ContextType | null>(null);

const NewTweetForm = () => {

    const [text, setText] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async () => {
        setText('')
        setImage(null);
    }

    const initialState = { success: '', errors: undefined };
    const [state, dispatch] = useFormState(postTweet, initialState)

    return (
        <>
            <TextContext.Provider value={{ text, setText }}>
                <form
                    name="tweetform"
                    onSubmit={handleSubmit}
                    action={dispatch}
                    className="h-full w-full flex flex-col p-4">
                    <TextField text={text} setText={setText} />
                    <NewTweetImage image={image} setImage={setImage} />
                    <div className="flex justify-between mt-2">
                        <OptionsBar image={image} setImage={setImage} />
                        <SubmitBtn />
                    </div>
                    {state.errors?.content && <ResponseMsg msg={state.errors.content[0]} success={false} />}
                    {state.errors?.image && <ResponseMsg msg={state.errors.image[0]} success={false} />}
                    {state.success && <ResponseMsg msg={state.success} success={true} />}
                </form>
            </TextContext.Provider>
        </>
    )
}
export default NewTweetForm