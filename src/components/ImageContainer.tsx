import {Photo} from "@/models/Image";
import Image from "next/image";

type Props = {
    photo:Photo
}

export default function ImageContainer({photo}:Props){

    const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1
    return (
        <div className="w-[250px]" style={{gridRow: `span ${photoSpans}`}}>
            <div className="rounded-xl overflow-hidden group" >
                <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    width={250}
                    height={galleryHeight}
                    placeholder="blur"
                    blurDataURL={photo.blurredDataUrl}
                    className="group-hover:opacity-80"
                    sizes="250px"
                />
            </div>
        </div>
    )
}