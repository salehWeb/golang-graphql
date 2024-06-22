import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Order from "./components/Order"
import Reviews from "./components/Reviews"

function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col">
                <Hero />
                <div className="bg-[#232323] gap-20 py-16 flex flex-col">
                    <AboutUs />
                    <Menu />
                    <Order />
                    <Gallery />
                    <Reviews />
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App
