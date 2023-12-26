import { Icon } from "@iconify/react";
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
        "Hakkımızda",
        "Oyunlar",
        "Ödeme Yöntemleri",
        "Hesap Numaraları",
        "İletişim",
      ],
    },
    {
      title: "Kurumsal",
      materials: [
        "Üyelik Sözleşmesi",
        "Kullanım Koşulları",
        "Gizlilik Politikası",
        "Geri Ödeme Politikası",
        "K.V.K.K",
      ],
    },
    {
      title: "Popüler Oyunlar",
      materials: [
        "pubg mobile uc",
        "valorant points",
        "steam cüzdan kodu",
        "Yayıncı başvuru formu",
      ],
    },
    {
      title: "Bize Ulaşın",
      materials: ["Facebook", "Twitter", "Instagram", "Youtube"],
    },
  ];

  return (
    <div className="flex-1 flex items-end">
      <div className="flex flex-col mt-10">
        <div className="bg-[#1E2029] py-10 px-2">
          <div className="lg:w-[80%] mx-auto grid lg:grid-cols-4 gap-4">
            {footerData.map((data) => {
              const { title, content, icon } = data;
              return (
                <div className="flex items-start gap-3">
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
          <div className="lg:w-[80%] mx-auto grid lg:grid-cols-4 gap-5 px-2">
            {footerInformation.map((data) => {
              const { title, materials } = data;

              return (
                <div>
                  <h4 className="border-b border-white pb-2">{title}</h4>
                  <ul className="list-disc list-inside mt-4">
                    {materials.map((material) => (
                      <li>{material}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#3F4257] py-3 px-2">
          <div className="lg:w-[80%] mx-auto text-center">
            <p>
              Copyright 2023 <span className="text-black">Ödepin</span> |
              Sitemizdeki yazı resim ve içeriklerin her hakkı saklıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
