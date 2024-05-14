import ColumnHeading from "@/app/ui/global/ColumnHeading"
import Tweets from "@/app/ui/tweet/Tweets"


const page = () => {
    return (
        <div>
            <ColumnHeading text="Your Bookmarks" />
            <Tweets />
        </div>
    )
}
export default page