
interface Props{
    title: string;
    children: React.ReactNode;
}

export default function Section({title, children}: Props){
    return(
        <div
            className="flex flex-col items-center justify-between w-full py-1.5 text-sm text-gray-600 font-serif font-medium">
            <span className="w-full text-lg text-left text-gray-600 font-extralight px-1.5">{title}</span>
            {children}
        </div>
    )

}