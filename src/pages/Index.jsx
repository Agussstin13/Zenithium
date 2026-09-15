import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "../components/myComponents/WhatsAppButton";

export default function Index() {
  <div className="site-shell min-h-screen">
    <Navigation />
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </main>
    <WhatsAppButton />
    <Footer />
  </div>
}