import Link from "next/link"

export const NoTweetsMessageOwnProfile = () => {
    return (
        <div className="w-full items-center flex flex-col mt-6 gap-2">
            <h1 className="text-emerald-600 font-medium">Looks like you haven&apos;t tweeted anything yet!</h1>
            <Link className="text-sm text-emerald-600 underline" href='/'>Post your first tweet.</Link>
        </div>
    )
}

export const NoTweetsMessageOtherProfile = ({ handle }: { handle: string }) => {
    return (
        <div className="w-full items-center flex flex-col mt-6 gap-2">
            <h1 className="text-emerald-600 font-medium">{"@" + handle + "hasn't tweeted anything yet."}</h1>
        </div>
    )
}
