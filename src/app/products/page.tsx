import Navbar from "@/components/Navbar";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import Footer from "@/components/sections/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ProductShowcaseSection />
      </div>
      <Footer />
    </div>
  );
}
