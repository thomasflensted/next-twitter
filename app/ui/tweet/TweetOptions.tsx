import { FaMapPin } from "react-icons/fa6";
import BookmarkBtn from "./BookmarkBtn";
import LikeBtn from "./LikeBtn";

type Props = {
    data: {
        id: number,
        location: string,
        isOwnTweet: boolean,
        isBookmarked: boolean,
        userId: number,
        isLiked: boolean
    }
    loggedInUser: number
}

const TweetOptions = ({ data, loggedInUser }: Props) => {

    const { location, isOwnTweet, id, isLiked, isBookmarked } = data;

    return (
        <div className="w-full flex pb-4 justify-between">
            <div className="flex gap-1 items-center">
                {location && <>
                    <FaMapPin title='Add Location' className="text-gray-400 text-sm" />
                    <p className="text-gray-400 text-xs">{location}</p>
                </>}
            </div>
            {!isOwnTweet && <div className="flex gap-4">
                <LikeBtn userId={loggedInUser} tweetId={id} initialState={isLiked} />
                <BookmarkBtn userId={loggedInUser} tweetId={id} initialState={isBookmarked} />
            </div>}
        </div>
    )
}
export default TweetOptions