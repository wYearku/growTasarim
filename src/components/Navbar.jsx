import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="sticky h-0 top-0 z-50">
      <nav className="lg:px-32 px-6 bg-[#3A3C47] text-white shadow-lg flex flex-wrap justify-between items-center lg:py-5 py-2 ">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex text-lg font-semibold">
            <Image
              src={"/img/grow-logo.png"}
              width={170}
              height={50}
              className="object-contain"
              alt="Rz Codes Logo"
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
        <nav className={`lg:flex hidden`}>
          <ul
            className={`text-xl text-center items-center gap-x-5 pt-4 md:gap-x-7 lg:text-lg lg:flex lg:pt-0`}
          >
            <li className="py-2 lg:py-0 ">
              <Link
                className=" hover:pb-4 hover:border-b-4 hover:border-white"
                href={'/'}
              >
                Ana Menü
              </Link>
            </li>
            <li className="py-2 lg:py-0 ">
              <Link
                className=" hover:pb-4 hover:border-b-4 hover:border-white"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="py-2 lg:py-0 ">
              <Link
                className=" hover:pb-4 hover:border-b-4 hover:border-white"
                href="designs"
              >
                Designs
              </Link>
            </li>
            <li className="py-2 lg:py-0 ">
              <Link
                className=" hover:pb-4 hover:border-b-4 hover:border-white"
                href="/comments"
              >
                Müşteri Yorumları
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`lg:flex gap-5 items-center justify-center hidden`}>
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
          navbarOpen ? "h-80" : "h-0"
        } overflow-hidden transition-all bg-[#3A3C47] lg:hidden`}
      >
        <ul
          className={`text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0`}
        >
          <li className="py-2 lg:py-0 ">
            <Link
              className=" hover:pb-2 hover:border-b-4 hover:border-white"
              href="/"
            >
              Ana Menü
            </Link>
          </li>
          <li className="py-2 lg:py-0 ">
            <Link
              className=" hover:pb-2 hover:border-b-4 hover:border-white"
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="py-2 lg:py-0 ">
            <Link
              className=" hover:pb-2 hover:border-b-4 hover:border-white"
              href="/designs"
            >
              Designs
            </Link>
          </li>
          <li className="py-2 lg:py-0 ">
            <Link
              className=" hover:pb-4 hover:border-b-4 hover:border-white"
              href="/comments"
            >
              Müşteri Yorumları
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
      <div className="bg-[#292B37] px-2">
        <p className="flex gap-2 items-center justify-center py-1 text-sm ">Duyuru <Icon icon='tabler:bell-ringing'/> hesaplanmızda indirimlerimiz sizlerle !! Ayrıca sitemizde herhangi bir sorun yaşarsanız mesai saatlerimiz içerisinde en hızlı şekilde canlı destek ekibimizden geri dönüş alabilirsiniz</p>
      </div>
    </div>
  );
};

export default Navbar;
