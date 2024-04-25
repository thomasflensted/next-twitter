import Link from "next/link";
import { FaBookmark, FaHouse } from "react-icons/fa6"
import { IoPerson } from "react-icons/io5";

const OptionsColumn = () => {
    return (
        <nav className="w-48 px-4 flex-grow-0 flex-shrink-0 relative">
            <ul className="mt-20 ml-4 flex flex-col gap-1 fixed">
                <li className="group cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors ease-out">
                    <Link href='/' className="flex items-center gap-2">
                        <FaHouse className="group-hover:text-blue-600 transition-colors duration-200" />
                        <h2 className="font-medium text-md group-hover:text-blue-600 transition-colors duration-200">Home</h2>
                    </Link>
                </li>
                <li className="group cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors ease-out">
                    <Link href='/name' className="flex items-center gap-2">
                        <IoPerson className="group-hover:text-blue-600 transition-colors duration-200 " />
                        <h2 className="font-medium text-md group-hover:text-blue-600 transition-colors duration-200">Profile</h2>
                    </Link>
                </li>
                <li className="group cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors ease-out">
                    <Link href='/bookmarks' className="flex items-center gap-2">
                        <FaBookmark className="group-hover:text-blue-600 transition-colors duration-200" />
                        <h2 className="font-medium text-md group-hover:text-blue-600 transition-colors duration-200">Bookmarks</h2>
                    </Link>
                </li>
            </ul>
        </nav >
    )
}
export default OptionsColumn