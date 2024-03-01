"use client"
import {Input} from "@/components/ui/input";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useState, FormEvent } from "react";
import {Button} from "@/components/ui/button";

export default function SearchForm(){
    const router = useRouter();
    const [search, setSearch] = useState('')

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(search) {
            router.push(`/search/results/${search}`)
        }
        setSearch("")
    }



    return (
        <form className="py-2 flex gap-2 sticky top-[60px] bg-white dark:bg-neutral-950 z-10" onSubmit={handleSubmit}>
            <Input type="search" title="Search free pictures" required placeholder="Search free pictures..." value={search} onChange={(e)=>setSearch(e.target.value)} />
            <Button type="submit">Search</Button>
        </form>
    )
}