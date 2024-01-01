import Image from "next/image";
import React from "react";

const BannerCard = ({ title, image, href }) => {
  return (
    <a href={href}>
      <div className="flex flex-col w-full h-64 bg-white text-black rounded-2xl overflow-hidden">
      </div>
    </a>
  );
};

export default BannerCard;
