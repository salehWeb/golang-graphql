import { GiCoffeeBeans } from "react-icons/gi"

const Gallery = () => {
    return (
        <div id="gallery" className="flex flex-col px-10">
            <div className="justify-center items-center flex text-gray-200 flex-col">
                <h1 className="text-6xl">Gallery</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px w-20" />
                    <GiCoffeeBeans className="text-4xl" />
                    <hr className="h-px w-20" />
                </div>
            </div>

            <div className="gap-8 grid grid-cols-4 my-8">
                {Array.from({ length: 8 }).map((_, item) => (
                    <Item item={item + 1} key={item} />
                ))}
            </div>
        </div>
    )
}

export default Gallery;



const Item = (props: { item: number }) => {
    return (
        <>
            <div className="flex flex-col">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <a href={"#modal" + props.item} className="cursor-pointer" onClick={() => window.openModal('modal' + props.item)}>
                    <img src={`/gallery/${props.item}.webp`} className="rounded-lg shadow-md hover:shadow-lg transition duration-300" />
                </a>
            </div>

            <div id={"modal" + props.item} className="fixed top-0 left-0 bg-modal w-full h-full bg-black bg-opacity-50 items-center justify-center hidden">
                <img src={`/gallery/${props.item}.webp`} className="!h-[80vh] object-contain rounded-lg shadow-lg" />
            </div>
        </>
    )
}
