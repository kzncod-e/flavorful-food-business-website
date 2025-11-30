import Navbar from "@/components/Navbar";
import AppDownloadSection from "@/components/sections/AppDownloadSection";
import Footer from "@/components/sections/Footer";

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AppDownloadSection />
      </div>
      <Footer />
    </div>
  );
}
