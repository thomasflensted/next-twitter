import Tweets from "../ui/tweet/Tweets"

const page = () => {
    return (
        <div>
            <div className="p-4 border-b">
                <h1 className="font-semibold">Your Booksmarks</h1>
            </div>
            <Tweets />
        </div>
    )
}
export default page