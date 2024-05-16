import AccountRow from "@/app/ui/follower-following-list/AccountRow"
import BackHeader from "@/app/ui/global/BackHeader"
import ColumnHeading from "@/app/ui/global/columns/ColumnHeading"

const page = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <BackHeader returnUrl={`/${params.id}`} text="Account" />
            <ColumnHeading text={`${params.id}'s followers`} />
            <AccountRow />
            <AccountRow />
            <AccountRow />
        </>
    )
}
export default page