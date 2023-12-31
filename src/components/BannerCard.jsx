import React from "react";

const BannerCard = ({ title, image, href }) => {
  return (
    <a href={href}>
      <div className="flex flex-col w-full h-72 bg-white text-black p-5 rounded-md"></div>
    </a>
  );
};

export default BannerCard;
