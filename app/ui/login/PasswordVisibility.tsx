'use client'

import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { Dispatch, SetStateAction } from "react"

type Props = {
    isVisible: boolean,
    setVisibility: Dispatch<SetStateAction<boolean>>
}

const PasswordVisibility = ({ isVisible, setVisibility }: Props) => {
    return (
        <div className="flex justify-center items-center absolute h-full right-0 top-0 pr-2" onClick={() => setVisibility(!isVisible)}>
            {isVisible
                ? <EyeOpenIcon className="text-emerald-600" />
                : <EyeNoneIcon className="text-emerald-600" />}
        </div>
    )
}
export default PasswordVisibility