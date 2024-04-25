import ColumnLeft from "../tweet/ColumnLeft"
import OptionsBar from "./OptionsBar"
import SubmitBtn from "./SubmitBtn"
import TextField from "./TextField"
import TweetContainer from "./TweetContainer"

const NewTweet = () => {
    return (
        <TweetContainer>
            <ColumnLeft />
            <form className="h-full w-full flex flex-col p-4">
                <TextField />
                <div className="flex justify-between mt-4">
                    <OptionsBar />
                    <SubmitBtn />
                </div>
            </form>
        </TweetContainer>
    )
}
export default NewTweet