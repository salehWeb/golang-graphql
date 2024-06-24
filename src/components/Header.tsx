const Header = () => {
    return (
        <header className="flex flex-row justify-between py-2 z-10  text-gray-200 bg-transparent items-center w-full">
            <a href="#home" className="flex flex-col text-center">
            <img src="/logo.svg" alt="logo" className="h-28"/>
            </a>

            <ul className="flex flex-row gap-4">
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
            </ul>

        </header>
    )
}

export default Header;