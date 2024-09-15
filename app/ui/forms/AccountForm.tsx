'use client'

import { AccountState, updateAccount } from "@/app/lib/actions/userActions"
import LabelAndInput from "../login/LabelAndInput"
import SubmitBtn from "../login/SubmitBtn"
import { useFormState } from "react-dom"
import { useRouter } from "next/navigation"
import CoverPhotoInput from "./CoverPhotoInput"
import ProfilePicInput from "./ProfilePicInput"
import DeleteAccountBtn from "./DeleteAccountBtn"

type Props = {
    name: string,
    handle: string,
    bio: string | null,
    location: string | null,
    website: string | null,
    profile_pic: string | null,
    cover_photo: string | null
}

const AccountForm = (data: Props) => {

    const initialState: AccountState = { error: null }
    const [state, action] = useFormState(updateAccount, initialState)
    const router = useRouter()

    return (
        <form id="account" action={action} className="w-11/12 flex flex-col gap-6 mb-12">
            <ProfilePicInput fileUrl={data.profile_pic}>
                {state.error?.profilepic && <p className="text-red-500 font-light text-xs">{state.error.profilepic[0]}</p>}
            </ProfilePicInput>
            <CoverPhotoInput fileUrl={data.cover_photo}>
                {state.error?.coverphoto && <p className="text-red-500 font-light mt-1 text-xs">{state.error.coverphoto[0]}</p>}
            </CoverPhotoInput>
            <LabelAndInput error={state.error?.name} placeholder={data.name} bg="bg-gray-50" name="name" label="Name">
                {state.error?.name && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.name[0]}</p>}
            </LabelAndInput>
            <LabelAndInput error={state.error?.handle} placeholder={data.handle} bg="bg-gray-50" name="handle" label="Handle">
                {state.error?.handle && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.handle[0]}</p>}
            </LabelAndInput>
            <LabelAndInput error={state.error?.bio} placeholder={data.bio ? data.bio : ''} textarea bg="bg-gray-50" name="bio" label="Bio">
                {state.error?.bio && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.bio[0]}</p>}
            </LabelAndInput>
            <LabelAndInput error={state.error?.location} placeholder={data.location ? data.location : ''} bg="bg-gray-50" name="location" label="Location">
                {state.error?.location && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.location[0]}</p>}
            </LabelAndInput>
            <LabelAndInput error={state.error?.website} placeholder={data.website ? data.website : ''} bg="bg-gray-50" name="website" label="Website">
                {state.error?.website && <p className="text-red-500 font-light mt-1 ml-1 text-xs">{state.error.website[0]}</p>}
            </LabelAndInput>
            <div className="text-left">
                {state.error?.general && <p className="text-red-500 font-medium text-xs">{state.error.general}</p>}
            </div>
            <div className="flex gap-1">
                <button onClick={() => router.back()} className="w-full border font-medium rounded py-1.5 text-red-500 hover:bg-gray-100">Cancel</button>
                <DeleteAccountBtn />
                <SubmitBtn formId="account" label="Save" />
            </div>
        </form >
    )
}
export default AccountForm