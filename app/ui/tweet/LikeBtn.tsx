'use client'

import { likeTweet, unLikeTweet } from "@/app/data/actions/tweetActions";
import { useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa6"

const LikeBtn = ({ tweetId, initialState, userId }: { initialState: boolean, tweetId: number, userId: number }) => {

    const [isLiked, setIsLiked] = useState(initialState);

    console.log({ userId, tweetId })

    const bookmark = async () => {
        setIsLiked(true);
        await likeTweet(userId, tweetId);
    }

    const unBookmark = async () => {
        setIsLiked(false);
        await unLikeTweet(userId, tweetId)
    }

    return isLiked
        ? (<FaHeart
            onClick={unBookmark}
            className="text-emerald-500 text-md cursor-pointer hover:text-emerald-600" />)
        : (<FaRegHeart
            onClick={bookmark}
            className="text-emerald-500 text-md cursor-pointer hover:text-emerald-600" />)
}
export default LikeBtn