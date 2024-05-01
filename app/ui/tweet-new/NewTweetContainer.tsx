import { ReactNode } from "react"

const NewTweetContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="border-b border-gray-200 dark:border-neutral-700 flex transition-colors ease-in-out">
            {children}
        </div>
    )
}
export default NewTweetContainer