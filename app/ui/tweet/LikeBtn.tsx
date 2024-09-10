'use client'

import { likeTweet, unLikeTweet } from "@/app/lib/actions/tweets";
import { useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa6"

const LikeBtn = ({ tweetId, initialState }: { initialState: boolean, tweetId: number }) => {

    const [isLiked, setIsLiked] = useState(initialState);

    const bookmark = async () => {
        setIsLiked(true);
        await likeTweet(tweetId);
    }

    const unBookmark = async () => {
        setIsLiked(false);
        await unLikeTweet(tweetId)
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