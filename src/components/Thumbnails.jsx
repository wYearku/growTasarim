import React from "react";
import ThumbnailCard from "./ThumbnailCard";

const Thumbnails = () => {
  const thumbnails = [
    {
      title: "Pubg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoS4PJfdYw-ByEqXy4abinVoWsqXKsVtD2haG7BpmNxvcELudR1L459YahfK4B3zqvAY&usqp=CAU",
      content: "PUBG THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "pubg",
    },
    {
      title: "Valorant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KiwUyi0AlWF3DZj4J72ZSGcm_KEZdjuA_Q&usqp=CAU",
      content: "VALORANT THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "valorant",
    },
    {
      title: "LOL",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWf29xOp9i7W-OXWpfiDvIE-xa_318v7Gjyg&usqp=CAU",
      content: "LOL THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "lol",
    },
    {
      title: "Cs-Go",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSC-bvtMTQyMGfOoyf4-2bil4EABI36b9bg&usqp=CAU",
      content: "CS-GO THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "cs_go",
    },
  ];

  return (
    <div className="bg-[#292B37]">
      <div className="lg:w-[80%] mx-auto py-10 px-2">
        <h2 className="border-b-2 border-white pb-2 mb-10 text-5xl font-bold">
          Thumbnails
        </h2>
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
    </div>
  );
};

export default Thumbnails;
