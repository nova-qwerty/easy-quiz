
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { titleImgUrl } from "../../config.json";
import "./styles.css";

const Header: React.FC<{ language: "it" | "en"; setLanguage: (lang: "it" | "en") => void }> = () => {
  const [isMenuOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="text-white header-margin">
      <div className="flex justify-between items-center">
        {/* <Image src={`${logoUrl}`} alt="Logo Giorgia" width={80} height={35.37} /> */}
        {/* <div className="flex items-center gap-1 relative">
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
                {["it", "en"].map((lang) => (
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

          {}
        </div> */}
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
        <Image src={`${titleImgUrl}`} alt="Logo Giorgia" width={150.5} height={88} />
      </div>
    </header>
  );
};

export default Header;