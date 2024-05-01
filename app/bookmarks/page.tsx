import Tweets from "../ui/tweet/Tweets"
import BackHeader from "../ui/global/BackHeader"
import ColumnHeading from "../ui/global/ColumnHeading"

const page = () => {
    return (
        <div>
            <ColumnHeading text="Your Bookmarks" />
            <Tweets />
        </div>
    )
}
export default page