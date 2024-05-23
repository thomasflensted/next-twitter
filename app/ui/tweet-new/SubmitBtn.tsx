'use client'

import { useContext } from 'react'
import { useFormStatus } from 'react-dom'
import { TextContext } from '../forms/NewTweetForm'

const SubmitBtn = () => {

    const { pending } = useFormStatus()
    const textContext = useContext(TextContext);
    if (!textContext) return;
    const { text } = textContext;

    return (
        <button
            type="submit"
            disabled={pending || text.length > 140 || text.length === 0}
            className="px-5 py-1.5 bg-emerald-500 rounded-full transition-colors text-white font-semibold hover:bg-emerald-600 disabled:text-gray-400  disabled:bg-gray-200">
            {pending ? 'Posting...' : 'Post'}
        </button>
    )
}
export default SubmitBtn