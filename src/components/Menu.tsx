import { GiCoffeeBeans } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const tea = [
    {
        name: "Black Tea",
        description: "Strong and robust black tea, perfect for any time of day.",
        img: "items/blacktea.webp",
        price: "$3.00"
    },
    {
        name: "Green Tea",
        description: "Fresh and healthy green tea with a delicate flavor.",
        img: "items/Green_tea_recipe.webp",
        price: "$3.00"
    },
    {
        name: "Herbal Tea",
        description: "Caffeine-free herbal blends for relaxation.",
        img: "items/Herbal_Tea.webp",
        price: "$3.50"
    },
    {
        name: "Iced Tea",
        description: "Refreshing cold tea, available in various flavors.",
        img: "items/island-iced-tea.webp",
        price: "$3.00"
    },
    {
        name: "Chai Latte",
        description: "Spiced tea with steamed milk and a hint of sweetness.",
        img: "items/Chai-Latte.webp",
        price: "$4.00"
    },
    {
        name: "Oolong Tea",
        description: "Smooth and fragrant, a perfect balance of flavor.",
        img: "items/oolong-tea.webp",
        price: "$3.50"
    },
    {
        name: "Matcha",
        description: "Vibrant green tea powder whisked to perfection.",
        img: "items/matcha.webp",
        price: "$4.50"
    }
];

const pastries = [
    {
        name: "Bagel",
        description: "Toasted bagel with cream cheese or butter.",
        img: "items/bagels.webp",
        price: "$2.00"
    },
    {
        name: "Brownie",
        description: "Rich and fudgy chocolate brownie.",
        img: "items/Brownie.webp",
        price: "$2.50"
    },
    {
        name: "Croissant",
        description: "Flaky and buttery pastry, perfect with coffee.",
        img: "items/croissants.webp",
        price: "$2.50"
    },
    {
        name: "Muffin",
        description: "Soft and moist, available in various flavors.",
        img: "items/Muffin.webp",
        price: "$2.50"
    },
    {
        name: "Scone",
        description: "Light and crumbly, served with jam and cream.",
        img: "items/scones.webp",
        price: "$2.50"
    },
    {
        name: "Danish",
        description: "Sweet pastry with a fruity or creamy filling.",
        img: "items/danish.webp",
        price: "$3.00"
    },
    {
        name: "Cinnamon Roll",
        description: "Soft, sweet roll with cinnamon and icing.",
        img: "items/cinnamon-roll.webp",
        price: "$3.00"
    }
];

const coffee = [
    {
        name: "Americano",
        description: "Espresso with hot water, creating a light cream.",
        img: "items/Americano.webp",
        price: "$3.50"
    },
    {
        name: "Latte",
        description: "Smooth espresso with steamed milk and a light layer of foam.",
        img: "items/caffe-latte.webp",
        price: "$4.50"
    },
    {
        name: "Cappuccino",
        description: "Espresso with steamed milk, chocolate syrup, and whipped cream.",
        img: "items/cappuccino.webp",
        price: "$4.00"
    },
    {
        name: "Espresso",
        description: "A rich and intense shot of coffee.",
        img: "items/espresso.webp",
        price: "$3.00"
    },
    {
        name: "Mocha",
        description: "Espresso with steamed milk, chocolate syrup, and whipped cream.",
        img: "items/mocha.webp",
        price: "$5.00"
    },
    {
        name: "Affogato",
        description: "Espresso poured over a scoop of vanilla ice cream.",
        img: "items/affogato.webp",
        price: "$4.50"
    },
    {
        name: "Macchiato",
        description: "Espresso marked with a small amount of steamed milk.",
        img: "items/macchiato.webp",
        price: "$3.50"
    }
];


const Menu = () => {
    return (
        <div id="menu" className="flex w-full flex-col gap-10 lg:px-10 md:px-8 sm:px-6 px-4">
            <div className="justify-center items-center flex text-gray-200 flex-col">
                <h1 className="md:text-6xl text-4xl">Explore Our Menu</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px md:w-20 w-16" />
                    <GiCoffeeBeans className="md:text-4xl text-3xl" />
                    <hr className="h-px md:w-20 w-16" />
                </div>
            </div>

            <div className="w-full grid grid-rows-3 gap-20">

                <div className="flex flex-col overflow-x-hidden md:gap-8 gap-4">
                    <h2 className="md:text-5xl text-3xl text-gray-200 md:ml-20">Coffee</h2>
                    <div className="w-full flex flex-row items-center md:gap-8 gap-4">
                        <div className="menu-prev lg:text-6xl md:text-5xl text-4xl sm:flex hidden text-gray-200 cursor-pointer">
                            <IoIosArrowBack />
                        </div>
                        <div className="flex flex-col overflow-x-auto gap-8 hide-scroll-bar">
                            <div className="flex w-fit text-gray-200 flex-row gap-8 justify-center items-center">
                                {coffee.map((item, index) => (
                                    <Item {...item} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="menu-next lg:text-6xl md:text-5xl text-4xl sm:flex hidden text-gray-200 cursor-pointer">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col overflow-x-hidden md:gap-8 gap-4">
                    <h2 className="md:text-5xl text-3xl text-gray-200 md:ml-20">Tea</h2>
                    <div className="w-full flex flex-row items-center md:gap-8 gap-4">
                        <div className="menu-prev lg:text-6xl md:text-5xl text-4xl sm:flex hidden text-gray-200 cursor-pointer">
                            <IoIosArrowBack />
                        </div>
                        <div className="flex flex-col overflow-x-auto gap-8 hide-scroll-bar">
                            <div className="flex w-fit text-gray-200 flex-row gap-8 justify-center items-center">
                                {tea.map((item, index) => (
                                    <Item {...item} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="menu-next lg:text-6xl md:text-5xl text-4xl sm:flex hidden text-gray-200 cursor-pointer">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col overflow-x-hidden md:gap-8 gap-4">
                    <h2 className="md:text-5xl text-3xl text-gray-200 md:ml-20">Pastries</h2>
                    <div className="w-full flex flex-row items-center md:gap-8 gap-4">
                        <div className="menu-prev lg:text-6xl md:text-5xl text-4xl sm:flex hidden text-gray-200 cursor-pointer">
                            <IoIosArrowBack />
                        </div>
                        <div className="flex flex-col overflow-x-auto gap-8 hide-scroll-bar">
                            <div className="flex w-fit text-gray-200 flex-row gap-8 justify-center items-center">
                                {pastries.map((item, index) => (
                                    <Item {...item} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="menu-next lg:text-6xl md:text-5xl text-4xl sm:flex hidden text-gray-200 cursor-pointer">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Menu;


const Item = (props: typeof coffee[0]) => {
    return (
        <div className="flex flex-col rounded-3xl text-gray-200  bg-black overflow-hidden !w-[300px] !h-[350px] gap-4">
            <img src={props.img} alt="" />
            <div className="flex flex-col gap-2 p-4">
                <div className="flex text-2xl flex-row">
                    <h3 className="flex-1 text-start">{props.name}</h3>
                    <span className="text-end">{props.price}</span>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
