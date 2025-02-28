"use client";
import React from 'react';
import "./styles.css";

const Footer: React.FC = () => {
    return (
        <footer className="text-white text-center w-full mt-auto postion-footer">
            <div className="text-size">
                <p>© Sens.ùs — All Rights Reserved</p>
                <p className="leading-relaxed">
                    Pettenon Cosmetics S.p.A. S.B. sede legale in via del Palù, 7/D, 35018 - San Martino di Lupari (PD - Italia)
                    <br />
                    Cod. Fisc., P.Iva e Registro delle Imprese di Padova n. 04937500280, R.E.A. PD 430007
                    <br />
                    Cap. Soc. €7.500.000,00 i.v., società soggetta a direzione e coordinamento di AGF88 Holding S.r.l.
                </p>
            </div>
            <div className="mt-2 space-x-1 text-size-links">
                <a href="https://www.ilovesensus.it/privacy-policy/" target="_blank" className="n-underline hover:text-gray-300">Privacy Policy</a>
                <span>|</span>
                <a href="https://www.ilovesensus.it/cookie-policy/" target="_blank" className="n-underline hover:text-gray-300">Cookie Policy</a>
                <span>|</span>
                <a href="https://www.ilovesensus.it/termini-uso/"  target="_blank" className="n-underline hover:text-gray-300">Termini d&apos;uso</a>
            </div>
        </footer>
    )
}

export default Footer;