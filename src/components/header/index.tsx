"use client"

import { Menu,  X } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Search from "../search";
import { Search as SearchIcon } from "lucide-react";

const links = [
    { href: "/home" , label: "Home" },
    { href: "/produtos", label: "Produtos" },
    { href: "/contato", label: "Contatos" },
    { href: "/admin", label: "Gerenciamento" },
    { href: "/login", label: "Login" }
]

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    {/*ALTERNA O ESTADO DA NAVBAR*/}
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    const toggleNavSearch = () => {
        if(isSearchOpen){
            toggleSearch();
        }else{
            toggleNav();
        }
    }

    return (
      <header className="bg-[#911F27] sticky top-0 z-20 mx-auto w-full py-0 px-4 md:p-0 ">
        <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
          <Link href="/" className="flex gap-4 items-center">
            <Image
              src='/logo/logo.png'
              alt="Logo FutRetro"
              width={904}
              height={904}
              className="h-20 w-20 "
            />
          </Link>
          <nav className="flex justify-end">
            <div className="hidden w-full md:flex justify-end items-center gap-8">
              
              {links.map((link, index) => (
                <Link href="link, index" key={index}>
                  <span className="text-3xl text-[#F2EBD5] hover:bg-white/20 p-2 rounded-2xl">
                    {link.label}
                  </span>
                </Link>
              ))}
              {isSearchOpen ? (
                <X
                  onClick={toggleSearch}
                  className="w-10 h-10 cursor-pointer text-[#F2EBD5] hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                />
              ) : (
                <SearchIcon
                  onClick={toggleSearch}
                  className="w-10 h-10 cursor-pointer text-[#F2EBD5]  hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                />
              )}
            </div>

            {/* DISPOSITIVOS MOVEIS */}
            <div className="md:hidden">
              {isNavOpen || isSearchOpen ? (
                <X
                  onClick={toggleNavSearch}
                  className="w-10 h-10 cursor-pointer text-[#F2EBD5] hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                />
              ) : (
                <div className="flex gap-4">
                  <SearchIcon
                    onClick={toggleSearch}
                    className="w-12 h-12 text-[#F2EBD5] cursor-pointer"
                  />
                  <Menu
                    onClick={toggleNav}
                    className="w-12 h-12 text-[#F2EBD5] cursor-pointer"
                  />
                </div>
              )}
            </div>
          </nav>
        {/*IMPLEMENTANDO BUSCA*/}
        {isSearchOpen && <Search />}
        {/* SE O MENU DE NAV ESTIVER ABERTO */}
        {isNavOpen && (
            <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                {links.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <span className="text-2xl text-[#F2EBD5] hover:bg-white/20 p-2 rounded-2xl">
                            {link.label}
                        </span>
                    </Link>
                ))}
            </div>
        )}
        </div>
      </header>
    );
}