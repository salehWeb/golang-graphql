import { GiCoffeeBeans } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa";
import Header from "./Header";

const Hero = () => {
    return (
        <div id="home" className="flex flex-col items-center relative h-screen lg:px-10 md:px-8 sm:px-6 px-4 mb-20">
            <div className="absolute w-full h-screen bg-black">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url('/bg.png')` }}
                >
                </div>
            </div>



            <Header />
            <div className="flex flex-col text-gray-200 gap-4 z-10 justify-center items-center w-full h-full">
                <h1 className="md:text-6xl text-4xl text-center">The Espresso Haven Coffee Shop</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px md:w-20 w-16" />
                    <GiCoffeeBeans className="md:text-4xl text-3xl" />
                    <hr className="h-px md:w-20 w-16" />
                </div>
                <p className="md:text-2xl text-xl text-center">Come and enjoy our distinctive coffees in a warm, inviting atmosphere.</p>

                <a href="#order" className="bg-black md:py-4 md:px-8 py-2 px-4 hover:bg-transparent hover:outline-2 outline-0 md:text-xl text-lg outline hover:rounded-md transition-all">
                    Order Now
                </a>
            </div>

            <button
                id="up-button"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                onClick={window.scrollToTop}
                className="fixed bottom-10 right-10 p-3 bg-black text-white rounded-md shadow-lg hover:bg-gray-700 transition-all hidden z-50"
            >
                <FaArrowUp className="text-2xl" />
            </button>
        </div>
    )
}

export default Hero;
