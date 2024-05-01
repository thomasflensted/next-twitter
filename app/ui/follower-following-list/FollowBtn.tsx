const FollowBtn = () => {
    const following = true;
    return (
        following
            ? <button className="text-sm border border-emerald-600 hover:bg-emerald-50 text-emerald-600 font-medium rounded-full px-3 py-1">Follow</button>
            : <button className="text-sm bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full px-3 py-1">Following</button>
    )
}
export default FollowBtn