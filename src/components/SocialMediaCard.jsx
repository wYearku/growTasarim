import Image from "next/image";
import React from "react";

const SocialMediaCard = ({ title, image, href }) => {
  return (
    <a href={href}>
      <div className="rounded-2xl">
        <Image width={1000000000} height={1000000000} src={image} />
      </div>
    </a>
  );
};

export default SocialMediaCard;