import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
export default function Navbar() {
  return (
    <nav>
      <div className={`flex justify-between container py-5 md:py-9 items-center ${poppins.className}`}>
        <div className="max-w-[200px]">
          <Image src="/logo.png" alt="logo" width={338} height={72} />
        </div>

        <ul className="hidden space-x-8 lg:flex text-base">
          <li>
            <Link className="nav-item active font-medium" href="/">Beranda</Link>
            <Link className="nav-item font-medium" href={"/about"}>Tentang Kami</Link>
            <Link className="nav-item font-medium" href={"/services"}>Layanan</Link>
            <Link className="nav-item font-medium" href={"/blog"}>Blog</Link>
            <Link className="nav-item font-medium" href={"/contact"}>Kontak</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="nav-item" href="/">IDN</Link>
            <Link className="nav-item text-gray-400" href="/">ENG</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
