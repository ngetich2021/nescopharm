// app/page.tsx   (App Router)   OR   pages/index.tsx (Pages Router)

import About from "@/components/About";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Form";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      {/* Navbar is OUTSIDE the <main> so it can be fixed/sticky if you want */}
      {/* <Navbar /> */}

      {/* The actual page content */}
      <main>
        {/* Hero is now rendered ONLY ONCE */}
        <section id="home">
          <Hero />
        </section>
         {/* <section id="form">
          <ContactForm/>
        </section> */}

        <section id="products">
          <Products />
        </section>

        <section id="about">
          <About />
        </section>
         <section id="footer">
          <Footer />
        </section>
      </main>
      

      {/* <Footer /> */}
    </>
  );
}