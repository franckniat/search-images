import type {ImagesResults} from "@/models/Image";
import {ImagesSchemaWithPhotos} from "@/models/Image";

export default async function fetchImages(url:string):Promise<ImagesResults|undefined>{
    try {
        const res = await fetch(url,{
            headers:{
                Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY as string
            }
        })
        if(!res.ok) throw new Error("Fetch Images Error! \n")

        const imagesResults : ImagesResults = await res.json()

        const parseData = ImagesSchemaWithPhotos.parse(imagesResults)
        if(parseData.total_results === 0) return undefined

        return parseData

    } catch (e){
        console.log(e)
    }
}