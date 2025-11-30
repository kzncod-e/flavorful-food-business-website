import Navbar from "@/components/Navbar";
import JoinUsSection from "@/components/sections/JoinUsSection";
import Footer from "@/components/sections/Footer";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <JoinUsSection />
      </div>
      <Footer />
    </div>
  );
}
