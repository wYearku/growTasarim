import React from "react";
import ThumbnailCard from "./ThumbnailCard";

const Thumbnails = () => {
  const thumbnails = [
    {
      title: "Pubg",
      image: "/img/12",
      content: "PUBG THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: 'pubg'
    },
    {
      title: "Valorant",
      image: "/img/12",
      content: "VALORANT THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: 'valorant'
    },
    {
      title: "LOL",
      image: "/img/12",
      content: "LOL THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: 'lol'
    },
    {
      title: "Cs-Go",
      image: "/img/12",
      content: "CS-GO THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: 'cs_go'
    },
  ];

  return (
    <div className="lg:w-[80%] mx-auto py-10 px-2">
      <h2 className="border-b-2 border-white pb-2 mb-10 text-5xl">Thumbnails</h2>
      <div className="grid lg:grid-cols-4 gap-4">
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
  );
};

export default Thumbnails;
