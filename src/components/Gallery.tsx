import fetchImages from "@/lib/fetchImages";
import {ImagesResults} from "@/models/Image";
import ImageContainer from "@/components/ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import getPrevNextPages from "@/lib/getPrevNextPages";
import Pagination from "@/components/Pagination";


type Props = {
    topic ?:string | undefined
    page ?:string | undefined
}
export default async function Gallery({topic = "curated", page}:Props){
    let url
        if(topic === "curated" && page){
            url = `https://api.pexels.com/v1/curated?page=${page}`
        }else if(topic === "curated"){
            url = `https://api.pexels.com/v1/curated`
        }else if(!page){
            url = `https://api.pexels.com/v1/search?query=${topic}`
        }else{
            url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
        }
    const images : ImagesResults | undefined = await fetchImages(url)

    if(!images || images?.per_page === 0) return (
        <div className="text-2xl font-medium">
            <h2>No images found ...</h2>
        </div>
    )

    const photosWithBlur = await addBlurredDataUrls(images)
    const {nextPage, prevPage} = getPrevNextPages(images)
    const paginationProps = { topic, page,nextPage, prevPage }
    return(
        <>
            <section className="grid grid-cols-gallery auto-rows-[10px] relative">
                {photosWithBlur.map(photo => (
                    <ImageContainer key={photo.id} photo={photo}/>
                ))}
            </section>
            <Pagination topic={topic} page={page} nextPage={nextPage} prevPage={prevPage}/>
        </>

    )
}