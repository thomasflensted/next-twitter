import { ReactNode } from "react"

type Props = {
    label: string,
    name: string,
    type?: string
    error?: string[] | null | undefined
    children?: ReactNode
    bg?: string
}

const LabelAndInput = ({ name, label, error = null, type = 'text', children, bg = 'bg-white' }: Props) => {
    return (
        <div className="relative">
            <label className={`font-light -top-2 left-2 px-1 text-xs absolute text-emerald-500 ${bg}`}>{label}</label>
            <input
                type={type}
                name={name}
                className={`${error ? 'border-red-500' : ''} ${bg}
                    border w-full rounded py-2 px-2 text-xs font-light focus:outline-none focus:ring-1 focus:ring-emerald-600`} />
            {children}
        </div>
    )
}
export default LabelAndInput