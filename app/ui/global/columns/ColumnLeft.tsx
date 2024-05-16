import ThemeButton from "../nav-items/ThemeButton";
import ProfileNav from "../nav-items/ProfileNav";
import HomeNav from "../nav-items/HomeNav";
import BookmarksNav from "../nav-items/BookmarksNav";
import Logo from "../Logo";

const LeftColumn = () => {
    return (
        <nav className="w-48 px-4 flex-grow-0 flex-shrink-0 relative">
            <ul className="mt-5 ml-4 flex flex-col gap-1 fixed">
                <Logo />
                <HomeNav />
                <ProfileNav />
                <BookmarksNav />
                <ThemeButton />
            </ul>
        </nav>
    )
}
export default LeftColumn