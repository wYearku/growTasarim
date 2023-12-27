import DetailPage from '@/components/DetailPage';
import React from 'react'

const Lol = () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_MiK_XLthbkrh6xysLPjohx8aw6-BSbOJA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJquC4YqV_6O46_iKT6Hh1BpC_Be7mdCl-UyR0v329f__9lwDGoWJNH_Ujk7AXSN7YmQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzK-GXRsoUvJ8O_nuv0y5wGrTLYCKZa1FsE6bwPaX6kMx65iHuVuMgj0IMIPhS5kvMKs&usqp=CAU",
        
      ];
    
      const title = "League of Legends";
    
      const content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur, eaque repellat atque dolor maxime ipsam accusantium omnis quod praesentium. Repellat corrupti esse natus tempora ab. Et voluptatem ut,  ";
    
      const thumbnailBg =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutgHQzsZn-N2mAdPW2PkOooiHuJ_1zlO7Sw&usqp=CAU";

      const thumbnail =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfW73z0uEJ0giBbPOwrGFs-Xlk95fiYtCxQ&usqp=CAU";
    
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
    

export default Lol