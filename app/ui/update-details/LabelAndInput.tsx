import { ReactNode } from "react"

const LabelAndInput = ({ children, label, optional }: { children?: ReactNode, label: string, optional: boolean }) => {
    return (
        <div className="w-full flex flex-col gap-1 relative">
            {!optional && <label className="text-xs text-gray-600" htmlFor={label.toLowerCase()}>{label}</label>}
            {optional &&
                <div className="flex gap-1 items-center">
                    <label className="text-xs text-gray-600" htmlFor="">{label}</label>
                    <p className="text-gray-400 text-xs italic font-thin">- optional</p>
                </div>}
            {children}
        </div>
    )
}
export default LabelAndInput