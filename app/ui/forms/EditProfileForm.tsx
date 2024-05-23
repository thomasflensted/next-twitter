'use client'

import { updateUserDetails } from "@/app/data/actions/userActions"
import LabelAndInput from "../update-details/LabelAndInput"
import { useFormState } from "react-dom"
import Link from "next/link"
import SubmitDetailsBtn from "../update-details/SubmitDetailsBtn"
import ResponseMsg from "../global/ResponseMsg"

type Props = {
    name: string,
    handle: string,
    website: string,
    location: string,
    bio: string
}

const EditProfileForm = ({ name, handle, website, location, bio }: Props) => {

    const [state, dispatch] = useFormState(updateUserDetails, { success: '', errors: {} });

    return (
        <form action={dispatch} className="flex flex-col gap-4">
            <LabelAndInput label="Name" optional={false}>
                <input
                    defaultValue={name}
                    name="name"
                    className='w-full border rounded font-light text-xs px-2 py-1'
                    type="text" />
                {state.errors?.name && <ResponseMsg msg={state.errors.name[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Handle" optional={false}>
                <input
                    defaultValue={handle}
                    name="handle"
                    className="w-full border rounded font-light text-xs pl-5 pr-2 py-1"
                    type="text" />
                <p className="absolute left-2 top-6 text-gray-400 font- text-xs">@</p>
                {state.errors?.handle && <ResponseMsg msg={state.errors.handle[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Website" optional={true}>
                <input
                    defaultValue={website}
                    name="website"
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text" />
                {state.errors?.website && <ResponseMsg msg={state.errors.website[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Location" optional={true}>
                <input
                    defaultValue={location}
                    name="location"
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text" />
                {state.errors?.location && <ResponseMsg msg={state.errors.location[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Bio" optional={true}>
                <textarea
                    defaultValue={bio}
                    name="bio"
                    rows={5}
                    className="w-full resize-none border rounded font-light text-xs px-2 py-1"
                    placeholder='Just a regular guy trying to make it in this crazy world' />
                {state.errors?.bio && <ResponseMsg msg={state.errors.bio[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Profile Picture" optional={true}>
                <input
                    name="profilepic"
                    className="w-full border rounded font-light text-xs px-2 py-1 file:rounded file:border file:bg-neutral-50 file:outline-none file:text-gray-600 file:text-sm file:px-3 file:py-1 file:mr-3"
                    type="file" />
                {state.errors?.profilePic && <ResponseMsg msg={state.errors.profilePic[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Cover Photo" optional={true}>
                <input
                    name="coverphoto"
                    className="w-full border rounded font-light text-xs px-2 py-1 file:rounded file:border file:bg-neutral-50 file:outline-none file:text-gray-600 file:text-sm file:px-3 file:py-1 file:mr-3"
                    type="file" />
                {state.errors?.coverPhoto && <ResponseMsg msg={state.errors.coverPhoto[0]} success={false} />}
            </LabelAndInput>
            <div className="flex gap-1">
                <Link className="border text-center py-1 text-sm text-red-600 rounded hover:bg-gray-100 w-full" href={'/' + handle}>Cancel</Link>
                <SubmitDetailsBtn />
            </div>
        </form>
    )
}
export default EditProfileForm