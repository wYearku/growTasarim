import DetailPage from "@/components/DetailPage";
import React, { useEffect, useState } from "react";

const ProductPage = ({ product }) => {
  const [pageData, setPageData] = useState(null);

  const data = [
    {
      title: "Pubg",
      url: "pubg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBSlpJcziOtj7tkwMjK06v8FWAIpQ9USsgQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa176KuxCa9Q9Do1cVJXhXF0K31vmBiT1Umg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2fBxTgro0yFMIGUXa-d4y5hjAGijp5HNeg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBKMWOyYxv9ZvtX3UPUxTpArd3uYwuEh32w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnhA1xypgJMtuz7QlkGi6xxPCqBNwViVQSw&usqp=CAU",
      ],
      content:
        "Birbirinden eşsiz pubg tasarımlarını keşfet ve satın al. Unutma! En fazla 3 Saat içinde teslimat garantisi.",
      subContent: "NOT : Satın alma işleminden sonra sosyal medyalarımızdan bize ulaşmayı unutma.",
      thumbnailBg:
        "https://img.chip.com.tr/rcman/Cw940h529q95gm/images/content/2019/03/18/2019031810105117585.jpg",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoS4PJfdYw-ByEqXy4abinVoWsqXKsVtD2haG7BpmNxvcELudR1L459YahfK4B3zqvAY&usqp=CAU",
      populer: true,
    },
    {
      title: "League of Legends",
      url: "lol",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_MiK_XLthbkrh6xysLPjohx8aw6-BSbOJA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJquC4YqV_6O46_iKT6Hh1BpC_Be7mdCl-UyR0v329f__9lwDGoWJNH_Ujk7AXSN7YmQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzK-GXRsoUvJ8O_nuv0y5wGrTLYCKZa1FsE6bwPaX6kMx65iHuVuMgj0IMIPhS5kvMKs&usqp=CAU",
      ],
      content:
        "Birbirinden eşsiz league of legends tasarımlarını keşfet ve satın al. Unutma! En fazla 3 Saat içinde teslimat garantisi.",
      subContent: "NOT : Satın alma işleminden sonra sosyal medyalarımızdan bize ulaşmayı unutma.",
      thumbnailBg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutgHQzsZn-N2mAdPW2PkOooiHuJ_1zlO7Sw&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfW73z0uEJ0giBbPOwrGFs-Xlk95fiYtCxQ&usqp=CAU",
      populer: false,
    },
    {
      title: "Valorant",
      url: "valorant",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KiwUyi0AlWF3DZj4J72ZSGcm_KEZdjuA_Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oH4xtyhGISr2g1pThkELggB_bkHK8V-S1Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUXaP7_crpW4Ggg5jlPY-ZYPD3yQjm2QoXqtiHV0o5VDi--SLxlwFMtLR4aZB9w7f24s&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSfjp4-YBhC_hCnqlN-Ixd7R32aA_OZqi-dz5HDhLMNdMVwlAevwkjYXsBwQuqg8xCZk&usqp=CAU",
      ],
      content:
        "Birbirinden eşsiz valorant tasarımlarını keşfet ve satın al. Unutma! En fazla 3 Saat içinde teslimat garantisi.",
      subContent: "NOT : Satın alma işleminden sonra sosyal medyalarımızdan bize ulaşmayı unutma.",
      thumbnailBg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkSq8q8dRNO_9Yo0MVonuSBcx0l20cV-y0Q&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo901H0Z68LBPVJlcvg35hBr4-SMb-0IXUbw&usqp=CAU",
      populer: true,
    },
    {
      title: "Cs Go",
      url: "cs-go",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB98X-y-zEqTfVN-p6Y7Td7zVSlK0gOQbhtH7EImkawzn8Tg3_6Sa5FRgWJ3988vlabaY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLRddGd3XKnGqGdkYfxLoTZ6Ffv6C01H1EQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDo9ye5t_82hNawq5YnzLOjTdwgCopwJMpXA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0k2-oveBDvYvDq-JN4120un07yNY8GZayQ&usqp=CAU",
      ],
      content:
        "Birbirinden eşsiz cs go tasarımlarını keşfet ve satın al. Unutma! En fazla 3 Saat içinde teslimat garantisi.",
      subContent: "NOT : Satın alma işleminden sonra sosyal medyalarımızdan bize ulaşmayı unutma.",
      thumbnailBg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2SyVc-Osw0R1EGCUZzN3rux4Wp48xu-wyQ&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHacYQqWZJy38WfEdxPzt0G49IJAC5YfD0-w&usqp=CAU",
      populer: false,
    },
  ];

  useEffect(() => {
    const pageData = data.find((item) => item.url === product);
    setPageData(pageData);
  }, []);

  return (
    <div className="mt-[153px] mb-10">
      <DetailPage
        title={pageData?.title}
        content={pageData?.content}
        subContent={pageData?.subContent}
        images={pageData?.images}
        thumbnail={pageData?.thumbnail}
        thumbnailBg={pageData?.thumbnailBg}
        populer={pageData?.populer}
      />
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps(context) {
  const { product } = context.params;

  return {
    props: {
      product,
    },
  };
}
