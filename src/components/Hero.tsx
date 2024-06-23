import { GiCoffeeBeans } from "react-icons/gi";
import Header from "./Header";
import { FaArrowUp } from "react-icons/fa";

const Hero = () => {
    return (
        <div id="home" className="w-full h-screen relative flex mb-20 justify-between flex-col">
            <div className="h-fit flex"><Header /></div>
            <div className='absolute w-full h-screen bg-black'>
                <img
                    alt="coffee beans"
                    src="/bg.png"
                    className='object-cover w-full h-screen opacity-40'
                />
            </div>

            <div className="flex flex-col text-gray-200 gap-4 z-10 justify-center items-center w-full h-full">
                <h1 className="text-6xl">The Espresso Haven Coffee Shop</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px w-20" />
                    <GiCoffeeBeans className="text-4xl" />
                    <hr className="h-px w-20" />
                </div>
                <p className="text-2xl">Come and enjoy our distinctive coffees in a warm, inviting atmosphere.</p>

                <a href="#order" className="bg-black py-4 px-8 hover:bg-transparent hover:outline-2 outline-0 text-xl outline hover:rounded-md transition-all">
                    Order Now
                </a>
            </div>

            <button
                id="up-button"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
                onClick={window.scrollToTop}
                className="fixed bottom-10 right-10 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition-all hidden z-50"
            >
                <FaArrowUp className="text-2xl" />
            </button>
        </div>
    )
}

export default Hero;
