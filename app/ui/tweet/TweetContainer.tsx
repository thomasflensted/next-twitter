import { ReactNode } from "react"

const TweetContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div id="tweet" className="border-b border-gray-200 dark:border-neutral-700 flex hover:bg-neutral-100 transition-colors ease-in-out dark:hover:bg-neutral-900">
            {children}
        </div>
    )
}
export default TweetContainer