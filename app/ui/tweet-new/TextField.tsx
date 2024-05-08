'use client'

import { Dispatch, SetStateAction } from "react"

const TextField = ({ text, setText }: { text: string, setText: Dispatch<SetStateAction<string>> }) => {

    return (
        <div className="relative">
            <textarea
                className="bg-neutral-50 w-full flex-grow focus:outline-none resize-none text-sm placeholder:text-gray-400 text-gray-600 dark:bg-neutral-800 dark:text-white"
                rows={3}
                value={text}
                name="content"
                maxLength={140}
                placeholder="What's going on?"
                onChange={(e) => setText(e.target.value)}
            />
            <p className="text-xs absolute bottom-1 right-0 text-gray-300 font-medium dark:text-gray-500">{`${text.length}/140`}</p>
        </div>
    )
}
export default TextField