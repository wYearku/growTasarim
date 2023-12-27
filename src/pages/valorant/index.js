import DetailPage from "@/components/DetailPage";
import React from "react";

const Valorant = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KiwUyi0AlWF3DZj4J72ZSGcm_KEZdjuA_Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oH4xtyhGISr2g1pThkELggB_bkHK8V-S1Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUXaP7_crpW4Ggg5jlPY-ZYPD3yQjm2QoXqtiHV0o5VDi--SLxlwFMtLR4aZB9w7f24s&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSfjp4-YBhC_hCnqlN-Ixd7R32aA_OZqi-dz5HDhLMNdMVwlAevwkjYXsBwQuqg8xCZk&usqp=CAU",
  ];

  const title = "Valorant";

  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur, eaque repellat atque dolor maxime ipsam accusantium omnis quod praesentium. Repellat corrupti esse natus tempora ab. Et voluptatem ut,  ";

  const thumbnailBg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkSq8q8dRNO_9Yo0MVonuSBcx0l20cV-y0Q&usqp=CAU";
  const thumbnail =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo901H0Z68LBPVJlcvg35hBr4-SMb-0IXUbw&usqp=CAU";

  return (
    <div className="mt-[153px] mb-10">
      <DetailPage
        title={title}
        content={content}
        images={images}
        thumbnail={thumbnail}
        thumbnailBg={thumbnailBg}
      />
    </div>
  );
};

export default Valorant;
