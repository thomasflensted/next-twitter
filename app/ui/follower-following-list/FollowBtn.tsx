'use client'

import { followUser, unfollowUser } from "@/app/lib/actions/userActions";
import { useState } from "react";

const FollowBtn = ({ isFollowingUser, handle }: { isFollowingUser: boolean | null, handle: string }) => {

    const [isFollowing, setIsFollowing] = useState(isFollowingUser);

    const follow = async () => {
        setIsFollowing(true)
        await followUser(handle);
    }

    const unfollow = async () => {
        setIsFollowing(false)
        await unfollowUser(handle);
    }

    return (
        !isFollowing
            ? <button
                onClick={follow}
                className="text-emerald-600 text-xs border rounded-full w-20 py-1 hover:bg-neutral-100">
                Follow
            </button>
            : <button
                onClick={unfollow}
                className="text-white bg-emerald-500 border text-xs w-20 rounded-full py-1 hover:bg-emerald-600">
                Following
            </button>
    )
}
export default FollowBtn