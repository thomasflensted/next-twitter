'use client'

const FollowBtn = () => {

    const following = false;

    return (
        following
            ? <button className="text-emerald-600 text-xs border rounded-full px-3 py-1 hover:bg-neutral-100">
                Follow
            </button>
            : <button
                className="text-white bg-emerald-500 text-xs w-20 rounded-full py-1 hover:bg-emerald-600">
                Following
            </button>
    )
}
export default FollowBtn