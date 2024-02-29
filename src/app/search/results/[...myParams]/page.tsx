import Gallery from "@/components/Gallery";

type Props = {
    params:{
        myParams:(string|undefined)[]
    }
}

export function generateMetadata({params:{myParams}}:Props){
    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"
    return{
        title:`Results for ${topic} - Page ${page}`
    }
}
export default function SearchResults({params:{myParams}}:Props){
    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"
    return (
        <main className="pt-[70px] max-w-[1400px] mx-auto px-3">
            <section className="flex items-start">
                <div className="flex-1">
                    <div className="px-3 py-2">
                        <h1 className="text-xl font-bold mt-3">Results</h1>
                        <p className="mt-3">Here are the results of {myParams}</p>
                        <Gallery topic={topic} page={page}/>
                    </div>
                </div>
            </section>
        </main>


    )
}