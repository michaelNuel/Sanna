import React from "react";
import { locationstype } from "./GalleryCards";
import Image from "next/image";
import Carousel from "./Carousel";

interface Props {
  type: locationstype;
}

interface CarouselItemData {
  id: number;
  text: string;
}

interface CarouselItemProps {
  alt: string;
  title: string;
  description: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  alt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-1 mr-6 ml-6 px-5 py-4 bg-[#100a18]  rounded-2xl">
      <div className="h-[157px] w-[406px] bg-gray-400 my-4 rounded-2xl"></div>
      <h3 className="text-white font-bold mt-2">{title}</h3>
      <p className="text-gray-300 text-sm py-4">{description}</p>

      <div>
        <div className="flex gap-2">
          <div>
            <Image alt={"sol"} height={20} width={20} src={"/solana.svg"} />
          </div>
          <div>
            <p className="text-purple-600 font-medium text-sm ">
              $20000(0.3ETH)
            </p>
          </div>
        </div>
      </div>

      <div className={`mt-2  transition-opacity duration-[1500ms]`}>
        <button className="text-white text-sm bg-[#9747FF] px-8 py-3  rounded-3xl">
          Get NFT Here
        </button>
      </div>
    </div>
  );
};

const ArtCards = ({ type }: Props) => {
  const carouselItemsData: CarouselItemData[] = [
    { id: 1, text: "Innercity Mission" },
    { id: 2, text: "Innercity Mission" },
    { id: 3, text: "Innercity Mission" },
    { id: 4, text: "Innercity Mission" },
    { id: 5, text: "Innercity Mission" },
  ];
  return (
    <div>
      <div className="bg-[#100a18] mt-5 rounded-2xl">
        <div className="flex justify-center gap-7 mx-4 ">
          <div className="h-[357px] w-[606px] bg-gray-400 my-4 rounded-2xl"></div>

          <div className="flex w-[602px] flex-col gap-5 my-4">
            <div>
              <h3 className="text-white text-sm font-bold">
                Innercity Missions
              </h3>
            </div>

            <div>
              <h3 className="text-white text-xs font-normal opacity-70 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                enim voluptate magni, deserunt animi nesciunt rem illo possimus
                quas ipsum, cum culpa placeat. Quas ratione, libero adipisci
                dolorum rerum consequatur, modi hic vero iusto velit obcaecati
                earum ducimus? Repellat numquam minus quidem quas officiis,
                quisquam veritatis quam deleniti impedit pariatur ullam beatae
                aut est quis quasi aperiam ducimus, magnam quod sint eum autem
                placeat voluptate quae. Alias in expedita assumenda earum
                suscipit. Quidem voluptas similique iste quo, autem excepturi
                eius quis provident vel. Nemo voluptates magni officiis, quasi
                quisquam consequuntur, alias accusantium tempora, ullam
                excepturi itaque quae id ipsa aliquid?
              </h3>
            </div>

            <div>
              <h3 className="text-white text-xs font-normal opacity-20 leading-5">
                {type}
              </h3>
            </div>

            <div>
              <div className="flex gap-2">
                <div>
                  <Image
                    alt={"sol"}
                    height={20}
                    width={20}
                    src={"/solana.svg"}
                  />
                </div>
                <div>
                  <p className="text-purple-600 font-medium text-sm ">
                    $20000(0.3ETH)
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-2  transition-opacity duration-[1500ms]`}>
              <button className="text-white text-sm bg-[#9747FF] px-8 py-3  rounded-3xl">
                Get NFT Here
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-scroll scrollbar-hide mt-8">
        <div className="flex w-[200%] flex-col ">
          <Carousel items={carouselItemsData} />
        </div>
      </div>
    </div>
  );
};

export default ArtCards;
