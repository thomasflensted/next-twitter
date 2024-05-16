import { setUserDetails } from "@/app/data/actions/userActions"
import LabelAndInput from "./LabelAndInput"
import SubmitDetailsBtn from "./SubmitDetailsBtn"

const DetailsForm = ({ handlePlaceholder, namePlaceHolder, kindeId }: { handlePlaceholder: string, namePlaceHolder: string, kindeId: string }) => {

    const setDetailsWithId = setUserDetails.bind(null, kindeId)

    return (
        <form className="flex flex-col gap-4 mt-4" action={setDetailsWithId}>
            <LabelAndInput label="Handle" optional={false}>
                <input
                    name="handle"
                    defaultValue={handlePlaceholder}
                    className="w-full border rounded font-light text-xs pl-5 pr-2 py-1"
                    type="text" />
                <p className="absolute left-2 top-6 text-gray-400 font- text-xs">@</p>
            </LabelAndInput>
            <LabelAndInput label="Name" optional={false}>
                <input
                    name="name"
                    defaultValue={namePlaceHolder}
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text"
                    placeholder={'Name'} />
            </LabelAndInput>
            <LabelAndInput label="Website" optional={true}>
                <input
                    name="website"
                    defaultValue={`www.${handlePlaceholder}.com`}
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text" />
            </LabelAndInput>
            <LabelAndInput label="Location" optional={true}>
                <input
                    name="location"
                    className="w-full border rounded font-light text-xs px-2 py-1"
                    type="text"
                    placeholder="Copenhagen, Denmark" />
            </LabelAndInput>
            <LabelAndInput label="Bio" optional={true}>
                <textarea
                    name="bio"
                    rows={5}
                    className="w-full resize-none border rounded font-light text-xs px-2 py-1"
                    placeholder='Just a regular guy trying to make it in this crazy world' />
            </LabelAndInput>
            <SubmitDetailsBtn />
        </form>
    )
}
export default DetailsForm