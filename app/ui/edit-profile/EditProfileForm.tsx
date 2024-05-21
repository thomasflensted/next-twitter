import { updateUserDetails } from "@/app/data/actions/userActions";
import { getProfileFromHandle, getUserProfile } from "@/app/data/dataUser";
import LabelAndInput from "../update-details/LabelAndInput";
import SubmitDetailsBtn from "../update-details/SubmitDetailsBtn";
import Link from "next/link";

export default async function EditProfileForm({ kindeId }: { kindeId: string }) {

    const { name, handle, website, location, bio, id } = await getUserProfile(kindeId);
    const updateWithId = updateUserDetails.bind(null, id)

    return (
        <form action={updateWithId} className="flex flex-col gap-4">
            <LabelAndInput label="Name" optional={false}>
                <input
                    defaultValue={name}
                    name="name"
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text" />
            </LabelAndInput>
            <LabelAndInput label="Handle" optional={false}>
                <input
                    defaultValue={handle}
                    name="handle"
                    className="w-full border rounded font-light text-xs pl-5 pr-2 py-1"
                    type="text" />
                <p className="absolute left-2 top-6 text-gray-400 font- text-xs">@</p>
            </LabelAndInput>
            <LabelAndInput label="Website" optional={true}>
                <input
                    defaultValue={website}
                    name="website"
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text" />
            </LabelAndInput>
            <LabelAndInput label="Location" optional={true}>
                <input
                    defaultValue={location}
                    name="location"
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text" />
            </LabelAndInput>
            <LabelAndInput label="Bio" optional={true}>
                <textarea
                    defaultValue={bio}
                    name="bio"
                    rows={5}
                    className="w-full resize-none border rounded font-light text-xs px-2 py-1"
                    placeholder='Just a regular guy trying to make it in this crazy world' />
            </LabelAndInput>
            <div className="flex gap-1">
                <Link className="border text-center py-1 text-sm text-red-600 rounded hover:bg-gray-100 w-full" href={'/' + handle}>Cancel</Link>
                <SubmitDetailsBtn />
            </div>
        </form>
    )
}