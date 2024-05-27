import NavItem from "./NavItem"
import { IoPerson } from "react-icons/io5";

const SuggestionsNav = () => {
    return (
        <NavItem linkUrl="/suggestions" text="Suggestions">
            <IoPerson className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />
        </NavItem>
    )
}
export default SuggestionsNav