import { getFollowers } from "@/app/lib/api/followers";
import ColumnHeading from "../global/columns/ColumnHeading";
import FollowList from "./FollowList";
import ResponseMsg from "../global/ResponseMsg";


export default async function UserFollowers({ handle }: { handle: string }) {

    const { data, error } = await getFollowers(handle);

    if (!data || error) return (
        <ResponseMsg msg="Something went wrong." error />
    );

    const headingText = data.length === 0
        ? `@${handle} is not followed by anybody`
        : `These users follow @${handle}:`

    return (
        <>
            <ColumnHeading text={headingText} />
            <FollowList accounts={data} />
        </>
    )
}