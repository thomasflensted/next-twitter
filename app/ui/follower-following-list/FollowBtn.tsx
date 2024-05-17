'use client'

const FollowBtn = ({ isFollowingUser }: { isFollowingUser: boolean | null }) => {

    return (
        !isFollowingUser
            ? <button
                onClick={() => console.log('follow user')}
                className="text-emerald-600 text-xs border rounded-full px-3 py-1 hover:bg-neutral-100">Follow</button>
            : <button
                onClick={() => console.log('unfollow user')}
                className="text-white bg-emerald-500 text-xs w-20 rounded-full py-1 hover:bg-emerald-600">Following</button>
    )
}
export default FollowBtn