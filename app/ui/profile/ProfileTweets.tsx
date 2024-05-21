import { getTweetsByUser } from "@/app/data/dataTweets";
import { getUserProfile } from "@/app/data/dataUser";

export default async function ProfileTweets({ accountHandle }: { accountHandle: string }) {

    // const { handle: ownHandle } = await getUserProfile();
    // const isOwnAccount = ownHandle === accountHandle;
    // const tweets = isOwnAccount ? await getOwnTweets() : await getTweetsByUser(accountHandle)

}