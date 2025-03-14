"use client";
import React from 'react';
import "./styles.css";
import { footer } from "../../config"

const Footer: React.FC<{ language: "it" | "en", marginTop?: boolean }> = ({ language, marginTop }) => {
    return (
        <footer className={`text-black text-center w-full mt-auto ${marginTop ? "mb-[1rem]" : ""}`}>
            <div className="text-[8px] font-normal">
                <p className="leading-relaxed">
                    {footer[language].text[0]}
                    <br />
                    {footer[language].text[1]}
                    <br />
                    {footer[language].text[2]}
                </p>
            </div>
        </footer>
    )
}

export default Footer;