const FormResponseMsg = ({ msg, success }: { msg: string, success: boolean }) => {
    if (!success)
        return (
            <p className="text-red-500 text-xs font-light border border-red-400 rounded bg-red-50 py-1 px-2 mt-2">
                {msg}
            </p>
        )
    else {
        return (
            <p className="text-emerald-600 text-xs font-light border border-emerald-600 rounded bg-green-50 py-1 px-2 mt-2">
                {msg}
            </p>)
    }
}
export default FormResponseMsg