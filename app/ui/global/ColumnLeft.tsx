import ThemeButton from "./ThemeButton";
import ProfileNav from "./ProfileNav";
import HomeNav from "./HomeNav";
import BookmarksNav from "./BookmarksNav";

const LeftColumn = () => {
    return (
        <nav className="w-48 px-4 flex-grow-0 flex-shrink-0 relative">
            <ul className="mt-20 ml-4 flex flex-col gap-1 fixed">
                <HomeNav />
                <ProfileNav />
                <BookmarksNav />
                <ThemeButton />
            </ul>
        </nav >
    )
}
export default LeftColumn