import FollowBtn from "./FollowBtn";
import NameAndHandle from "./NameAndHandle";

const AccountRow = () => {

    return (
        <div className="flex px-6 py-3 border-t flex-col">
            <div className="flex justify-between items-center">
                <NameAndHandle />
                <FollowBtn />
            </div>
            <p className="font-light text-xs mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quisquam tempore similique praesentium alias animi commodi esse ipsa et cumque?</p>
        </div>
    )
}
export default AccountRow