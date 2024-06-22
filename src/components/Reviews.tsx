import { GiCoffeeBeans } from "react-icons/gi"

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
        <div className="flex flex-col">
            <div className="justify-center items-center flex text-gray-200 flex-col">
                <h1 className="text-6xl">Reviews</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px w-20" />
                    <GiCoffeeBeans className="text-4xl" />
                    <hr className="h-px w-20" />
                </div>
            </div>

            <div className="flex overflow-x-auto w-screen px-8">
                <div className="flex w-auto gap-8 flex-row my-8">
                    {coffeeShopReviews.map((item, index) => (
                        <div key={index} className="text-xl p-4 text-center bg-gray-600 w-96 h-60 text-gray-100 flex flex-col items-center justify-between">
                            <h3>{item.name}</h3>
                            <p>{"\""}{item.quote}{"\""}</p>
                            <p>{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Reviews
