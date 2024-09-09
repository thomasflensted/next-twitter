import ColumnHeading from "../global/columns/ColumnHeading";
import FollowList from "./FollowList";
import ResponseMsg from "../global/ResponseMsg";
import { getFollowing } from "@/app/lib/api/followers";


export default async function UserFollowing({ handle }: { handle: string }) {

    const { data, error } = await getFollowing(handle);

    if (!data || error) return (
        <ResponseMsg msg="Something went wrong." error />
    );

    const headingText = data.length === 0
        ? `@${handle} doesn't follow anybody.`
        : `@${handle} follows:`

    return (
        <>
            <ColumnHeading text={headingText} />
            <FollowList accounts={data} />
        </>
    )
}