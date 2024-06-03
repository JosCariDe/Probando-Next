'use server'
import Line1 from "@/components/client/sidebar/Line1";
import General from "@/components/client/sidebar/General";
import UserOnly from "@/components/client/sidebar/UserOnly";
import { getSession } from "@/utils/lib";
import { redirect } from "next/navigation";

export default async function Sidebar() {
    const session = await getSession();
    if(!session) redirect("/login");
    console.log(session);
    return(
        <header className="flex flex-col w-[13vw] h-screen bg-gray-50 py-1 px-2 gap-2">
            <Line1/>
            <General/>
            <UserOnly/>
        </header>
    )
}