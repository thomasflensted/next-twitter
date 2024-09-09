import { createClient } from "@/utils/supabase/server";
import { getUserId } from "@/app/lib/api/users";
import ProfileRow from "../follower-following-list/AccountRow";

export async function Suggestions() {

    const supabase = createClient()
    const userId = await getUserId();
    const { data, error } = await supabase
        .rpc('get_suggestions', { current_user_id: userId })

    if (!data || error || data.length === 0) {
        return <p>Error.</p>
    }

    return (
        <>
            {data.map(profile =>
                <ProfileRow
                    key={profile.handle}
                    profile={profile} />)}
        </>
    )
}