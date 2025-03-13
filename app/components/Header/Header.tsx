"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logoUrl, titleImgUrl, arrowImgUrl } from "../../config.json";
import "./styles.css";
import { LANGUAGES, Language } from "../../languages";


const Header: React.FC<{ language: Language; setLanguage: (lang: Language) => void }> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="text-white header-margin">
      <div className="flex justify-between items-center">
        <Image src={`${logoUrl}`} alt="Logo Sensus" width={135} height={47.37} />
        <div className="flex items-center gap-1 relative">
          <div className="relative w-[55px]">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-transparent border border-[#9EA5C4] rounded-[1px] py-1 text-white cursor-pointer flex items-center justify-center px-2 w-full gap-[5px]"
            >
              <span className="text-center flex-1">{language.toUpperCase()}</span>
              <Image className="rotate-90" src={`${arrowImgUrl}`} alt="Next arrow" width={10} height={10} />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 w-full bg-[#70708c] border border-[#9EA5C4] mt-1 rounded-[1px] text-center">
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setLanguage(lang as "it" | "en");
                      setIsDropdownOpen(false);
                    }}
                    className="py-1 cursor-pointer hover:bg-[#595D7A]"
                  >
                    {lang.toUpperCase()}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-0 pl-2">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mt-4">
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      )}

      <div className="flex justify-center image-margin">
        <Image src={`${titleImgUrl}`} alt="Logo Giulietta" width={217.5} height={95} />
      </div>
    </header>
  );
};

export default Header;