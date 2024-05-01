import Link from "next/link"

const NameAndHandle = () => {
    return (
        <div className="flex flex-col gap-0.5">
            <Link href={`/name`} className="text-emerald-600 font-medium text-md">Thomas Flensted</Link>
            <Link href={`/name`} className="text-emerald-500 font-light text-xs">@thomasflensted</Link>
        </div>
    )
}
export default NameAndHandle