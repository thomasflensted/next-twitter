import { useFormStatus } from "react-dom"

const SubmitBtn = ({ formId, label }: { formId: string, label: string }) => {

    const { pending } = useFormStatus()

    return (
        <button
            form={formId}
            className={`w-full border text-white ${!pending ? 'hover:bg-emerald-600 bg-emerald-500' : 'bg-gray-300'} font-medium rounded py-1.5`}>
            {label}
        </button>
    )
}
export default SubmitBtn