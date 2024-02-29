import SearchForm from "@/components/Search";
import {clsx} from "clsx";
import Gallery from "@/components/Gallery";

type Props = {
    params:{
        query:string
    }
}

export default function Search({params:{query}}:Props){
    return (
        <main className="pt-[70px] max-w-[1400px] mx-auto px-3">
            <div className="px-3 py-2">
                <h1 className="text-2xl font-bold mt-3">Search pictures</h1>
                <p className="mt-3 mb-6">Find every things you want.</p>
                <Gallery />
            </div>
        </main>




)
}



