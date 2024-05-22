
import { getUserProfile } from "@/app/data/dataUser";
import ColumnHeading from "../global/columns/ColumnHeading";
import FollowList from "./FollowList";
import { getUserFollowing } from "@/app/data/dataFollowers";


export default async function UserFollows({ handle, kindeId }: { handle: string, kindeId: string }) {

    const profile = await getUserProfile(kindeId);
    const follows = await getUserFollowing(handle, profile.id);
    const headingText = follows.length === 0 ? `@${handle} doesn't follow anybody.` : `@${handle} follows:`

    return (
        <>
            <ColumnHeading
                text={headingText} />
            <FollowList
                accounts={follows}
                handle={profile.handle}
                ownId={profile.id} />
        </>
    )
}