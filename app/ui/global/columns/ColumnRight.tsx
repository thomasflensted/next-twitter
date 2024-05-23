const RightColumn = () => {
    return (
        <div className="w-60 px-4 flex-grow-0 flex-shrink-0 relative flex flex-col gap-1">
            {/* <form action="">
                <input name="search" className="border mt-3 block rounded px-2 py-1 text-sm text-gray-500 focus:border-emerald-600 focus:outline-none" type="text" />
            </form> */}
            <h3 className="text-emerald-600 font-medium text-sm mt-3">Coming soon:</h3>
            <p className="text-emerald-600 text-xs mt-1">🔎  Search</p>
            <p className="text-emerald-600 text-xs mt-1">🌓  Persistent dark mode</p>
        </div>
    )
}
export default RightColumn