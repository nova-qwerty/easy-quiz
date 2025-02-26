import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from "next/image"
import "./styles.css";

const Result: NextPage = () => {
    const [showResult, setShowResult] = useState(false);
    const router = useRouter();
    const { suggestion1, suggestion2, pairable1, pairable2, classHair, personality } = router.query;
    console.log(suggestion1, suggestion2, pairable1, pairable2);

    if (showResult) {
        return <Result />; // Muestra el componente Result en lugar del actual
    }   

    return (
        <div>
            <h1>Result Page</h1>
            <p>Suggestion 1: {suggestion1}</p>
            <p>Suggestion 2: {suggestion2}</p>
            <p>Pairable 1: {pairable1}</p>
            <p>Pairable 2: {pairable2}</p>
            <p>classHair: {classHair}</p>
            <p>personality: {personality}</p>
            <div className='mt-3'>
                <Image src="/result.svg" alt="Logo Giulietta" width={414} height={390} />
            </div>

            <div className="mt-6">
                <p className="m-0 p-0 text-center text-[25px] text-[#9EA5C4]">ECCO IL TUO RISULTATO</p>
            </div>

            <div className="mt-6">
                <p className="m-0 p-0 text-center text-[22px] text-[#FFFFFF]">PALETTE NEUTRA</p>
            </div>

            <div className="mt-6">
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">La tua palette e neutra. Puoi spaziare tra</p>
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">toni freddi e caldi, ma i toni beige</p>
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">bilanciati e i castani sono</p>
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">particolarmente adatti a te.</p>
            </div>

            <div className="mt-6">
                <p className="m-0 p-0 text-center text-[22px] text-[#FFFFFF]">Consiglio di armacromia:</p>
            </div>

            <div className="mt-6">
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">Opta per tinte che combinano toni</p>
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">neutri come il beige o il naturale beige,</p>
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">Sperimenta con outfit nei toni del</p>
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">grigio, sabbia e rosa antico.</p>
            </div>

            <div className="mt-6">
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">Trova il salone piu vicino a te e</p>
                <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">chiedigli di Giulietta</p>
            </div>

            <div className="mt-2">
                <button
                    className="w-full transition input-button text-white px-3 mt-4">
                    StORE LOCATOR
                </button>
            </div>

            <div className="mt-0">
                <button
                    onClick={() => setShowResult(true)}
                    className="w-full transition text-white input-button-2 px-3 mt-4">
                    CONDIVIDI SUI SOCIAL
                </button>
            </div>

        </div>
    )
}

export default Result;