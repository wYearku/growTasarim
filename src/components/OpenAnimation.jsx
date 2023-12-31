import Image from "next/image";
import React, { useEffect, useState } from "react";

const OpenAnimation = () => {
  const [pageLoad, setPageLoad] = useState(true);
  const [pageHidden, setPageHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoad(false);
    }, 500);
    setTimeout(() => {
      setPageHidden(true);
    }, 1000);
  }, []);

  if (pageHidden) return;

  return (
    <div
      className={`fixed top-0 w-[100vw] h-[100vh] z-[99999999] flex items-center justify-center bg-[#1E2029] duration-700 ${
        pageLoad ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        width={500}
        height={100}
        src={"/img/grow-logo.png"}
        className="w-[300px] md:w-[500px] h-[100px] object-contain"
      />
    </div>
  );
};

export default OpenAnimation;
