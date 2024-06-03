'use client';
import Image from "next/image";
import calendar from "@/assets/svg/calendar.svg"
import todolist from "@/assets/svg/todolist.svg"
import Button from "./Button";
import { useRouter } from "next/navigation";
import Section from "./Section";

export default function UserOnly(){

    const router = useRouter();

    return(
        <Section title="Planificador">
            <Button handler={() => router.push("/app/calendar")} text="Calendario">
                <Image src={calendar} alt="search icon" width={22} height={22}/>
            </Button>
            <Button handler={() => router.push("/app/todolist")} text="Lista de tareas">
                <Image src={todolist} alt="search icon" width={22} height={22}/>
            </Button>
        </Section>
    )
}