const Header = () => {
    return (
        <header className="flex flex-row justify-between px-10 py-2  text-gray-200 bg-transparent absolute top-0 items-center w-full">
            <a href="#home" className="flex flex-col text-center">
            <img src="/logo.svg" alt="logo" className="h-28"/>
            </a>

            <ul className="flex flex-row gap-4">
                <li className="nav-item">
                    <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#">HOME</a>
                </li>

                <li className="nav-item">
                    <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#">OUR STORY</a>
                </li>

                <li className="nav-item">
                    <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#">MENU</a>
                </li>

                <li className="nav-item">
                    <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#">ORDER NOW</a>
                </li>

                <li className="nav-item">
                    <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#">GALLERY</a>
                </li>

                <li className="nav-item">
                    <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#">REVIEWS</a>
                </li>

                <li className="nav-item">
                    <a className="after:bg-gray-200 after:h-px hover:after:w-full after:w-0 transition-all after:transition-all after:block" href="#">CONTACT</a>
                </li>

            </ul>

        </header>
    )
}

export default Header
