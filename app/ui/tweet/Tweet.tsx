import ColumnLeft from "./ColumnLeft"
import TweetContainer from "../tweet-new/TweetContainer"
import TweetAccountRow from "./TweetAccountRow"
import TweetContent from "./TweetContent"
import TweetOptions from "./TweetOptions"

const Tweet = () => {
    return (
        <TweetContainer>
            <ColumnLeft />
            <div className="h-full w-full flex flex-col pt-4">
                <TweetAccountRow />
                <TweetContent />
                <TweetOptions />
            </div>
        </TweetContainer>
    )
}
export default Tweet