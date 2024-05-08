import { IoPerson } from "react-icons/io5"
import NavItem from "./NavItem"

const ProfileNav = () => {
    return (
        <NavItem linkUrl="/thomasflensted" text="Profile" >
            <IoPerson className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />
        </NavItem >
    )
}
export default ProfileNav