import Link from "next/link";
import NameAndHandle from "../profile/NameAndHandle";
import FollowBtn from "./FollowBtn";

const AccountRow = ({ name, handle, bio, isMyself }: { name: string, handle: string, bio: string, isMyself: boolean }) => {

    return (
        <div className="flex px-6 py-3 border-b flex-col">
            <div className="flex justify-between items-center">
                <Link href={'/' + handle}>
                    <NameAndHandle name={name} handle={handle} />
                </Link>
                {!isMyself && <FollowBtn handle={handle} isFollowingUser={true} />}
            </div>
            <p className="font-light text-xs mt-2">
                {bio}
            </p>
        </div>
    )
}
export default AccountRow