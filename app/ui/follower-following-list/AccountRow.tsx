import Link from "next/link";
import NameAndHandle from "../profile/NameAndHandle";
import FollowBtn from "./FollowBtn";
import { Profile } from "@/app/data/types";
import ProfilePicSmall from "../global/ProfilePicSmall";

const AccountRow = ({ account, isMyself, ownId, isFollowingUser }: { account: Profile, isMyself: boolean, ownId: number, isFollowingUser: boolean }) => {

    const { handle, name, bio, profile_pic } = account;

    return (
        <div className="flex px-6 py-3 border-b items-center">
            <ProfilePicSmall handle={handle} image={profile_pic} />
            <div className="ml-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                    <Link href={'/' + handle}><NameAndHandle name={name} handle={handle} /></Link>
                    {!isMyself && <FollowBtn ownId={ownId} handle={handle} isFollowingUser={isFollowingUser} />}
                </div>
                <p className="font-light text-xs mt-2">{bio}</p>
            </div>
        </div>
    )
}
export default AccountRow