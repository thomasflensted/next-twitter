import NewTweetContainer from "./NewTweetContainer"
import NewTweetForm from "../forms/NewTweetForm"
import ProfilePicColumn from "../tweet/ProfilePicColumn"
import { getProfileImages, getUserProfile } from "@/app/data/dataUser"

export default async function NewTweet({ kindeId }: { kindeId: string }) {

    const { handle } = await getUserProfile(kindeId)
    const { profile_pic } = await getProfileImages(handle)

    return (
        <NewTweetContainer>
            <ProfilePicColumn handle={handle} image={profile_pic} />
            <NewTweetForm />
        </NewTweetContainer>
    )
}