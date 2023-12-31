import React from "react";
import BannerCard from "./BannerCard";

const SocialMedia = () => {
  const SocialMedia = [
    {
      title: "Instagram",
      image: "/img/socialmedia/instagram_growtasarim.jpg",
      href: "",
    },
    {
      title: "Instagram",
      image: "/img/socialmedia/instagram_growtasarim.jpg",
      href: "",
    },
    {
      title: "Instagram",
      image: "/img/socialmedia/instagram_growtasarim.jpg",
      href: "",
    },
  ];

  return (
    <div className="lg:w-[80%] mx-auto py-10 px-2">
      <div className="grid justify-center md:grid-cols-3 gap-4">
        {SocialMedia.map((media, index) => {
          const { title, image, href } = media;

          return (
            <BannerCard key={index} title={title} image={image} href={href} />
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
