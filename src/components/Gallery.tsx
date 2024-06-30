/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GiCoffeeBeans } from "react-icons/gi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Gallery = () => {
    return (
        <div id="gallery" className="flex flex-col lg:px-10 md:px-8 sm:px-6 px-4">
            <div className="justify-center items-center flex text-gray-200 flex-col">
                <h1 className="md:text-6xl text-4xl">Gallery</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px md:w-20 w-16" />
                    <GiCoffeeBeans className="md:text-4xl text-3xl" />
                    <hr className="h-px md:w-20 w-16" />
                </div>
            </div>

            <div className="gap-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols my-8" id="gallery-items-container">
                {Array.from({ length: 8 }).map((_, item) => (
                    <Item item={item + 1} key={item} />
                ))}
            </div>

            <div id="bg-modal" className="fixed gap-8 top-0 left-0 w-full h-full bg-black bg-opacity-50 items-center justify-center hidden">
                <div className="!h-[80vh] flex flex-col justify-center">
                    <IoIosArrowBack id="gallery-prev" className="text-6xl text-gray-200 cursor-pointer" />
                </div>

                <img id="gallery-img" className="!w-[70vw] object-contain rounded-lg shadow-lg" />

                <div className="!h-[80vh] flex flex-col justify-center relative">
                    <IoClose id="gallery-close" className="text-6xl text-gray-200 cursor-pointer absolute top-0" />
                    <IoIosArrowForward id="gallery-next" className="text-6xl text-gray-200 cursor-pointer" />
                </div>
            </div>

        </div>
    )
}

export default Gallery;



const Item = (props: { item: number }) => {
    return (
        <div className="flex flex-col">
            <div className="lg:cursor-pointer">
                <img src={`/gallery/${props.item}.webp`} id={`GALLERY_${props.item}`} className="rounded-lg shadow-md hover:shadow-lg transition duration-300" />
            </div>
        </div>
    )
}
