'use client'

import { useFormStatus } from "react-dom"

const SubmitDetailsBtn = () => {

    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            className="disabled:text-gray-300 border py-1 text-sm text-emerald-600 rounded hover:bg-gray-100 w-full">
            Save Details
        </button>
    )
}
export default SubmitDetailsBtn