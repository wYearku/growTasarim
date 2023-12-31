import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "Hızlı Teslimat",
      content:
        "7 gün 24 saat alış ve satış işlemleriniz anında gerçekleştirilir.",
      icon: "tabler:rocket",
    },
    {
      title: "Güvenli Alışveriş",
      content:
        "3D ve SSL güvencesiğle dilediğiniz ödeme yöntemini kullanabilirsiniz.",
      icon: "tabler:lock",
    },
    {
      title: "Uygun Fiyat",
      content:
        "Indirimil ve en uygun fiyatiaria alışverişin keyfini sizde çıkarın",
      icon: "tabler:thumb-up",
    },
    {
      title: "Müşteri Memnuniyeti",
      content: "Müşterilerimize kaliteli hizmet vermenin mutluluğunu yaşıyoruz",
      icon: "tabler:diamond",
    },
  ];

  const footerInformation = [
    {
      title: "GrowTasarım",
      materials: [
        {
          title: "Hakkımızda",
          href: "/about",
        },
        {
          title: "Oyunlar",
          href: "/oyunlar",
        },
        {
          title: "Hesap Numaraları",
          href: "/",
        },
        {
          title: "İletişim",
          href: "/",
        },
      ],
    },
    {
      title: "Popüler Oyunlar",
      materials: [
        {
          title: "Pubg",
          href: "/products/pubg",
        },
        {
          title: "Valorant",
          href: "/products/valorant",
        },
        {
          title: "Roblox",
          href: "/products/roblox",
        },
      ],
    },
    {
      title: "Bize Ulaşın",
      materials: [
        {
          title: "Facebook",
          href: "/",
        },
        {
          title: "Twitter",
          href: "/",
        },
        {
          title: "Instagram",
          href: "/",
        },
        {
          title: "Youtube",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div className="flex-1 flex items-end">
      <div className="flex flex-col">
        <div className="bg-[#1E2029] py-10 px-2">
          <div className="lg:w-[80%] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {footerData.map((data, i) => {
              const { title, content, icon } = data;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-14">
                    <div className="flex items-center justify-center !w-14 !h-14 rounded-full bg-black">
                      <Icon icon={icon} fontSize={35} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl">{title}</h4>
                    <p className="text-sm font-light break-words mt-1">
                      {content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#292B37] py-5">
          <div className="lg:w-[80%] mx-auto grid sm:grid-cols-3 gap-5 px-2">
            {footerInformation.map((data, i) => {
              const { title, materials } = data;

              return (
                <div key={i}>
                  <h4 className="border-b border-white pb-2 text-lg">
                    {title}
                  </h4>
                  <ul className="list-inside mt-2 font-light">
                    {materials.map((material, i) => {
                      const { title, href } = material;

                      return (
                        <Link key={i} href={href}>
                          <li className="w-fit ml-1">{title}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#3F4257] py-3 px-2">
          <div className="lg:w-[80%] mx-auto text-md:grid-cols-2 center">
            <p className="text-center">
              Copyright 2023 <span className="text-[#ffba08]">GrowTasarım</span>
              | Sitemizdeki yazı resim ve içeriklerin her hakkı saklıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
