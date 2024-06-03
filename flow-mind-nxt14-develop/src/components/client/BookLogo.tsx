'use client';
import Image from "next/image";
import book_open from "@/assets/svg/book_open.svg";
import book_close from "@/assets/svg/book_close.svg";
import {useState} from "react";

export default function BookLogo(){
    const [open, setOpen] = useState(false);
    return (
        <figure onClick={()=> setOpen(!open)} className="cursor-pointer flex items-center justify-center">
            {open ?
                (<Image src={book_open} alt={"figure of an open book"} width={150} height={150} priority />):
                (<Image src={book_close} alt={"figure of a closed book"} width={150} height={150} priority />)
            }
        </figure>
    )
}