import { Profile } from "@/app/data/types"
import AccountRow from "./AccountRow"

const FollowList = ({ accounts, handle, ownId }: { accounts: Profile[], handle: string, ownId: number }) => {

    return (
        <>
            {accounts.map(user =>
                <AccountRow
                    key={user.id}
                    isFollowingUser={user.does_follow!}
                    isMyself={handle === user.handle}
                    account={user}
                    ownId={ownId} />
            )}
        </>
    )
}
export default FollowList