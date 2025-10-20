import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-screen font-couture">
      <div className="relative z-0">
        <Image
          src={"/h1.webp"}
          alt="perfume"
          width={2000}
          height={2000}
          className="object-fill w-screen h-[80vh] "
        />
        <Link href={"/m"}>
          <div className="absolute justify-center flex flex-col items-center text-center text-white inset-0 pt-72">
            <p>Fragrance</p>
            <h1 className="tracking-wide text-4xl">Wonderful Scents</h1>
            <button className="bg-white text-black text-sm mt-8 w-[150px] py-4 cursor-pointer">
              See more
            </button>
          </div>
        </Link>
      </div>
      <div className="relative z-0">
        <Image
          src={"/h2.webp"}
          alt="perfume"
          width={2000}
          height={2000}
          className="object-top w-screen h-[80vh] "
        />
        <Link href={"/m"}>
          <div className="absolute justify-center flex flex-col items-center text-center text-white inset-0 pt-72">
            <p>Watches</p>
            <h1 className="tracking-wide text-4xl">
              The Premiere Edition Originale Watch
            </h1>
            <button className="bg-white text-black text-sm mt-8 w-[150px] py-4 cursor-pointer">
              See more
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
