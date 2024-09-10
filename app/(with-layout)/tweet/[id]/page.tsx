import BackHeader from "@/app/ui/global/BackHeader"
import { TweetSkeleton } from "@/app/ui/skeletons/skeletons";
import TweetSuspenseWrapper from "@/app/ui/tweet/TweetSuspenseWrapper";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {

    return (
        <div>
            <BackHeader href="/" />
            <Suspense fallback={<TweetSkeleton />}>
                <TweetSuspenseWrapper tweetId={params.id} />
            </Suspense>
        </div>
    )
}