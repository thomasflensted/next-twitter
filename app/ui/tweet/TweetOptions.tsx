import { FaMapPin } from "react-icons/fa6";
import BookmarkBtn from "./BookmarkBtn";
import LikeBtn from "./LikeBtn";

type Props = {
    id: number,
    location: string | null
    isBookmarked: boolean,
    isLiked: boolean
}

const TweetOptions = ({ id, location, isBookmarked, isLiked }: Props) => {

    return (
        <div className="w-full flex pb-4 justify-between">
            <div className="flex gap-1 items-center">
                {location && <>
                    <FaMapPin title='Add Location' className="text-gray-400 text-sm" />
                    <p className="text-gray-400 text-xs">{location}</p>
                </>}
            </div>
            <div className="flex gap-4">
                <LikeBtn tweetId={id} initialState={isLiked} />
                <BookmarkBtn tweetId={id} initialState={isBookmarked} />
            </div>
        </div>
    )
}
export default TweetOptions