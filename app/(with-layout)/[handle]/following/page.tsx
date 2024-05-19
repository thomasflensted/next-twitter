import { getUserFollows, getUserProfile } from "@/app/data/userData";
import AccountRow from "@/app/ui/follower-following-list/AccountRow";
import BackHeader from "@/app/ui/global/BackHeader"
import ColumnHeading from "@/app/ui/global/columns/ColumnHeading";

export default async function Page({ params }: { params: { handle: string } }) {

    const { handle } = await getUserProfile();
    const follows = await getUserFollows(params.handle);
    const headingText = follows.length === 0 ? `${params.handle} doesn't follow anybody.` : `${params.handle} follows:`

    return (
        <>
            <BackHeader href="/handle" />
            <ColumnHeading text={headingText} />
            {follows.map(user =>
                <AccountRow
                    isMyself={handle === user.handle}
                    key={user.id}
                    name={user.name}
                    handle={user.handle}
                    bio={user.bio} />
            )}
        </>
    )
}