"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`relative ${poppins.className} bg-white text-gray-950`}>
      <div className="flex justify-between container py-5 md:py-9 items-center">
        <div className="max-w-[200px]">
          <Image src="/logo.png" alt="logo" width={338} height={72} />
        </div>

        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center p-3" onClick={toggleMenu}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <ul className="hidden space-x-8 lg:flex text-base">
          <li>
            <Link className={`nav-item ${pathname === '/' ? 'active' : ''}`} href="/">Beranda</Link>
            <Link className={`nav-item ${pathname === '/about' ? 'active' : ''}`} href="/about">Tentang Kami</Link>
            <Link className={`nav-item ${pathname === '/services' ? 'active' : ''}`} href="/services">Layanan</Link>
            <Link className={`nav-item ${pathname === '/blog' ? 'active' : ''}`} href="/blog">Blog</Link>
            <Link className={`nav-item ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Kontak</Link>
          </li>
        </ul>

        <ul className="hidden space-x-8 lg:flex">
          <li>
            <Link className="nav-item" href="/">IDN</Link>
            <Link className="nav-item text-gray-400" href="/">ENG</Link>
          </li>
        </ul>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

      <div className={`lg:hidden fixed top-0 left-0 w-2/3 max-w-xs h-full bg-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <Image src={"/logo.png"} alt="logo" width={118} height={90} className="my-4"/>
          <Link className={`nav-item font-medium ${pathname === "/" ? "active" : ""}`} href="/" onClick={toggleMenu}>Beranda</Link>
          <Link className={`nav-item font-medium ${pathname === "/about" ? "active" : ""}`} href="/about" onClick={toggleMenu}>Tentang Kami</Link>
          <Link className={`nav-item font-medium ${pathname === "/services" ? "active" : ""}`} href="/services" onClick={toggleMenu}>Layanan</Link>
          <Link className={`nav-item font-medium ${pathname === "/blog" ? "active" : ""}`} href="/blog" onClick={toggleMenu}>Blog</Link>
          <Link className={`nav-item font-medium ${pathname === "/contact" ? "active" : ""}`} href="/contact" onClick={toggleMenu}>Kontak</Link>
          <div className="flex space-x-4">
            <Link className="nav-item" href="/" onClick={toggleMenu}>IDN</Link>
            <Link className="nav-item text-gray-400" href="/" onClick={toggleMenu}>ENG</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
