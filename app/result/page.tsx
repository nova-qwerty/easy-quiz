"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "./styles.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Result: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const searchParams = useSearchParams();
  const suggestion1 = searchParams.get("suggestion1");
  const suggestion1Description = searchParams.get("suggestion1Description");
  const suggestion2 = searchParams.get("suggestion2");
  const suggestion2Description = searchParams.get("suggestion2Description");
  const pairable1 = searchParams.get("pairable1");
  const pairable1Description = searchParams.get("pairable1Description");
  const pairable2 = searchParams.get("pairable2");
  const pairable2Description = searchParams.get("pairable2Description");
  const classHair = searchParams.get("classHair");
  const personality = searchParams.get("personality");

  if (showResult) {
    return <Result />;
  }

  return (
    <div>
      <Header />

      <div className="mt-6">
        <p className="m-0 p-0 text-center text-[25px] text-[#9EA5C4]">
          ECCO IL TUO RISULTATO
        </p>
        <p className="m-0 p-0 text-center text-[22px] text-[#FFFFFF]">
          CALDO CHIARO
        </p>
      </div>

      <div className="mt-6 relative">
        <Image
          src={`/result/${personality}/${classHair}/${suggestion1}.webp`}
          alt="Logo Sensus"
          width={1920}
          height={300}
        />
        <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
          {suggestion1?.substring(1, suggestion1.length)}
        </span>
        <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
          {suggestion1Description}
        </span>
      </div>

      <div className="mt-3 relative">
        <Image
          src={`/result/${personality}/${classHair}/${suggestion2}.webp`}
          alt="Logo Sensus"
          width={1920}
          height={300}
        />
        <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
          {suggestion2?.substring(1, suggestion2.length)}
        </span>

        <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
          {suggestion2Description}
        </span>
      </div>

      <div className="mt-6">
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          La tua palette e neutra. Puoi spaziare tra
        </p>
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          toni freddi e caldi, ma i toni beige
        </p>
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          bilanciati e i castani sono
        </p>
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          particolarmente adatti a te.
        </p>
      </div>

      <div className="mt-6">
        <p className="m-0 p-0 text-center text-[22px] text-[#FFFFFF]">
          ABBINABILI CON
        </p>
      </div>

      <div className="mt-6 relative">
        <Image
          src={`/result/${personality}/${classHair}/${pairable1}.webp`}
          alt="Logo Sensus"
          width={1920}
          height={300}
        />
        <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
          {pairable1?.substring(1, pairable1.length)}
        </span>

        <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
          {pairable1Description}
        </span>
      </div>

      <div className="mt-3 relative">
        <Image
          src={`/result/${personality}/${classHair}/${pairable2}.webp`}
          alt="Logo Sensus"
          width={1920}
          height={300}
        />
        <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
          {pairable2?.substring(1, pairable2.length)}
        </span>

        <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
          {pairable2Description}
        </span>
      </div>

      <div className="mt-6">
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          Opta per tinte che combinano toni
        </p>
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          neutri come il beige o il naturale beige,
        </p>
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          Sperimenta con outfit nei toni del
        </p>
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          grigio, sabbia e rosa antico.
        </p>
      </div>

      <div className="mt-6">
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          Trova il salone piu vicino a te e
        </p>
        <p className="m-0 p-0 text-center text-[18px] text-[#FFFFFF]">
          chiedigli di Giulietta
        </p>
      </div>

      <div className="mt-2 text-center">
        <button className="w-64 transition input-button text-white px-3 mt-4">
          StORE LOCATOR
        </button>
      </div>

      <div className="mt-0 mb-4 text-center">
        <button
          onClick={() => setShowResult(true)}
          className="w-64 transition text-white input-button-2 px-3 mt-4"
        >
          CONDIVIDI SUI SOCIAL
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
