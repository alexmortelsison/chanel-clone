import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import React from "react";
import Link from "next/link";

const iconLinks = [
  { icon: <BiSearch />, link: "/" },
  { icon: <BsPerson />, link: "/" },
  { icon: <AiOutlineStar />, link: "/" },
  { icon: <AiOutlineShopping />, link: "/" },
];

const navMenu = [
  { name: "Haute Couture", link: "/" },
  { name: "Fashion", link: "/" },
  { name: "High Jewelry", link: "/" },
  { name: "Fine Jewelry", link: "/" },
  { name: "Watches", link: "/" },
  { name: "Eyewear", link: "/" },
  { name: "Fragrance", link: "/" },
  { name: "Makeup", link: "/" },
  { name: "Skincare", link: "/" },
  { name: "About Chanel", link: "/" },
];

export default function Navbar() {
  return (
    <div className="flex-col flex max-w-[1300px] mx-auto font-couture">
      <div className="bg-white flex justify-between pt-8 ">
        <div className=""></div>
        <div>
          <h1 className="font-couture tracking-widest text-4xl">CHANEL</h1>
        </div>
        <div className="space-x-4 items-center inline-flex">
          {iconLinks.map((item, index) => (
            <div key={index}>
              <Link href={item.link} className=" text-xl">
                {item.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between pt-8 text-sm font-light">
        {navMenu.map((item, index) => (
          <div>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
