import { GiCoffeeBeans } from "react-icons/gi";

const tea = [
    {
        name: "Black Tea",
        description: "Strong and robust black tea, perfect for any time of day.",
        img: "items/blacktea_1.5 1.png",
        price: "$3.00"
    },
    {
        name: "Green Tea",
        description: "Fresh and healthy green tea with a delicate flavor.",
        img: "items/Green_tea_recipe_1.5 1.png",
        price: "$3.00"
    },
    {
        name: "Herbal Tea",
        description: "Caffeine-free herbal blends for relaxation.",
        img: "items/Herbal_Tea_1.5 1.png",
        price: "$3.50"
    },
    {
        name: "Iced Tea",
        description: "Refreshing cold tea, available in various flavors.",
        img: "items/island-iced-tea_1.5 1.png",
        price: "$3.00"
    },
    {
        name: "Chai Latte",
        description: "Spiced tea with steamed milk and a hint of sweetness.",
        img: "items/Chai-Latte_1.5 1.png",
        price: "$4.00"
    }
];

const pastries = [
    {
        name: "Bagel",
        description: "Toasted bagel with cream cheese or butter.",
        img: "items/bagels_1.5 1.png",
        price: "$2.00"
    },
    {
        name: "Brownie",
        description: "Rich and fudgy chocolate brownie.",
        img: "items/Brownie_1.5 1.png",
        price: "$2.50"
    },
    {
        name: "Croissant",
        description: "Flaky and buttery pastry, perfect with coffee.",
        img: "items/croissants_1.5 1.png",
        price: "$2.50"
    },
    {
        name: "Muffin",
        description: "Soft and moist, available in various flavors.",
        img: "items/Muffin_1.5 1.png",
        price: "$2.50"
    },
    {
        name: "Scone",
        description: "Light and crumbly, served with jam and cream.",
        img: "items/scones-jam-cream_1.5 1.png",
        price: "$2.50"
    }
];

const coffee = [
    {
        name: "Americano",
        description: "Espresso with hot water, creating a light cream.",
        img: "items/Americano_1.5 1.png",
        price: "$3.50"
    },
    {
        name: "Latte",
        description: "Smooth espresso with steamed milk and a light layer of foam.",
        img: "items/caffe-latte_1.5 1.png",
        price: "$4.50"
    },
    {
        name: "Cappuccino",
        description: "Espresso with steamed milk, chocolate syrup, and whipped cream.",
        img: "items/cappuccino_1.5 1.png",
        price: "$4.00"
    },
    {
        name: "Espresso",
        description: "A rich and intense shot of coffee.",
        img: "items/espresso_1.5 1.png",
        price: "$3.00"
    },
    {
        name: "Mocha",
        description: "Espresso with steamed milk, chocolate syrup, and whipped cream.",
        img: "items/mocha_1.5 1.png",
        price: "$5.00"
    }
];

const Menu = () => {
    return (
        <div id="menu" className="flex w-full flex-col gap-10 px-10">
            <div className="justify-center items-center flex text-gray-200 flex-col">
                <h1 className="text-6xl">Explore Our Menu</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px w-20" />
                    <GiCoffeeBeans className="text-4xl" />
                    <hr className="h-px w-20" />
                </div>
            </div>

            <div className="w-full grid grid-cols-3">
                <div className="flex items-center justify-center flex-col text-gray-200 gap-4">
                    <h2 className="text-4xl">Coffee</h2>
                    <div className="flex flex-col gap-8">
                        {coffee.map((item, index) => (
                            <Item {...item} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col text-gray-200 gap-4">
                    <h2 className="text-4xl">Tea</h2>
                    <div className="flex flex-col gap-8">
                        {tea.map((item, index) => (
                            <Item {...item} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col text-gray-200 gap-4">
                    <h2 className="text-4xl">Pastries</h2>
                    <div className="flex flex-col gap-8">
                        {pastries.map((item, index) => (
                            <Item {...item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;


const Item = (props: typeof coffee[0]) => {
    return (
        <div className="flex flex-col rounded-3xl text-gray-200  bg-black overflow-hidden w-[400px] h-[400px] justify-between">
            <img src={props.img} alt="" />
            <div className="flex flex-col gap-2 p-4">
                <div className="flex text-2xl flex-row gap-8">
                    <h3>{props.name}</h3>
                    <span>{props.price}</span>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
