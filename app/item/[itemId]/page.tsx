import Footer from "@/components/Footer/Footer";
import AboutMusuem from "@/components/ItemsPage/AbourMusuem/AboutMusuem";
import ItemsAbout from "@/components/ItemsPage/ItemsAbout/ItemsAbout";
import ItemsHeroPage from "@/components/ItemsPage/ItemsHeroPage/ItemsHeroPage";
import WhyDonate from "@/components/ItemsPage/WhyDonate/WhyDonate";
import React from "react";

const Item = async () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#43305d] to-[#06030A]">
      <ItemsHeroPage />
      <ItemsAbout />
      <AboutMusuem />
      <WhyDonate />
      <Footer />
    </div>
  );
};

export default Item;
