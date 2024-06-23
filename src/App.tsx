import OurStory from "./components/OurStory"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Order from "./components/Order"
import Reviews from "./components/Reviews"

function App() {
    return (
        <div className="bg-[#232323] flex flex-col">
            <Hero />
            <main className="flex flex-col gap-20">
                <OurStory />
                <Menu />
                <Order />
                <Gallery />
                <Contact />
                <Reviews />
            </main>
            <Footer />
        </div>
    )
}

export default App;