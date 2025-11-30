import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}