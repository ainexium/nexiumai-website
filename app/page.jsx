import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import Stack from "@/components/home/Stack";
import Product from "@/components/home/Product";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Stack />
      <Product />
      <FAQ />
      <Footer />
    </>
  );
}
