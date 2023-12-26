import DetailPage from "@/components/DetailPage";
import React from "react";

const Pubg = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBSlpJcziOtj7tkwMjK06v8FWAIpQ9USsgQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa176KuxCa9Q9Do1cVJXhXF0K31vmBiT1Umg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2fBxTgro0yFMIGUXa-d4y5hjAGijp5HNeg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBKMWOyYxv9ZvtX3UPUxTpArd3uYwuEh32w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnhA1xypgJMtuz7QlkGi6xxPCqBNwViVQSw&usqp=CAU",
  ];

  const title = "Pubg";

  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur, eaque repellat atque dolor maxime ipsam accusantium omnis quod praesentium. Repellat corrupti esse natus tempora ab. Et voluptatem ut,  ";

  const thumbnailBg =
    "https://img.chip.com.tr/rcman/Cw940h529q95gm/images/content/2019/03/18/2019031810105117585.jpg";

  const thumbnail =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoS4PJfdYw-ByEqXy4abinVoWsqXKsVtD2haG7BpmNxvcELudR1L459YahfK4B3zqvAY&usqp=CAU";

  return (
    <div className="mt-[153px]">
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

export default Pubg;
