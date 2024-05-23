'use client'

import { setUserDetails } from "@/app/data/actions/userActions"
import LabelAndInput from "../update-details/LabelAndInput"
import SubmitDetailsBtn from "../update-details/SubmitDetailsBtn"
import { useFormState } from "react-dom"
import ResponseMsg from "../global/ResponseMsg"

const DetailsForm = ({ handlePlaceholder, namePlaceHolder }: { handlePlaceholder: string, namePlaceHolder: string }) => {

    const [state, dispatch] = useFormState(setUserDetails, { message: '', errors: {} });

    return (
        <form className="flex flex-col gap-4 mt-4" action={dispatch}>
            <LabelAndInput label="Handle" optional={false}>
                <input
                    name="handle"
                    defaultValue={handlePlaceholder}
                    className="w-full border rounded font-light text-xs pl-5 pr-2 py-1"
                    type="text" />
                <p className="absolute left-2 top-6 text-gray-400 font- text-xs">@</p>
                {state.errors?.handle && <ResponseMsg msg={state.errors.handle[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Name" optional={false}>
                <input
                    name="name"
                    defaultValue={namePlaceHolder}
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text"
                    placeholder={'Name'} />
                {state.errors?.name && <ResponseMsg msg={state.errors.name[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Website" optional={true}>
                <input
                    name="website"
                    defaultValue={`www.${handlePlaceholder}.com`}
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text" />
                {state.errors?.website && <ResponseMsg msg={state.errors.website[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Location" optional={true}>
                <input
                    name="location"
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text"
                    placeholder="Copenhagen, Denmark" />
                {state.errors?.location && <ResponseMsg msg={state.errors.location[0]} success={false} />}
            </LabelAndInput>
            <LabelAndInput label="Bio" optional={true}>
                <textarea
                    name="bio"
                    rows={5}
                    className="w-full resize-none border rounded font-light text-xs px-2 py-1"
                    placeholder='Just a regular guy trying to make it in this crazy world' />
                {state.errors?.bio && <ResponseMsg msg={state.errors.bio[0]} success={false} />}
            </LabelAndInput>
            <SubmitDetailsBtn />
        </form>
    )
}
export default DetailsForm