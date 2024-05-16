'use server'

import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
    return (
        <div className="rounded-md bg-white border w-1/5 py-4 flex flex-col gap-2 px-5 items-center mt-10">
            <h2 className="text-emerald-600 font-medium text-lg">Get Started</h2>
            <LoginLink className="w-full rounded border py-1.5 text-emerald-600 hover:bg-gray-50 text-center">
                Sign in
            </LoginLink>
            <RegisterLink className="w-full rounded border py-1.5 text-emerald-600 hover:bg-gray-50 text-center">
                Sign up
            </RegisterLink>
        </div>
    )
}
export default page