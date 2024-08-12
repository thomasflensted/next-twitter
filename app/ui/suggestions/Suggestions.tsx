import { getFollowSuggestions } from "@/app/data/dataFollowers"
import { getUserProfile } from "@/app/data/dataUser"
import AccountRow from "../follower-following-list/AccountRow";

export async function Suggestions({ kindeId }: { kindeId: string }) {

    const { id } = await getUserProfile(kindeId);
    const suggestions = await getFollowSuggestions(id);

    return (
        <>
            {suggestions.map(account =>
                <AccountRow
                    key={account.id}
                    account={account}
                    isMyself={false}
                    ownId={id}
                    isFollowingUser={account.does_follow!} />
            )}
        </>
    )
}