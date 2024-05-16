import NavItem from "./NavItem"
import { FaBookmark } from "react-icons/fa6"

const BookmarksNav = () => {
    return (
        <NavItem linkUrl="/bookmarks" text="Bookmarks">
            <FaBookmark className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />
        </NavItem>
    )
}
export default BookmarksNav