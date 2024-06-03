'use server';
import { getSession } from "@/utils/lib";
import {redirect} from "next/navigation";

export default async function Page() {
    const session = await getSession();
    if(session) redirect("/app");
  return (
      <>
      </>
  )
}