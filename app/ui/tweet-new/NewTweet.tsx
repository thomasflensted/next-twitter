import NewTweetContainer from "./NewTweetContainer"
import NewTweetForm from "./NewTweetForm"
import ProfilePicColumn from "../tweet/ProfilePicColumn"

const NewTweet = () => {
    return (
        <NewTweetContainer>
            <ProfilePicColumn />
            <NewTweetForm />
        </NewTweetContainer>
    )
}
export default NewTweet