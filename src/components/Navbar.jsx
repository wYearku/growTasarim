import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="sticky h-0 top-0 z-50">
      <div className="bg-[#3A3C47]">
        <nav className="px-6 xl:w-[80%] mx-auto text-white flex flex-wrap justify-between items-center py-2 lg:py-5 font-medium">
          <div className="flex justify-between items-center flex-1">
            <Link href="/" className="flex text-lg font-semibold">
              <Image
                src={"/img/grow-logo.png"}
                width={250}
                height={50}
                className="w-44 md:!w-64 xl:w-72 object-contain"
                alt="grow logo"
              />
            </Link>
          </div>
          <svg
            className={`fill-current text-gray-white lg:hidden cursor-pointer`}
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <nav className={`lg:flex hidden flex-2`}>
            <ul
              className={`text-xl text-center items-center gap-x-5 pt-4 md:gap-x-7 lg:text-lg lg:flex lg:pt-0`}
            >
              <li className="py-2 lg:py-0 ">
                <Link
                  className=" hover:pb-4 hover:border-b-4 hover:border-white"
                  href={"/"}
                >
                  Ana Menü
                </Link>
              </li>
              <li className="py-2 lg:py-0 ">
                <Link
                  className=" hover:pb-4 hover:border-b-4 hover:border-white"
                  href="/products"
                >
                  Tüm Ürünler
                </Link>
              </li>
              <li className="py-2 lg:py-0 ">
                <Link
                  className=" hover:pb-4 hover:border-b-4 hover:border-white"
                  href="/about"
                >
                  Hakkımızda
                </Link>
              </li>
              {/* <li className="py-2 lg:py-0 ">
              <Link
              className=" hover:pb-4 hover:border-b-4 hover:border-white"
              href="designs"
              >
              Designs
              </Link>
            </li> */}
              <li className="py-2 lg:py-0 ">
                <Link
                  className=" hover:pb-4 hover:border-b-4 hover:border-white"
                  href="/comments"
                >
                  Müşterilerimiz
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`lg:flex gap-5 items-center justify-end hidden flex-1`}>
            <a href="https://instagram.com" target="_blank">
              <Icon icon="tabler:brand-instagram" fontSize={25} />
            </a>
            <a href="https://discord.com" target="_blank">
              <Icon icon="tabler:brand-discord" fontSize={25} />
            </a>
          </div>
        </nav>
        <nav
          className={`${
            navbarOpen ? "h-64" : "h-0"
          } overflow-hidden transition-all bg-[#3A3C47] lg:hidden font-medium`}
        >
          <ul
            className={`text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0`}
          >
            <li className="py-2 lg:py-0 ">
              <Link
                className="hover:pb-2 hover:border-b-4 hover:border-white"
                href="/"
              >
                Ana Menü
              </Link>
            </li>
            <li className="py-2 lg:py-0 ">
              <Link
                className=" hover:pb-2 hover:border-b-4 hover:border-white"
                href="/products"
              >
                Tüm Ürünler
              </Link>
            </li>
            <li className="py-2 lg:py-0 ">
              <Link
                className=" hover:pb-2 hover:border-b-4 hover:border-white"
                href="/about"
              >
                Hakkımızda
              </Link>
            </li>
            {/* <li className="py-2 lg:py-0 ">
            <Link
            className=" hover:pb-2 hover:border-b-4 hover:border-white"
            href="/designs"
            >
            Designs
            </Link>
          </li> */}
            <li className="py-2 lg:py-0 ">
              <Link
                className=" hover:pb-4 hover:border-b-4 hover:border-white"
                href="/comments"
              >
                Müşterilerimiz
              </Link>
            </li>
            <li className="py-2 lg:py-0 flex gap-5 items-center justify-center my-2">
              <a href="https://instagram.com" target="_blank">
                <Icon icon="tabler:brand-instagram" fontSize={25} />
              </a>
              <a href="https://discord.com" target="_blank">
                <Icon icon="tabler:brand-discord" fontSize={25} />
              </a>
            </li>
          </ul>
        </nav>
        <div className="bg-[#1E2029] px-2 duyuru-container">
          <div className="horizontal-scrolling-items flex gap-10">
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim. Hemen alışverişe başla!
            </p>
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim. Hemen alışverişe başla!
            </p>
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim. Hemen alışverişe başla!
            </p>
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim. Hemen alışverişe başla!
            </p>
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim. Hemen alışverişe başla!
            </p>
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim. Hemen alışverişe başla!
            </p>
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim. Hemen alışverişe başla!
            </p>
            <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
              Duyuru <Icon icon="tabler:bell-ringing" /> GrowTasarım.com{"'"}da
              Yılbaşına özel Tüm Ürünlerde %15 indirim .  Hemen alışverişe başla!
            </p>
            {/* <p className="flex gap-2 items-center justify-center py-1 text-sm horizontal-scrolling-items__item">
            Duyuru <Icon icon="tabler:bell-ringing" /> hesaplanmızda
            indirimlerimiz sizlerle !! Ayrıca sitemizde herhangi bir sorun
            yaşarsanız mesai saatlerimiz içerisinde en hızlı şekilde canlı
            destek ekibimizden geri dönüş alabilirsiniz
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
