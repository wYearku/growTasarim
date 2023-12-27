import DetailPage from "@/components/DetailPage";
import React from "react";

const CsGo = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB98X-y-zEqTfVN-p6Y7Td7zVSlK0gOQbhtH7EImkawzn8Tg3_6Sa5FRgWJ3988vlabaY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLRddGd3XKnGqGdkYfxLoTZ6Ffv6C01H1EQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDo9ye5t_82hNawq5YnzLOjTdwgCopwJMpXA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0k2-oveBDvYvDq-JN4120un07yNY8GZayQ&usqp=CAU",
  ];

  const title = "Cs Go";

  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur, eaque repellat atque dolor maxime ipsam accusantium omnis quod praesentium. Repellat corrupti esse natus tempora ab. Et voluptatem ut,  ";

  const thumbnailBg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2SyVc-Osw0R1EGCUZzN3rux4Wp48xu-wyQ&usqp=CAU";
  const thumbnail =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHacYQqWZJy38WfEdxPzt0G49IJAC5YfD0-w&usqp=CAU";

  return (
    <div className="mt-[153px] mb-10">
      <DetailPage
        title={title}
        content={content}
        images={images}
        thumbnail={thumbnail}
        thumbnailBg={thumbnailBg}
      />
    </div>
  );
};

export default CsGo;
