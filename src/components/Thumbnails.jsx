import React from "react";
import ThumbnailCard from "./ThumbnailCard";
import { Icon } from "@iconify/react";

const Thumbnails = () => {
  const thumbnails = [
    {
      title: "Pubg",
      image:
        "/img/pubg_1.jpg",
      content: "PUBG THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "pubg",
    },
    {
      title: "Valorant",
      image:
        "/img/valorant_1.jpg",
      content: "VALORANT THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "valorant",
    },
    {
      title: "LOL",
      image:
        "/img/lol_1.png",
      content: "LOL THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "lol",
    },
    {
      title: "Cs-Go",
      image:
        "/img/CS_GO_1.png",
      content: "CS-GO THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "cs-go",
    },
    {
      title: "Fortnite",
      image:
        "/img/fortnite_1.png",
      content: "Fortnite Thumbnail",
      price: "99.90",
      oldPrice: "149.90",
      url: "fortnite",
    },
    {
      title: "GTA V",
      image:
        "/img/gtav_1.png",
      content: "GTA V Thumbnail",
      price: "99.90",
      oldPrice: "149.90",
      url: "gta-v",
    },
    // {
    //   title: "İnstagram Arkaplan",
    //   content: "Arka Planını Değiştir!",
    //   image: "/img/product-1.png",
    //   price: "99.99",
    //   discount: "60",
    //   url: "instagram_arkaplan",
    // },
    // {
    //   title: "Nesne Değiştirme",
    //   content: "Doğum Tarihini",
    //   image: "/img/product-1.png",
    //   price: "99.99",
    //   discount: "nesne_degistirme",
    // },
    // {
    //   title: "Lorem",
    //   content: "Lorem Ipsum Dolor Sit Amet",
    //   image: "/img/product-1.png",
    //   price: "99.99",
    //   discount: "60",
    // },
  ];

  return (
    <div className="bg-[#1E2029]">
      <div className="lg:w-[80%] mx-auto py-10 px-2">
        <h2 className="mb-10 text-5xl font-bold flex items-center gap-3"><Icon icon="tabler:stack-2" fontSize={48} /> Ürünler</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
          {thumbnails.map((thumbnail, index) => {
            const { title, image, content, price, oldPrice, url } = thumbnail;

            return (
              <ThumbnailCard
                key={index}
                title={title}
                image={image}
                content={content}
                price={price}
                oldPrice={oldPrice}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
