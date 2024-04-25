import { FaRegHeart, FaRegBookmark } from "react-icons/fa";

const TweetOptions = () => {
    return (
        <div className="w-full flex gap-4 justify-end px-6 pb-4">
            <FaRegHeart className="text-blue-500 text-md cursor-pointer hover:text-blue-600" />
            <FaRegBookmark className="text-blue-500 text-md cursor-pointer hover:text-blue-600" />
        </div>
    )
}
export default TweetOptions