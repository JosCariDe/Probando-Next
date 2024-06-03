import DownArrow from "@/assets/react/DownArrow";
import LeftArrow from "@/assets/react/LeftArrow";

export default function Line1(){
    return (
        <div className="flex flex-row items-center justify-between w-full gap-2 hover:bg-gray-200 px-2 py-1.5 rounded-md">
            <button className="flex flex-row items-center gap-2 text-gray-400 hover:text-gray-800 w-[85%]">
                <figure className="rounded-sm px-1.5 py-0.5 bg-gray-300 flex items-center">
                    <span className="text-black text-xs">J</span>
                </figure>
                <span
                    className="font-serif text-black font-light text-sm max-w-[80%] overflow-hidden overflow-ellipsis text-nowrap">Juan Camilo Zuniga Pacheco</span>
                <figure className="w-4 h-4">
                    <DownArrow/>
                </figure>
            </button>
            <button className="hover:bg-gray-300 p-1.5 rounded-sm">
                <figure className="w-3 h-3">
                    <LeftArrow/>
                </figure>
            </button>
        </div>
    )
}