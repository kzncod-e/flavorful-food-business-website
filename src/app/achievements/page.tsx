import Navbar from "@/components/Navbar";
import AchievementsSection from "@/components/sections/AchievementsSection";
import Footer from "@/components/sections/Footer";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AchievementsSection />
      </div>
      <Footer />
    </div>
  );
}
