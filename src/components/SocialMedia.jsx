import React from "react";
import SocialMediaCard from "./SocialMediaCard";

const SocialMedia = () => {
  const SocialMedia = [
    {
      title: "Instagram",
      image: "/img/socialmedia/instagram_growtasarim.jpg",
      href: "",
    },
    {
      title: "discord",
      image: "/img/socialmedia/discord_growtasarim.jpg",
      href: "",
    },
    {
      title: "youtube",
      image: "/img/socialmedia/youtube_growtasarim.jpg",
      href: "",
    },
  ];

  return (
    <div className="bg-[#1D2029]">
      <div className="lg:w-[80%] mx-auto py-10 px-2">
        <div className="grid justify-center md:grid-cols-3 gap-4">
          {SocialMedia.map((media, index) => {
            const { title, image, href } = media;

            return (
              <SocialMediaCard
                key={index}
                title={title}
                image={image}
                href={href}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
