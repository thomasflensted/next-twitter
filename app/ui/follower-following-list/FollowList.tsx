import AccountRow from "./AccountRow"
import { ProfilePreview } from "@/app/lib/types"

const FollowList = ({ accounts }: { accounts: ProfilePreview[] }) => {

    return (
        <>
            {accounts.map(user =>
                <AccountRow
                    key={user.handle}
                    profile={user} />
            )}
        </>
    )
}
export default FollowList