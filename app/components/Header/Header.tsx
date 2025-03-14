"use client";
import React from "react";
import Image from "next/image";
import { titleImgUrl } from "../../config.json";
import "./styles.css";

const Header: React.FC<{ language: "it" | "en"; setLanguage: (lang: "it" | "en") => void }> = () => {
  return (
    <header className="text-white header-margin">
      <div className="flex justify-center image-margin">
        <Image src={`${titleImgUrl}`} alt="Logo Giorgia" width={150.5} height={88} />
      </div>
    </header>
  );
};

export default Header;