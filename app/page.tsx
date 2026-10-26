import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import EatSip from "./components/EatSip";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Contact from "./components/Contact";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <EatSip />
        <MenuSection />
        <About />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}
