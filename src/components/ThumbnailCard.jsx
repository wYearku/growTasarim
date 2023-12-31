import Image from "next/image";
import Link from "next/link";
import React from "react";
import Chip from "./Chip";

const ThumbnailCard = ({
  image,
  title,
  content,
  price,
  oldPrice,
  url,
  populer,
}) => {
  return (
    <div className="flex flex-col relative group text-black rounded-xl overflow-hidden mx-auto">
      {populer ? (
        <Chip text="popüler" className={"absolute z-10 top-2 left-4"} />
      ) : null}
      <Link href={`/products/${url}`}>
        <Image
          width={10000000}
          height={10000000}
          src={image}
          className="!w-full !h-[400px] object-cover group-hover:scale-110 transition-all rounded-xl duration-300 ease-in-out"
        />
        <div className="px-4 bg-[#1E2029] w-full bg-opacity-80 py-2 absolute bottom-0 text-white translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out  ">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default ThumbnailCard;
