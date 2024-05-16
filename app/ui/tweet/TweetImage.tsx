const TweetImage = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <div className="w-full h-auto rounded-lg overflow-hidden relative mb-4 mr-6 shadow-md">
            <img
                src={imageUrl}
                alt="An image attached to a tweet." />
        </div>
    )
}
export default TweetImage