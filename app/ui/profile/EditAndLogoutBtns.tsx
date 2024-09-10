'use client'

import { createClient } from "@/utils/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const EditAndLogoutBtns = () => {

    const supabase = createClient()
    const router = useRouter();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/signin')
    }

    return (
        <div className="flex gap-1 items-center">
            <Link href={`account/edit`} className="text-emerald-600 text-xs border rounded-full px-3 py-1 hover:bg-neutral-100">
                Edit profile
            </Link>
            <button onClick={handleSignOut} className="text-red-600 text-xs border border-red-100 rounded-full px-3 py-1 hover:bg-red-50">
                Log Out
            </button>
        </div>
    )
}
export default EditAndLogoutBtns