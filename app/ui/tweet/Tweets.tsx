import Tweet from "./Tweet"

const Tweets = () => {

    const testArr = [1, 2, 3, 4, 5, 6, 6, 7, 8,]

    return (
        <>
            {testArr.map(test => <Tweet key={test} />)}
        </>
    )
}
export default Tweets