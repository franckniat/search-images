import {ArrowUpRight} from "lucide-react";

export default function AsideLink1() {
    return (
        <>
            <aside className="p-3 sticky top-[65px] w-[200px]">
                <h1 className="text-base font-medium py-2">Collections</h1>
                <ul className=" list-disc ml-6 flex flex-col gap-3 mt-1 text-sm">
                    <li>House</li>
                    <li>cats</li>
                    <li>Computer</li>
                    <li>Babies</li>
                </ul>
                <h1 className="text-base font-medium py-2 mt-1">Trends</h1>
                <ul className=" list-disc ml-6 flex flex-col gap-3 mt-1 text-sm">
                    <li>House</li>
                    <li>cats</li>
                    <li>Computer</li>
                    <li>Babies</li>
                </ul>
            </aside>
        </>
)
}