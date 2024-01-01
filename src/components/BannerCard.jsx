import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerCard = ({ title, image, url }) => {
  return (
    <Link href={`/products/${url}`}>
      <div className="flex flex-col w-full h-64 bg-white text-black rounded-2xl overflow-hidden">
      </div>
    </Link>
  );
};

export default BannerCard;
