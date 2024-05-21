import FollowBtn from "../../follower-following-list/FollowBtn"

const RightColumn = () => {
    return (
        <div className="w-60 px-4 flex-grow-0 flex-shrink-0 relative">
            <div className="border rounded w-full h-96 mt-10 overflow-hidden overflow-y-scroll flex flex-col gap-2">
                <div className="w-full border-b p-2 flex flex-col gap-2">
                    <h3 className="text-emerald-600 font-medium text-sm">John Doe</h3>
                    <p className="text-gray-500 text-xs line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus ipsa doloremque provident culpa vero nostrum, nemo veniam alias labore.</p>
                    <FollowBtn isFollowingUser={false} ownId={3} handle={'thomasflensted'} />
                </div>
                <div className="w-full border-b p-2 flex flex-col gap-2">
                    <h3 className="text-emerald-600 font-medium text-sm">John Doe</h3>
                    <p className="text-gray-500 text-xs line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus ipsa doloremque provident culpa vero nostrum, nemo veniam alias labore.</p>
                    <FollowBtn isFollowingUser={false} ownId={3} handle={'thomasflensted'} />
                </div>
                <div className="w-full border-b p-2 flex flex-col gap-2">
                    <h3 className="text-emerald-600 font-medium text-sm">John Doe</h3>
                    <p className="text-gray-500 text-xs line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus ipsa doloremque provident culpa vero nostrum, nemo veniam alias labore.</p>
                    <FollowBtn isFollowingUser={false} ownId={3} handle={'thomasflensted'} />
                </div>
                <div className="w-full border-b p-2 flex flex-col gap-2">
                    <h3 className="text-emerald-600 font-medium text-sm">John Doe</h3>
                    <p className="text-gray-500 text-xs line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus ipsa doloremque provident culpa vero nostrum, nemo veniam alias labore.</p>
                    <FollowBtn isFollowingUser={false} ownId={3} handle={'thomasflensted'} />
                </div>
            </div>
        </div>
    )
}
export default RightColumn