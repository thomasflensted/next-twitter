const ResponseMsg = ({ msg, error = false, paddingTop = 20 }: { msg: string, error?: boolean, paddingTop?: number }) => {
    return !error ? (
        <div style={{ paddingTop }}>
            <p className="font-semibold text-emerald-600 text-center">
                {msg}
            </p>
        </div>
    ) : (
        <div style={{ paddingTop }}>
            <p className="font-semibold text-red-600 text-center">
                {msg}
            </p>
        </div>
    )
}
export default ResponseMsg