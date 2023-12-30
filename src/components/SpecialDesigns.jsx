import React from "react";
import DesigngCard from "./DesigngCard";
import { Icon } from "@iconify/react";

const SpecialDesigns = () => {
  const designs = [
    {
      title: "İnstagram Arkaplan",
      content: "Arka Planını Değiştir!",
      image: "/img/product-1.png",
      price: "99.99",
      discount: "60",
    },
    {
      title: "Nesne Değiştirme",
      content: "Doğum Tarihini",
      image: "/img/product-1.png",
      price: "99.99",
      discount: "60",
    },
    {
      title: "Lorem",
      content: "Lorem Ipsum Dolor Sit Amet",
      image: "/img/product-1.png",
      price: "99.99",
      discount: "60",
    },
  ];

  return (
    <div>
      <div className="lg:w-[80%] mx-auto py-10 px-2">
        <h2 className="mb-10 text-5xl font-bold flex items-center gap-3">
          <Icon icon="tabler:world" fontSize={48} />
          Sosyal <span className="text-[#ffba08]">Medya</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-4">
          {designs.map((design, index) => {
            const { title, content, image, price, discount } = design;

            return (
              <DesigngCard
                key={index}
                title={title}
                content={content}
                image={image}
                price={price}
                discount={discount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialDesigns;
