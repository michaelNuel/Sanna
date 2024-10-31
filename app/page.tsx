import AboutUs from "@/components/AboutUs/AboutUs";
import ArtGallarryPage from "@/components/ArtGallary/ArtGallarryPage";
import ArtSection from "@/components/ArtGallary/ArtSection";
import Footer from "@/components/Footer/Footer";
import HeroPage from "@/components/HeroPage/HeroPage";
import Patners from "@/components/Patners/Patners";


export default function Home() {
  return (
    <div className="bg-PrimaryColor scrollable-div h-screen">
      <HeroPage />
      <ArtGallarryPage />
      <ArtSection />
      <AboutUs />
      <Patners />
      <Footer />
    </div>
  );
}
