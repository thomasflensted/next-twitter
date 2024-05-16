import NewTweetContainer from "./NewTweetContainer"
import NewTweetForm from "./NewTweetForm"
import ProfilePicColumn from "../tweet/ProfilePicColumn"

const NewTweet = ({ userId }: { userId: number }) => {
    return (
        <NewTweetContainer>
            <ProfilePicColumn />
            <NewTweetForm userId={userId} />
        </NewTweetContainer>
    )
}
export default NewTweet