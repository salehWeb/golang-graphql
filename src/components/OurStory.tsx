import { GiCoffeeBeans } from "react-icons/gi"

const OurStory = () => {

    return (
        <div id="our-story" className="flex flex-col justify-center items-center h-[800px] relative sm:h-screen lg:px-10 md:px-8 sm:px-6 px-4">
            <div className='absolute w-full sm:h-screen  bg-black'>
                <img
                    alt="coffee"
                    src="/about-us-bg.webp"
                    className='object-cover w-full h-[800px] sm:h-screen opacity-40'
                />
            </div>

            <div className="bg-[rgba(0,0,0,0.9)] lg:w-[800px] lg:h-[600px] rounded-3xl w-full z-10 md:p-8 sm:p-4 p-2 text-gray-200 text-center justify-between flex flex-col">
                <div>
                    <h1 className="md:text-6xl text-4xl">Our Story</h1>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <hr className="h-px md:w-20 w-16" />
                        <GiCoffeeBeans className="md:text-4xl text-3xl" />
                        <hr className="h-px md:w-20 w-16" />
                    </div>

                </div>
                <p className="text-center">
                    Welcome to Espresso Haven, a beloved coffee shop founded by Isabella Martinez in 2005. Nestled in the heart of Maplewood, we are dedicated to offering our community a premium coffee experience. Our mission is to provide exceptional, globally sourced beans, expertly crafted by our skilled baristas to deliver a perfect cup every time.
                    <br />
                    <br />
                    Located in the vibrant core of Maplewood, Espresso Haven is more than just a place to enjoy extraordinary coffee; it's a community hub where creativity and camaraderie thrive. Our cozy and inviting atmosphere, paired with a warm and friendly staff, makes every visit special. Whether you're stopping by for a morning pick-me-up, an afternoon chat, or an evening unwind, we ensure a memorable experience.
                    <br />
                    <br />
                    Our menu boasts a diverse selection of coffee blends, assorted drinks, and delectable treats made with the finest ingredients. From freshly baked pastries to savory breakfast and lunch options, we cater to all your cravings. Join us at Espresso Haven, where each sip and bite brings you closer to the heart of Maplewood's vibrant spirit.
                </p>

                <h2 className="md:text-4xl text-2xl">
                    “Life Begins After Coffee”
                </h2>
            </div>
        </div>
    )
}

export default OurStory
