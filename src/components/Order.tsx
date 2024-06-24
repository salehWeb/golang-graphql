import { GiCoffeeBeans } from "react-icons/gi"

const Order = () => {
    return (
        <div id="order" className="flex flex-col px-10">
            <div className="justify-center items-center flex text-gray-200 flex-col">
                <h1 className="text-6xl">Order Now</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr className="h-px w-20" />
                    <GiCoffeeBeans className="text-4xl" />
                    <hr className="h-px w-20" />
                </div>

                <p className="text-2xl w-[600px] text-center my-8">Choose your preferred delivery service and get our delicious coffee and pastries delivered to your door.</p>
            </div>



            <div className="gap-4 flex flex-row justify-center items-center">
                <a href="UBER_EATS_LINK" className="p-4 rounded-lg shadow-md hover:shadow-lg flex justify-center items-center bg-gray-200 w-[200px] h-[60px]">
                    <img className="w-40" src="deliveryIcons/ubereats.svg" alt="Order on Uber Eats" />
                </a>

                <a href="DOORDASH_LINK" className="p-4 rounded-lg shadow-md hover:shadow-lg flex justify-center items-center bg-gray-200 w-[200px] h-[60px]">
                    <img className="w-40" src="deliveryIcons/doordash.svg" alt="Order on DoorDash" />
                </a>

                <a href="GRUBHUB_LINK" className="p-4 rounded-lg shadow-md hover:shadow-lg flex justify-center items-center bg-gray-200 w-[200px] h-[60px]">
                    <img className="w-40" src="deliveryIcons/grubhub.svg" alt="Order on Grubhub" />
                </a>
            </div>
        </div>
    )
}

export default Order
