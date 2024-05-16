'use client'

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"

const EditAndLogoutBtns = () => {
    return (
        <div className="flex gap-1 items-center">
            <button className="text-emerald-600 text-xs border rounded-full px-3 py-1 hover:bg-neutral-100">
                Edit profile
            </button>
            <LogoutLink className="text-red-600 text-xs border border-red-100 rounded-full px-3 py-1 hover:bg-red-50">
                Log out
            </LogoutLink>
        </div>
    )
}
export default EditAndLogoutBtns