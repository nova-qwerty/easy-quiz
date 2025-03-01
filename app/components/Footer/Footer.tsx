"use client";
import React from 'react';
import "./styles.css";

const Footer: React.FC<{ language: "it" | "en" }> = ({ language }) => {
    const translations: any = {
        it: {
            text: [
                "Pettenon Cosmetics S.p.A. S.B. sede legale in via del Palù, 7/D, 35018 - San Martino di Lupari (PD - Italia)",
                "Cod. Fisc., P.Iva e Registro delle Imprese di Padova n. 04937500280, R.E.A. PD 430007",
                "Cap. Soc. €7.500.000,00 i.v., società soggetta a direzione e coordinamento di AGF88 Holding S.r.l."
            ],
            privacy_policy: "Privacy Policy",
            cookie_policy: "Cookie Policy",
            terms_of_use: "Termini d'uso"
        },
        en: {
            text: [
                "Pettenon Cosmetics S.p.A. S.B. registered office at via del Palù, 7/D, 35018 - San Martino di Lupari (PD - Italy)",
                "Tax Code, VAT No. and Business Register of Padua No. 04937500280, R.E.A. PD 430007",
                "Share capital €7,500,000.00 i.v., company subject to management and coordination by AGF88 Holding S.r.l."
            ],
            privacy_policy: "Privacy Policy",
            cookie_policy: "Cookie Policy",
            terms_of_use: "Terms of Use"
        }
    }
    return (
        <footer className="text-white text-center w-full mt-auto postion-footer">
            <div className="text-size">
                <p>© Sens.ùs — All Rights Reserved</p>
                <p className="leading-relaxed">
                    {translations[language].text[0]}
                    <br />
                    {translations[language].text[1]}
                    <br />
                    {translations[language].text[2]}
                </p>
            </div>
            <div className="mt-2 space-x-1 text-size-links">
                <a href="https://www.ilovesensus.it/privacy-policy/" target="_blank" className="n-underline hover:text-gray-300">{translations[language].privacy_policy}</a>
                <span>|</span>
                <a href="https://www.ilovesensus.it/cookie-policy/" target="_blank" className="n-underline hover:text-gray-300">{translations[language].cookie_policy}</a>
                <span>|</span>
                <a href="https://www.ilovesensus.it/termini-uso/"  target="_blank" className="n-underline hover:text-gray-300">{translations[language].terms_of_use}</a>
            </div>
        </footer>
    )
}

export default Footer;