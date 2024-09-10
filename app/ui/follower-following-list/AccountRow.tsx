import Link from "next/link";
import NameAndHandle from "../profile/NameAndHandle";
import FollowBtn from "./FollowBtn";
import ProfilePicSmall from "../global/ProfilePicSmall";
import { ProfilePreview } from "@/app/lib/types";

const ProfileRow = ({ profile }: { profile: ProfilePreview }) => {

    const { handle, name, bio, profile_pic } = profile;

    return (
        <div className="flex px-6 py-3 border-b items-center">
            <ProfilePicSmall handle={handle} image={profile_pic} />
            <div className="ml-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                    <Link href={'/' + handle}><NameAndHandle name={name} handle={handle} /></Link>
                    <FollowBtn handle={handle} isFollowingUser={false} />
                </div>
                <p className="font-light text-xs mt-2">{bio}</p>
            </div>
        </div>
    )
}
export default ProfileRow