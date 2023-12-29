import Image from "next/image";
import React from "react";

const DesigngCard = ({ title, content, image, price, discount }) => {
  return (
    <div className="relative flex flex-col group cursor-pointer text-black rounded-xl overflow-hidden">
      <Image
        width={10}
        height={10}
        src={image}
        className="!w-full !h-72 object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
      />
      <div className="px-4 flex justify-between items-center bg-[#1E2029] w-full bg-opacity-80 py-2 absolute bottom-0 text-white translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out  ">
        <p>{title}</p>
        <div className="flex gap-3 text-lg items-center">
          <p>₺{price}</p>
          <p className="line-through text-sm text-gray-600">%{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default DesigngCard;
