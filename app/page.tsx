import ArtGallarryPage from "@/components/ArtGallary/ArtGallarryPage";
import HeroPage from "@/components/HeroPage/HeroPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-PrimaryColor scrollable-div h-screen">
      <HeroPage />
      <ArtGallarryPage />
    </div>
  );
}