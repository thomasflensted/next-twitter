import { Suspense } from "react";
import NewTweet from "./ui/tweet-new/NewTweet"
import Tweets from "./ui/tweet/Tweets"
import { MultipleTweetsSkeleton } from "./ui/skeletons/skeletons";

export default async function Home() {

  return (
    <>
      <NewTweet />
      <Suspense fallback={<MultipleTweetsSkeleton />}>
        <Tweets />
      </Suspense>
    </>
  )
}