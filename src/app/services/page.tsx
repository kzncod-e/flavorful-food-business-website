import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/sections/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
