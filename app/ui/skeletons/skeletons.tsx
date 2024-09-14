import { RxAvatar } from "react-icons/rx";

export const TweetSkeleton = () => {
    return (
        <div className="animate-pulse border-b border-gray-200 dark:border-neutral-700 flex">
            <div className="h-full w-1/6 flex flex-col items-center p-4">
                <div className="bg-gray-200 h-12 w-12 border rounded-full dark:bg-neutral-700 dark:border-0"></div>
            </div>
            <div className="h-full w-full flex flex-col pt-4">
                <div className="flex justify-start gap-2 w-full items-baseline">
                    <SkeletonBar width="w-32" />
                    <SkeletonBar width="w-16" />
                    <SkeletonBar width="w-20" />
                </div>
                <div className="w-full flex-col gap-2 flex mt-2 pr-4 mb-4">
                    <SkeletonBar width="w-full" />
                    <SkeletonBar width="w-full" />
                    <SkeletonBar width="w-2/3" />
                    <SkeletonBar width="w-1/4" />
                </div>
            </div>
        </div>
    )
}

export const HomeSkeleton = () => {
    const skeletons = Array.from({ length: 8 }, (_, i) => i);
    return (
        <>
            <NewTweetFormSkeleton />
            {skeletons.map((i) => (<TweetSkeleton key={i} />))}
        </>
    )
}

export const NewTweetFormSkeleton = () => {
    return (
        <div className="border-b border-gray-200 dark:border-neutral-700 flex transition-colors ease-in-out h-36">
            <div className="h-full w-1/6 flex flex-col items-center p-4">
                <div className="bg-white relative h-12 w-12 shadow rounded-full dark:bg-neutral-700 dark:border-0 overflow-hidden flex items-center justify-center">
                    <RxAvatar className="text-emerald-600 text-3xl" />
                </div>
            </div>
            <div className="h-full w-full flex flex-col p-4">
                <div className="flex justify-between mt-2">
                </div>
            </div>
        </div>
    )
}

export const MultipleTweetsSkeleton = () => {
    const skeletons = Array.from({ length: 8 }, (_, i) => i);
    return (
        <>
            {skeletons.map((i) => (
                <TweetSkeleton key={i} />
            ))}
        </>
    )
}

export const ProfileSkeleton = () => {
    return (
        <>
            <div className="w-full h-44 bg-gray-200 animate-pulse relative">
                <div className="w-[138px] h-[138px] rounded-full absolute bg-white translate-y-1/2 bottom-0 overflow-hidden right-4 shadow-md flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center"></div>
                </div>
            </div>
            <div className="py-5 px-5 flex flex-col gap-3 border-b animate-pulse">
                <SkeletonBar width="w-2/3" />
                <SkeletonBar width="w-2/4" />
                <SkeletonBar width="w-3/5" />
                <SkeletonBar width="w-1/3" />
                <SkeletonBar width="w-3/4" />
            </div>
        </>
    )
}

export const ProfileImagesSkeleton = () => {
    return (
        <div className="w-full h-44 bg-gray-200 animate-pulse relative">
            <div className="w-[138px] h-[138px] rounded-full absolute bg-white translate-y-1/2 bottom-0 overflow-hidden right-4 shadow-md flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center"></div>
            </div>
        </div>
    )
}

export const EditAccountSkeleton = () => {

    const widths = ["w-1/3", "w-1/2", "w-2/3", "w-1/4", "w-3/4"];

    return (
        <div className="w-11/12 flex flex-col gap-6 mb-12 animate-pulse">
            <div className="flex flex-col gap-4 items-center">
                <div className="w-28 rounded-full h-28 bg-gray-200 relative overflow-hidden"></div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="w-full rounded border h-40 bg-gray-200 overflow-hidden"></div>
                <div className="bg-gray-200 w-full transition-colors border rounded py-1.5 h-6"></div>
            </div>
            {widths.map(w => (
                <div key={w} className="flex flex-col gap-1">
                    <SkeletonBar width={w} />
                    <SkeletonBar width="w-full" />
                </div>
            ))}
        </div>
    )
}

export const SkeletonBar = ({ width }: { width: string }) => {
    return (<div className={`${width} h-4 rounded-full bg-gray-200`}></div>)
}

export const FollowerListSkeleton = () => {
    return (
        <div className="w-full animate-pulse">
            <div className="group flex gap-4 items-center py-4 px-6 border-b">
                <SkeletonBar width="w-2/5" />
            </div>
            <AccountRowSkeleton firstLineWidth="w-1/4" secondLineWidth="w-3/4" />
            <AccountRowSkeleton firstLineWidth="w-2/4" secondLineWidth="w-4/5" />
            <AccountRowSkeleton firstLineWidth="w-1/5" secondLineWidth="w-2/3" />
            <AccountRowSkeleton firstLineWidth="w-3/4" secondLineWidth="w-5/6" />
            <AccountRowSkeleton firstLineWidth="w-1/4" secondLineWidth="w-2/5" />
        </div>
    )
}

export const AccountRowSkeleton = ({ firstLineWidth, secondLineWidth }: { firstLineWidth: string, secondLineWidth: string }) => {
    return (
        <div className="group flex flex-col gap-2 py-4 px-6 border-b">
            <SkeletonBar width={firstLineWidth} />
            <SkeletonBar width={secondLineWidth} />
        </div>
    )
}

export const FullProfileSkeleton = () => {
    return (
        <>
            <ProfileSkeleton />
            <MultipleTweetsSkeleton />
        </>
    )
}