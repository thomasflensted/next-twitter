import { ReactNode } from "react"

const TweetContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="border-b border-gray-200 flex hover:bg-neutral-100 transition-colors ease-in-out">
            {children}
        </div>
    )
}
export default TweetContainer