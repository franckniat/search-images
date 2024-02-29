import {ArrowUpRight} from "lucide-react";

export default function AsideLink2() {
    return (
        <>
            <aside className="p-4 sticky top-[65px] hidden md:block max-w-[180px]">
                <h1 className="text-base font-medium py-2">Image Generator</h1>
                <p className="text-sm mt-2">You can generate an image with AI</p>
                <a target="_blank" href="https://imgenerator.vercel.app"
                   className="flex items-center gap-1 text-sm underline text-primary mt-2 w-fit">Let{"'"}s try
                    here
                    <ArrowUpRight size={15}/>
                </a>
            </aside>
        </>
    )
}