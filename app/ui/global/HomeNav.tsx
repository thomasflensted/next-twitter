import { FaHouse } from "react-icons/fa6"
import NavItem from "./NavItem"

const HomeNav = () => {
    return (
        <NavItem linkUrl="/home" text="Home">
            <FaHouse className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />
        </NavItem>
    )
}
export default HomeNav