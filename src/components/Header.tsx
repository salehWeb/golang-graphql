const List = () => {
    return (
        <>
            <li>
                <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#our-story">OUR STORY</a>
            </li>

            <li>
                <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#menu">MENU</a>
            </li>

            <li>
                <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#order">ORDER NOW</a>
            </li>

            <li>
                <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#gallery">GALLERY</a>
            </li>

            <li>
                <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#contact">CONTACT</a>
            </li>

            <li>
                <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#reviews">REVIEWS</a>
            </li>
        </>
    )
}

const Header = () => {
    return (
        <header className="flex flex-row justify-between py-2 z-50 text-gray-200 bg-transparent items-center w-full relative">
            <a href="#home" className="flex flex-col text-center">
                <img src="/logo.svg" alt="logo" className="lg:h-28 h-20" />
            </a>

            <ul className="hidden md:flex flex-row gap-4">
                <List />
            </ul>

            <div className="md:hidden flex items-center">
                <button id="menu-button" className="text-gray-200 flex flex-col justify-center items-center transition-all">
                    <span className="w-8 h-1 bg-gray-200 mb-1.5 transition-transform duration-300 ease-in-out"></span>
                    <span className="w-8 h-1 bg-gray-200 mb-1.5 transition-opacity duration-300 ease-in-out"></span>
                    <span className="w-8 h-1 bg-gray-200 transition-transform duration-300 ease-in-out"></span>
                </button>
            </div>

            <ul id="menu-list" className="bg-gray-800 shadow-lg absolute p-4 z-auto flex flex-col -right-96 top-20 transition-all duration-300 ease-in-out w-60 gap-8">
                <List />
            </ul>

        </header>
    )
}

export default Header;