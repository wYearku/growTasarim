import { Icon } from "@iconify/react";
import BannerCard from "./BannerCard";

const Banners = () => {
  const banners = [
    {
      title: "Instagram",
      image: "/img/banners/instagram.jpg",
      url: 'instagram'
    },
    {
      title: "Discord",
      image: "/img/banners/discord.jpg",
      url: 'discord'
    },
    {
      title: "Youtube",
      image: "/img/banners/youtube.jpg",
      url: 'youtube'
    },
  ];

  return (
    <div className="w-full lg:w-[80%] mx-auto py-10 px-2">
      <h2 className="mb-10 text-5xl font-bold flex items-center gap-3">
        <Icon icon="tabler:world" fontSize={48} /> Banner
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {banners.map((banner, index) => {
          const { title, image, url } = banner;

          return (
            <BannerCard key={index} title={title} image={image} url={url} />
          );
        })}
      </div>
    </div>
  );
};

export default Banners;
