import Image from "next/image";
import React from "react";

const SocialMediaCard = ({ title, image, href }) => {
  return (
    <a href={href}>
      <div className="flex flex-col w-full h-54 xl:h-64 text-black rounded-2xl overflow-hidden">
        <Image width={1000000000} height={1000000000} src={image} className="h-44 xl:h-64 object-cover" />
      </div>
    </a>
  );
};

export default SocialMediaCard;