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

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between pt-8 max-w-[1300px] mx-auto">
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
  );
}
