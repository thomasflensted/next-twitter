import { FaRegHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import BookmarkBtn from "./BookmarkBtn";
import LikeBtn from "./LikeBtn";

type Props = {
    tweetId: number,
    location: string,
    isOwnTweet: boolean,
    isBookmarked: boolean,
    userId: number,
    isLiked: boolean,
}

const TweetOptions = ({ tweetId, location, isOwnTweet, isBookmarked, userId, isLiked }: Props) => {

    return (
        <div className="w-full flex pb-4 justify-between">
            <div className="flex gap-1 items-center">
                {location && <>
                    <FaMapPin title='Add Location' className="text-gray-400 text-sm" />
                    <p className="text-gray-400 text-xs">{location}</p>
                </>}
            </div>
            {!isOwnTweet && <div className="flex gap-4">
                <LikeBtn userId={userId} tweetId={tweetId} initialState={isLiked} />
                <BookmarkBtn userId={userId} tweetId={tweetId} initialState={isBookmarked} />
            </div>}
        </div>
    )
}
export default TweetOptions