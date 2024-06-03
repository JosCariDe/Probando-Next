"use server";

import { login } from "@/utils/lib";
import prisma from "@/utils/prisma";
import {redirect} from "next/navigation";

const loginAction = async (formData:FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const user = await prisma.user.findFirst({
        where:{
            email: email,
            password: password
        },
        select:{
            id: true,
            firstName: true,
            lastName: true
        }
    });
    if(!user) return "Usuario no encontrado";
    await login(user);
    redirect("/");
}

export default loginAction;