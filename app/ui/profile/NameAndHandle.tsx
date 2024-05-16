const NameAndHandle = ({ name, handle }: { name: string, handle: string }) => {
    return (
        <div className="flex gap-2 items-baseline">
            <h1 className="text-emerald-700 font-medium text-md">{name}</h1>
            <p className="text-emerald-500 font-light text-xs">{`@${handle}`}</p>
        </div>
    )
}
export default NameAndHandle