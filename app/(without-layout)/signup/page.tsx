import OAuthLogIn from "@/app/ui/login/OAuthLogIn"
import Link from "next/link"
import SignUpForm from "@/app/ui/login/SignUpForm"

const page = async () => {

    const providers = ['github'] as const;

    return (
        <div className="rounded-md bg-white border w-1/4 py-4 flex flex-col gap-2 px-5 mt-10">
            <h2 className="text-emerald-600 font-medium text-lg">Sign Up</h2>
            <SignUpForm />
            <div className="w-full flex items-center my-2">
                <hr className="w-full" />
                <p className="text-emerald-600 px-4 font-light text-sm">or</p>
                <hr className="w-full" />
            </div>
            <div className="flex gap-4 justify-center flex-row w-full">
                {providers.map(provider =>
                    <OAuthLogIn key={provider} provider={provider} />
                )}
            </div>
            <div className="flex gap-1 text-xs text-emerald-600 justify-left w-full mt-2">
                <p className="font-light">Already have an account?</p>
                <Link className="font-medium" href="/signin">Sign in here.</Link>
            </div>
        </div >
    )
}
export default page