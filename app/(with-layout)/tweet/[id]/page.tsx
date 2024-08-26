import { getTweetById } from "@/app/data/dataTweets"
// import { authenticateAndGetKindeId, getUserProfile } from "@/app/data/dataUser";
import BackHeader from "@/app/ui/global/BackHeader"
import TweetComponent from "@/app/ui/tweet/Tweet"
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {

    // const kindeId = await authenticateAndGetKindeId();
    // const { id: userId } = await getUserProfile(kindeId);
    // const tweet = await getTweetById(params.id, userId);
    // if (!tweet) notFound();

    return (
        <div>
            <BackHeader href="/" />
            {/* <TweetComponent tweet={tweet} loggedInUser={userId} /> */}
        </div>
    )
}