import { redirect } from "next/navigation";

export async function search(query: string) {
    redirect('/search/?query=' + query);
}