const TextField = () => {
    return (
        <textarea
            className="bg-neutral-50 flex-grow focus:outline-none resize-none text-sm py-2 placeholder:text-gray-400"
            rows={3}
            placeholder="What's going on?"
        />
    )
}
export default TextField