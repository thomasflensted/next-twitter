import AccountRow from "@/app/ui/follower-following-list/AccountRow";
import BackHeader from "@/app/ui/global/BackHeader"

const page = ({ params }: { params: { id: string } }) => {

    return (
        <>
            <BackHeader returnUrl={`/${params.id}`} text="Account" />
            <AccountRow />
            <AccountRow />
            <AccountRow />
        </>
    )
}
export default page