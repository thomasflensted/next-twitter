import { FaMapPin } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

const OptionsBar = () => {
    return (
        <div className="flex gap-4  flex-grow items-center">
            <BsStars title="Improve with AI" className="text-emerald-500 text-lg cursor-pointer hover:text-emerald-600" />
            <FaRegImage title='Add Photo' className="text-emerald-500 text-lg cursor-pointer hover:text-emerald-600" />
            <IoMdHappy title="Add Emoji" className="text-emerald-500 text-lg cursor-pointer hover:text-emerald-600" />
            <FaMapPin title='Add Location' className="text-emerald-500 text-lg cursor-pointer hover:text-emerald-600" />
        </div>
    )
}
export default OptionsBar