'use client'


import LabelAndInput from "./LabelAndInput"
import PasswordVisibility from "./PasswordVisibility"
import { useFormState } from "react-dom"
import { useState } from "react"
import { SignUpFormState, signup } from "@/app/lib/actions/authActions"

const SignUpForm = () => {

    const initialState: SignUpFormState = { error: null }
    const [pwIsVisible, setPwIsVisible] = useState(false)
    const [state, action] = useFormState(signup, initialState)

    return (
        <form action={action} className="flex-col flex gap-4 w-full mt-4">
            <div className="flex flex-col relative mt-1 w-full">
                <LabelAndInput error={state.error?.email} label="Email" name="email" />
                {state.error?.email && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.email[0]}</p>}
            </div>
            <div className="flex flex-col relative mt-1">
                <LabelAndInput
                    error={state.error?.password}
                    type={pwIsVisible ? 'text' : 'password'}
                    label="Password"
                    name="password">
                    <PasswordVisibility
                        setVisibility={setPwIsVisible}
                        isVisible={pwIsVisible} />
                </LabelAndInput>
                {state.error?.password && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.password[0]}</p>}
            </div>
            <div className="flex flex-col relative mt-1">
                <LabelAndInput
                    error={state.error?.confirm}
                    type={pwIsVisible ? 'text' : 'password'}
                    label="Repeat Password"
                    name="confirmpw">
                    <PasswordVisibility
                        setVisibility={setPwIsVisible}
                        isVisible={pwIsVisible} />
                </LabelAndInput>
                {state.error?.confirm && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.confirm[0]}</p>}
            </div>
            <button className="w-full border text-white hover:bg-emerald-600 bg-emerald-500 font-normal rounded py-1.5">
                Sign Up
            </button>
            {state.error?.general &&
                <div className="bg-red-50 border border-red-500 rounded w-full py-1.5 px-2">
                    <p className="font-medium text-red-500 text-xs">{state.error.general}</p>
                </div>
            }
        </form>
    )
}
export default SignUpForm