"use server";
import prisma from "@/utils/prisma";


const register = async (formData:FormData) => {
    const firstName = formData.get("name") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if(!firstName || !lastName || !email || !password) return null;
    const exist = await prisma.user.findFirst({
        where:{
            email: email
        }
    });
    if(exist) return "Usuario ya registrado";
    const user = await prisma.user.create({
        data:{
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
    });
    return user;
}

export default register;