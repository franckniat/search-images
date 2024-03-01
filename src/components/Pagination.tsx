import Link from "next/link";
import {clsx} from 'clsx'
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

type Props = {
    topic:string,
    page: string | undefined,
    nextPage: string | null,
    prevPage: string | null
}

export default function Pagination({topic, page, nextPage, prevPage}:Props){
    if(!nextPage && !prevPage) return <h1>salut</h1>

    const pageNums : number[] = []
    if(prevPage && nextPage){
        for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++){
            pageNums.push(i)
        }
    }
    const nextPageArea = nextPage
        ? (
            <Link href={`search/results/${topic}/${nextPage}`} >
                <Button className="flex items-center gap-3">{!prevPage ? 'More': ""} <ArrowRight size={20}/></Button>
            </Link>
        ):null

    const prevPageArea = prevPage
        ? (
            <>
                <Link href={`search/results/${topic}/${prevPage}`} className={clsx(!nextPage?"mx-auto":"", "flex gap-2")}>
                     {!nextPage ? 'Back': ""}<ArrowLeft/>
                </Link>
                {pageNums.map(num =>(
                    page && num === parseInt(page)
                    ? num : (
                            <Link key={num.toString()} href={`search/results/${topic}/${num}`} className="underline">
                                {num.toString()}
                            </Link>
                        )
                ))}
            </>
        ):null

    return(
        <div className="flex gap-5 justify-center items-center px-2 py-5 ">
            {prevPageArea}
            {nextPageArea}
        </div>
    )

}