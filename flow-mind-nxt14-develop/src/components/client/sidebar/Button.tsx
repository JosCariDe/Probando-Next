'use client';

interface Props{
    children: React.ReactNode;
    text: string;
    handler: () => void;
}

export default function Button({children, text, handler}: Props){
    return(
        <button onClick={()=> handler()} className="flex flex-row items-center gap-2 hover:text-gray-800 w-full hover:bg-gray-200 p-1.5 rounded-lg">
            <figure>
                {children}
            </figure>
            <span>{text}</span>
        </button>
    )
}