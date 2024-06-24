import { GiCoffeeBeans } from "react-icons/gi"

const OurStory = () => {
    
    return (
        <div id="our-story" className="flex flex-col justify-center items-center relative h-screen px-10">
            <div className='absolute w-full h-screen  bg-black'>
                <img
                    alt="coffee"
                    src="/about-us-bg.jpg"
                    className='object-cover w-full h-screen opacity-40'
                />
            </div>



            <div className="bg-[rgba(0,0,0,0.9)] w-[800px] h-[600px] z-10  p-8 rounded-md text-gray-200 text-center justify-between flex flex-col">
                <div>
                    <h1 className="text-6xl">Our Story</h1>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <hr className="h-px w-20" />
                        <GiCoffeeBeans className="text-4xl" />
                        <hr className="h-px w-20" />
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

                <h2 className="text-4xl">
                    “Life Begins After Coffee”
                </h2>
            </div>
        </div>
    )
}

export default OurStory
