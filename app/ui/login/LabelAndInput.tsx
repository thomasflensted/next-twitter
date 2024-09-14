import { ReactNode } from "react"

type Props = {
    label: string,
    name: string,
    type?: string
    error?: string[] | null | undefined
    children?: ReactNode
    bg?: string
    preface?: string
    placeholder?: string
    textarea?: boolean
}

const LabelAndInput = ({
    name,
    label,
    error,
    type = 'text',
    children,
    bg = 'bg-white',
    placeholder,
    textarea,
}: Props) => {

    return (
        <div className="relative text-left">
            <label className={`font-light -top-2 left-2 px-1 text-xs absolute text-emerald-500 ${bg}`}>{label}</label>
            {!textarea ? <input
                type={type}
                name={name}
                defaultValue={placeholder}
                className={`${error ? 'border-red-500' : ''} ${bg}
                    border w-full rounded py-2 px-3 text-xs font-light focus:outline-none focus:ring-1 focus:ring-emerald-600`} />
                : <textarea
                    rows={4}
                    name={name}
                    defaultValue={placeholder}
                    className={`${error ? 'border-red-500' : ''} ${bg} border px-3 resize-none w-full rounded py-2 text-xs font-light focus:outline-none focus:ring-1 focus:ring-emerald-600 `}
                />}
            {children}
        </div>
    )
}
export default LabelAndInput