'use client'

import { createClient } from "@/utils/supabase/client"
import { FaGoogle, FaGithub } from "react-icons/fa"
import { PiXLogo } from "react-icons/pi"

const OAuthLogIn = ({ provider }: { provider: 'google' | 'github' | 'twitter' }) => {

    const handleSignIn = async () => {
        const supabase = createClient();
        await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: '/' } })
    }

    return (
        <div onClick={handleSignIn} className="w-full h-12 border rounded hover:bg-emerald-50 flex items-center justify-center cursor-pointer">
            {provider === 'github' && <FaGithub className="h-7 w-7 text-emerald-600" />}
            {provider === 'google' && <FaGoogle className="h-7 w-7 text-emerald-600" />}
            {provider === 'twitter' && <PiXLogo className="h-7 w-7 text-emerald-600" />}
        </div>
    )
}
export default OAuthLogIn