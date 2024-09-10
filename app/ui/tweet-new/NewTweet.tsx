import NewTweetContainer from "./NewTweetContainer"
import NewTweetForm from "../forms/NewTweetForm"
import ProfilePicColumn from "../tweet/ProfilePicColumn"
import { createClient } from "@/utils/supabase/server";

export default async function NewTweet({ userId }: { userId: string }) {

    const supabase = createClient()
    const { data } = await supabase
        .from('accounts')
        .select('profile_pic, handle')
        .eq('user_id', userId)
        .single();

    return (
        <NewTweetContainer>
            {data?.handle && data.profile_pic && <ProfilePicColumn handle={data?.handle} image={data?.profile_pic} />}
            <NewTweetForm />
        </NewTweetContainer>
    )
}