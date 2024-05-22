import { getUserProfile } from "@/app/data/dataUser";
import ColumnHeading from "../global/columns/ColumnHeading";
import FollowList from "./FollowList";
import { getUserFollowers } from "@/app/data/dataFollowers";

export default async function UserFollowings({ handle, kindeId }: { handle: string, kindeId: string }) {

    const profile = await getUserProfile(kindeId);
    const follows = await getUserFollowers(handle, profile.id);
    const headingText = follows.length === 0 ? `${handle} is not followed by anybody` : `These users follow ${handle}:`

    return (
        <>
            <ColumnHeading text={headingText} />
            <FollowList accounts={follows} handle={profile.handle} ownId={profile.id} />
        </>
    )
}