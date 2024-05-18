'use client'

import { bookmarkTweet, unBookmarkTweet } from "@/app/data/actions/tweetActions";
import { useState } from "react"
import { FaRegBookmark, FaBookmark } from "react-icons/fa6"

const BookmarkBtn = ({ tweetId, initialState, userId }: { initialState: boolean, tweetId: number, userId: number }) => {

    const [isBookmarked, setIsBookmarked] = useState(initialState);

    const bookmark = async () => {
        setIsBookmarked(true);
        await bookmarkTweet(userId, tweetId);
    }

    const unBookmark = async () => {
        setIsBookmarked(false);
        await unBookmarkTweet(userId, tweetId)
    }

    return isBookmarked
        ? (<FaBookmark
            onClick={unBookmark}
            className="text-emerald-500 text-md cursor-pointer hover:text-emerald-600" />)
        : (<FaRegBookmark
            onClick={bookmark}
            className="text-emerald-500 text-md cursor-pointer hover:text-emerald-600" />)
}
export default BookmarkBtn