export const TweetSkeleton = () => {
    return (
        <div className="animate-pulse border-b border-gray-200 dark:border-neutral-700 flex">
            <div className="h-full w-1/6 flex flex-col items-center p-4">
                <div className="bg-gray-200 h-12 w-12 border rounded-full dark:bg-neutral-700 dark:border-0"></div>
            </div>
            <div className="h-full w-full flex flex-col pt-4">
                <div className="flex justify-start gap-2 w-full items-baseline">
                    <div className="h-4 w-32 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="w-full flex-col gap-2 flex mt-2 pr-4 mb-4">
                    <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-1/4 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}

export const MultipleTweetsSkeleton = () => {
    return (
        <>
            <div className="animate-pulse border-b border-gray-200 dark:border-neutral-700 flex justify-center">
                <h2 className="my-2 font-medium text-sm">Getting Tweets...</h2>
            </div>
            <TweetSkeleton />
            <TweetSkeleton />
            <TweetSkeleton />
            <TweetSkeleton />
        </>
    )
}