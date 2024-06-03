'use client'
import Image from "next/image";
import searchIcon from "@/assets/svg/search.svg";
import mail from "@/assets/svg/mail.svg";
import config from "@/assets/svg/config.svg";
import home from "@/assets/svg/home.svg";
import { useRouter } from "next/navigation";

export default function General(){

    const router = useRouter();

    return(
        <div
            className="flex flex-col items-center justify-between w-full py-1.5 text-sm text-gray-600 font-serif font-medium">
            <button className="flex flex-row items-center gap-2 hover:text-gray-800 w-full hover:bg-gray-200 p-1.5 rounded-lg">
                <figure>
                    <Image src={searchIcon} alt="search icon" width={22} height={22}/>
                </figure>
                <span>Buscar</span>
            </button>
            <button className="flex flex-row items-center gap-2 hover:text-gray-800 w-full hover:bg-gray-200 p-1.5 rounded-lg">
                <Image src={mail} alt={"Email icon"} width={22} height={22}/>
                <span>Buzon</span>
            </button>
            <button className="flex flex-row items-center gap-2 hover:text-gray-800 w-full hover:bg-gray-200 p-1.5 rounded-lg">
                <figure>
                    <Image src={config} alt="config icon" width={18} height={18}/>
                </figure>
                <span>Configuracion</span>
            </button>
            <button onClick={() => router.push("/app/")} className="flex flex-row items-center gap-2 hover:text-gray-800 w-full hover:bg-gray-200 p-1.5 rounded-lg">
                <figure>
                    <Image src={home} alt="home icon" width={22} height={22}/>
                </figure>
                <span>Inicio</span>
            </button>
        </div>
    )
}