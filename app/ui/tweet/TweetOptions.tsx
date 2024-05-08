import { FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";

const TweetOptions = ({ location }: { location: string }) => {
    return (
        <div className="w-full flex pr-6 pb-4 justify-between">
            <div className="flex gap-1 items-center">
                {location && <>
                    <FaMapPin title='Add Location' className="text-gray-400 text-sm" />
                    <p className="text-gray-400 text-xs">{location}</p>
                </>}
            </div>
            <div className="flex gap-4">
                <FaRegHeart className="text-emerald-500 text-md cursor-pointer hover:text-emerald-600" />
                <FaRegBookmark className="text-emerald-500 text-md cursor-pointer hover:text-emerald-600" />
            </div>
        </div>
    )
}
export default TweetOptions