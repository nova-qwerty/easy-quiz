"use client";
import React from 'react';
import "./styles.css";

const Footer: React.FC = () => {
    return (
        <footer className="text-white text-center w-full mt-auto text-size absolute postion-footer">
            <p>© Sens.ùs — All Rights Reserved</p>
            <p className="leading-relaxed">
                Pettenon Cosmetics S.p.A. S.B. sede legale in via del Palù, 7/D, 35018 - San Martino di Lupari (PD - Italia)
                <br />
                Cod. Fisc., P.Iva e Registro delle Imprese di Padova n. 04937500280, R.E.A. PD 430007
                <br />
                Cap. Soc. €7.500.000,00 i.v., società soggetta a direzione e coordinamento di AGF88 Holding S.r.l.
            </p>
            <div className="mt-2 space-x-1">
                <a href="#" className="n-underline hover:text-gray-300">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="n-underline hover:text-gray-300">Cookie Policy</a>
                <span>|</span>
                <a href="#" className="n-underline hover:text-gray-300">Termini d&apos;uso</a>
            </div>
        </footer>
    )
}

export default Footer;