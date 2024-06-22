import { GiCoffeeBeans } from "react-icons/gi";

const Hero = () => {
    return (
        <div className="w-full h-screen">
            <div className='absolute w-full h-screen -z-10 bg-black'>
                <img
                    alt="coffee beans"
                    src="/bg.png"
                    className='object-cover w-full h-screen opacity-40'
                />
            </div>

            <div className="flex flex-col text-gray-200 gap-4 justify-center items-center w-full h-full">
                <h1 className="text-6xl">The Espresso Haven Coffee Shop</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px w-20" />
                    <GiCoffeeBeans className="text-4xl"/>
                    <hr className="h-px w-20" />
                </div>
                <p className="text-2xl">Come and enjoy our distinctive coffees in a warm, inviting atmosphere.</p>
                
                <a href="#order" className="bg-black py-4 px-8 hover:bg-transparent hover:outline-2 outline-0 text-xl outline hover:rounded-md transition-all">
                    Order Now
                </a>
            </div>
        </div>
    )
}

export default Hero
