import Image from "next/image";
import Link from "next/link";
import React from "react";
import Chip from "./Chip";

const ThumbnailCard = ({
  image,
  title,
  url,
  populer,
}) => {
  return (
    <div
      className={`flex flex-col w-[300px] h-[410px] relative group text-black rounded-xl overflow-hidden ${
        populer ? "rainbow" : ""
      } p-1`}
    >
      {populer ? (
        <Chip
          text="popüler"
          className={"absolute z-10 top-1 sm:top-4 left-1 sm:left-5 "}
        />
      ) : null}
      <Link href={`/products/${url}`}>
        <Image
          width={10000000}
          height={10000000}
          src={image}
          className="!w-full !h-[100%] object-cover group-hover:scale-110 transition-all rounded-lg duration-300 ease-in-out"
        />
        <div className="px-4 ml-[-4px] bg-[#1E2029] w-[105%] bg-opacity-80 py-2 absolute bottom-0 text-white translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out  ">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default ThumbnailCard;
