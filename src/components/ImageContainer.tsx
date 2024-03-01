import {Photo} from "@/models/Image";
import Image from "next/image";
import {Download} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

type Props = {
    photo:Photo
}

export default function ImageContainer({photo}:Props){

    const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1
    return (
                <div className="w-[250px]" style={{gridRow: `span ${photoSpans}`}}>
                    <div className={`rounded-xl overflow-hidden group relative shadow-xl shadow-[${photo.avg_color}]`}>
                        <Image
                            src={photo.src.large}
                            alt={photo.alt}
                            width={250}
                            height={galleryHeight}
                            placeholder="blur"
                            blurDataURL={photo.blurredDataUrl}
                            sizes="250px"
                            className={` transition transform group-hover:scale-105 group-hover:shadow-3xl group-hover:z-10`}
                        />
                        <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition">
                            <div className={`p-2 bg-white dark:bg-neutral-950 rounded-r-md shadow-lg px-3`}>
                                <h2 className="text-sm">Photographer : </h2>
                                <a href={photo.photographer_url} target="_blank">
                                    <h3 className="text-sm font-bold">{photo.photographer}</h3>
                                </a>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                            <Link href={photo.src.large} download={photo.alt}>
                                <Button size="icon" variant="secondary">
                                    <Download size={20}/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}