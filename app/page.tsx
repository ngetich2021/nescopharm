import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
     <Navbar/>
     <div id="home">
       <Hero/>
     </div>
     <div id="products">
       <Products/>
     </div>
     <div id="about">
       <About/>
     </div>
     <Footer/>
    </main>
  );
}