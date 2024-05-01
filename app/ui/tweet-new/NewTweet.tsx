import ColumnLeft from "../tweet/ColumnLeft"
import OptionsBar from "./OptionsBar"
import SubmitBtn from "./SubmitBtn"
import TextField from "./TextField"
import NewTweetContainer from "./NewTweetContainer"
import { postTweet } from "@/app/data/actions"

const NewTweet = () => {
    return (
        <NewTweetContainer>
            <ColumnLeft />
            <form className="h-full w-full flex flex-col p-4" action={postTweet}>
                <TextField />
                <div className="flex justify-between mt-2">
                    <OptionsBar />
                    <SubmitBtn />
                </div>
            </form>
        </NewTweetContainer>
    )
}
export default NewTweet