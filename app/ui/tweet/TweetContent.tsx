const TweetContent = ({ content }: { content: string }) => {
    return (
        <div className="w-full flex mt-2 pr-4 mb-4">
            <p className="dark:text-gray-100 text-sm font-light text-gray-700">{content}</p>
        </div>
    )
}
export default TweetContent