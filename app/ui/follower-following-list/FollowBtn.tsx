'use client'

import { followUser, unfollowUser } from "@/app/data/actions/userActions";
import { usePathname } from "next/navigation";
import { useState } from "react";

const FollowBtn = ({ isFollowingUser, handle, ownId }: { isFollowingUser: boolean | null, handle: string, ownId: number }) => {

    const p = usePathname();

    const [isFollowing, setIsFollowing] = useState(isFollowingUser);

    const follow = async () => {
        setIsFollowing(true)
        await followUser(handle, ownId, p);
    }

    const unfollow = async () => {
        setIsFollowing(false)
        await unfollowUser(handle, ownId, p);
    }

    return (
        !isFollowing
            ? <button
                onClick={follow}
                className="text-emerald-600 text-xs border rounded-full w-20 py-1 hover:bg-neutral-100">Follow</button>
            : <button
                onClick={unfollow}
                className="text-white bg-emerald-500 border text-xs w-20 rounded-full py-1 hover:bg-emerald-600">Following</button>
    )
}
export default FollowBtn