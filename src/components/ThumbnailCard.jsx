import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThumbnailCard = ({ image, title, content, price, oldPrice, url }) => {

  return (
    <div className="flex flex-col bg-white text-black p-5 rounded-md">
      <Image width={10} height={10} src={image} className="!w-full !h-32 bg-blue-600" />
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-2xl mt-5">{content}</p>
      <div className="flex gap-3 text-xl items-center mt-5">
        <p>₺{price}</p>
        <p className="line-through text-sm text-gray-600">₺{oldPrice}</p>
      </div>
      <Link href={`/${url}`}>
      <button className="bg-[#FFBA08] mx-auto mt-10 px-7 py-1.5 hover:bg-[#d59d0d] transition-colors text-lg rounded-md text-white">
        Buy Now
      </button>
      </Link>
    </div>
  );
};

export default ThumbnailCard;
