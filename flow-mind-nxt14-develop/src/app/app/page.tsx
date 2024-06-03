'use server';
import Sidebar from "@/components/Sidebar";

export default async function Page(){
    return(
        <>
            <Sidebar/>
            <main>
                <h1>Dashboard</h1>
            </main>
        </>
    )
}