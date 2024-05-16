import { getTweetById } from "@/app/data/tweetData"
import BackHeader from "@/app/ui/global/BackHeader"
import TweetComponent from "@/app/ui/tweet/Tweet"
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: number } }) {

    const tweet = await getTweetById(params.id);
    if (!tweet) notFound();

    return (
        <div>
            <BackHeader />
            <TweetComponent tweet={tweet} />
        </div>
    )
}