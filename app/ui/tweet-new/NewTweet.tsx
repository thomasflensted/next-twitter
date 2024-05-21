import NewTweetContainer from "./NewTweetContainer"
import NewTweetForm from "./NewTweetForm"
import ProfilePicColumn from "../tweet/ProfilePicColumn"
import { getUserProfile } from "@/app/data/dataUser"

export default async function NewTweet({ kindeId }: { kindeId: string }) {

    const { id } = await getUserProfile(kindeId)

    return (
        <NewTweetContainer>
            <ProfilePicColumn />
            <NewTweetForm userId={id} />
        </NewTweetContainer>
    )
}