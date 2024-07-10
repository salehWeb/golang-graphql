import { GiCoffeeBeans } from "react-icons/gi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const coffeeShopReviews = [
    {
        name: "Emma Johnson",
        quote: "The coffee here is just perfect — rich flavor without being too bitter. The cozy ambiance makes it my go-to spot for catching up with friends.",
        date: "June 10, 2024"
    },
    {
        name: "Mark Thompson",
        quote: "Love the latte art! They really pay attention to detail here. It's clear they take pride in their craft.",
        date: "May 25, 2024"
    },
    {
        name: "Sophie Chen",
        quote: "The staff is always friendly and remembers my order. It feels like a second home to me!",
        date: "June 5, 2024"
    },
    {
        name: "Robert Garcia",
        quote: "This place has the best pastries to pair with their coffee. It's my guilty pleasure every weekend.",
        date: "April 17, 2024"
    },
    {
        name: "Olivia Patel",
        quote: "As a freelancer, I appreciate the reliable Wi-Fi and comfortable seating. Perfect for getting work done.",
        date: "June 20, 2024"
    },
    {
        name: "Daniel Brown",
        quote: "I'm a coffee snob, and this place meets my high standards. They roast their beans to perfection.",
        date: "May 3, 2024"
    },
    {
        name: "Hannah Miller",
        quote: "Their seasonal drinks are always a hit! I love trying their new flavors — they never disappoint.",
        date: "July 18, 2023"
    },
    {
        name: "William Lee",
        quote: "Great atmosphere and the coffee is consistently good. It's my daily morning ritual before work.",
        date: "May 3, 2024"
    }
];


const Reviews = () => {
    return (
        <div id="reviews" className="flex flex-col justify-center items-center relative h-screen lg:px-10 md:px-8 sm:px-6 px-4">
            <div className='absolute w-full h-screen bg-black'>
                <img
                    alt="coffee"
                    src="/reviews.webp"
                    className='object-cover w-full h-screen opacity-40'
                />
            </div>


            <div className="flex flex-col z-10 gap-10">
                <div className="justify-center items-center flex text-gray-200 flex-col">
                    <h1 className="md:text-6xl text-4xl">Reviews</h1>
                    <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px md:w-20 w-16" />
                        <GiCoffeeBeans className="md:text-4xl text-3xl" />
                        <hr className="h-px md:w-20 w-16" />
                    </div>
                </div>

                <div className="flex flex-row justify-between gap-8 items-center">
                    <IoIosArrowBack id="review-go-back" className="text-6xl text-gray-200 cursor-pointer sm:flex hidden" />

                    <div id="scroll-container" className="2xl:!w-[calc((2*16px)+(3*350px))] lg:!w-[calc((16px)+(2*350px))] !w-[350px] overflow-x-auto hide-scroll-bar">
                        <div id="total-container" className="flex flex-row !w-[calc((6*16px)+(8*350px))] gap-4 items-center">
                            {coffeeShopReviews.map((review, index) => (
                                <div key={index} id={`review-${index}`} className="flex flex-col text-gray-200 !w-[350px] h-80 bg-[rgba(0,0,0,0.9)] shadow-md px-12 justify-between items-center rounded-3xl py-8">
                                    <h4 className="text-xl italic">- {review.name} -</h4>
                                    <h6 className="text-lg text-center">"{review.quote}"</h6>
                                    <p className="italic text-lg text-center">{review.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <IoIosArrowForward id="review-go-forward" className="text-6xl text-gray-200 cursor-pointer sm:flex hidden" />
                </div>


            </div>

        </div>
    )
}


export default Reviews;
