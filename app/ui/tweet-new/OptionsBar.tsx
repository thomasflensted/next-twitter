import { FaMapPin } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";

const OptionsBar = () => {
    return (
        <div className="flex gap-4  flex-grow items-center">
            <FaRegImage className="text-blue-500 text-lg cursor-pointer hover:text-blue-600" />
            <IoMdHappy className="text-blue-500 text-lg cursor-pointer hover:text-blue-600" />
            <FaMapPin className="text-blue-500 text-lg cursor-pointer hover:text-blue-600" />
        </div>
    )
}
export default OptionsBar