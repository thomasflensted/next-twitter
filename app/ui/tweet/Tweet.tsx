import ColumnLeft from "./ColumnLeft"
import TweetContainer from "./TweetContainer"
import TweetAccountRow from "./TweetAccountRow"
import TweetContent from "./TweetContent"
import TweetOptions from "./TweetOptions"
import { Tweet } from "@/app/data/types"

const TweetComponent = ({ tweet }: { tweet: Tweet }) => {
    return (
        <TweetContainer>
            <ColumnLeft />
            <div className="h-full w-full flex flex-col pt-4">
                <TweetAccountRow tweet_id={tweet.id} />
                <TweetContent content={tweet.content} />
                <TweetOptions location={tweet.location} />
            </div>
        </TweetContainer>
    )
}
export default TweetComponent