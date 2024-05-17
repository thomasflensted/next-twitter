const ColumnHeading = ({ text }: { text: string }) => {
    return (
        <div className="group flex gap-4 items-center py-4 px-6 border-t border-b">
            <h1 className="font-semibold text-emerald-600">{text}</h1>
        </div>
    )
}
export default ColumnHeading