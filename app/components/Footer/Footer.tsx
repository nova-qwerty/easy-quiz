"use client";
import React from 'react';
import "./styles.css";
import { footer } from "../../config"
import { Language } from "../../languages";

const Footer: React.FC<{ language: Language; marginTop?: boolean }> = ({ language, marginTop }) => {
    return (
        <footer className={`text-white text-center w-full mt-auto ${marginTop ? "mb-[1rem]" : ""}`}>
            <div className="text-[8px] font-normal">
                <p>© Sens.ùs — All Rights Reserved</p>
                <p className="leading-relaxed">
                    {footer[language].text[0]}
                    <br />
                    {footer[language].text[1]}
                    <br />
                    {footer[language].text[2]}
                </p>
            </div>
            <div className="mt-2 space-x-1 text-[12px] font-medium">
                <a href="https://www.ilovesensus.it/privacy-policy/" target="_blank" className="n-underline hover:text-gray-300">
                    {footer[language].privacy_policy}
                </a>
                <span>|</span>
                <a href="https://www.ilovesensus.it/cookie-policy/" target="_blank" className="n-underline hover:text-gray-300">
                    {footer[language].cookie_policy}
                </a>
                <span>|</span>
                <a href="https://www.ilovesensus.it/termini-uso/"  target="_blank" className="n-underline hover:text-gray-300">
                    {footer[language].terms_of_use}
                </a>
            </div>
        </footer>
    )
}

export default Footer;