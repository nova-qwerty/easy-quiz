"use client";
import React, { useState } from 'react';
import Image from "next/image";
import "./styles.css";

const Header: React.FC<{ language: "it" | "en"; setLanguage: (lang: "it" | "en") => void }> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white header-margin">
      <div className="flex justify-between items-center">
        <Image src="/logo-sensus.svg" alt="Logo Sensus" width={135} height={47.37} />
        
        <div className="flex items-center gap-1">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as "it" | "en")}
            className="bg-transparent border border-[#9EA5C4] rounded-[1px] py-1 text-white cursor-pointer focus-visible:outline-none text-center"
          >
            <option value="it">IT</option>
            <option value="en">EN</option>
          </select>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
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
        <Image src="/logo-giulietta.svg" alt="Logo Giulietta" width={217.5} height={95} />
      </div>
    </header>
  );
};

export default Header;