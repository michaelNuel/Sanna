import AboutMusuem from "@/components/ItemsPage/AbourMusuem/AboutMusuem";
import ItemsAbout from "@/components/ItemsPage/ItemsAbout/ItemsAbout";
import ItemsHeroPage from "@/components/ItemsPage/ItemsHeroPage/ItemsHeroPage";
import WhyDonate from "@/components/ItemsPage/WhyDonate/WhyDonate";
import React from "react";

interface ItemProps {
  params: {
    itemId: string;
  };
}

const Item = async ({ params }: ItemProps) => {
  // Ensure you await if params are async
  const { itemId } = await params;

  return (
    <div className="h-full w-full bg-gradient-to-r from-[#43305d] to-[#06030A]">
      <ItemsHeroPage />
      <ItemsAbout/>
      <AboutMusuem />
      <WhyDonate />
    </div>
  );
};

export default Item;
