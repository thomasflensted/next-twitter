import Link from "next/link";
import NameAndHandle from "../profile/NameAndHandle";
import FollowBtn from "./FollowBtn";
import { Profile } from "@/app/data/types";

const AccountRow = ({ account, isMyself, ownId, isFollowingUser }: { account: Profile, isMyself: boolean, ownId: number, isFollowingUser: boolean }) => {

    const { handle, name, bio } = account;

    return (
        <div className="flex px-6 py-3 border-b flex-col">
            <div className="flex justify-between items-center">
                <Link href={'/' + handle}>
                    <NameAndHandle name={name} handle={handle} />
                </Link>
                {!isMyself && <FollowBtn ownId={ownId} handle={handle} isFollowingUser={isFollowingUser} />}
            </div>
            <p className="font-light text-xs mt-2">{bio}</p>
        </div>
    )
}
export default AccountRow