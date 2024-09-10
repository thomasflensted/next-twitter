import LabelAndInput from "@/app/ui/login/LabelAndInput";
import BackHeader from "@/app/ui/global/BackHeader";

export default async function Page() {
    return (
        <div>
            <BackHeader href="/" />
            <div className="w-full justify-center flex mt-6">
                <form className="w-11/12 flex flex-col gap-6" action="">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="w-28 rounded-full border h-28 bg-gray-100 relative">
                            <div className="h-6 w-6 rounded-full border bg-gray-50 absolute bottom-2 right-1"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-full rounded border h-28 bg-gray-100"></div>
                        <button className="bg-gray-50 text-emerald-600 w-full hover:bg-gray-100 transition-colors border rounded py-1.5">Select Cover Photo</button>
                    </div>
                    <LabelAndInput bg="bg-gray-50" name="name" label="Name" type="text" />
                    <LabelAndInput bg="bg-gray-50" name="name" label="Handle" type="text" />
                    <LabelAndInput bg="bg-gray-50" name="name" label="Bio" type="text" />
                    <LabelAndInput bg="bg-gray-50" name="name" label="Location" type="text" />
                    <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-white rounded py-2">Save</button>
                </form>
            </div>
        </div>
    )
} 