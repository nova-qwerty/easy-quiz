"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "./styles.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const ResultContent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    const fetchData = async () => {
      if (!email) return; // Evitar ejecutar si no hay email

      try {
        const response = await axios.get(
          `https://easy-quiz-361443445667.europe-west1.run.app/get-data?email=${email}`,
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error obteniendo los datos:", error);
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="min-screen relative">
      <Header />

      {data ? (
        <div className="mt-6">
          <p className="m-0 p-0 text-center text-[25px] text-[#9EA5C4]">
            ECCO IL TUO RISULTATO
          </p>
          <p className="m-0 p-0 text-center text-[22px] text-[#FFFFFF] font-bold">
            {data.classHair?.replace(/_/g, " ").toUpperCase()}
          </p>

          <div className="mt-6 relative">
            <Image
              src={`/result/${data.personality}/${data.classHair}/${data.suggestions[0]}.webp`}
              alt="Logo Sensus"
              width={1920}
              height={250}
              className="h-[250px]"
            />
            <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
              {data.suggestions[0]?.substring(1)}
            </span>
            <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
              {data.suggestion1Description}
            </span>
          </div>

          <div className="mt-3 relative">
            <Image
              src={`/result/${data.personality}/${data.classHair}/${data.suggestions[1]}.webp`}
              alt="Logo Sensus"
              width={1920}
              height={250}
              className="h-[250px]"
            />
            <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
              {data.suggestions[1]?.substring(1)}
            </span>
            <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
              {data.suggestion2Description}
            </span>
          </div>

          <div className="mt-6">
            <p className="text-center text-[18px] text-[#FFFFFF]">
              La tua palette è neutra. Puoi spaziare tra
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              toni freddi e caldi, ma i toni beige
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              bilanciati e i castani sono
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              particolarmente adatti a te.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-center font-bold text-[22px] text-[#FFFFFF]">ABBINABILI CON</p>
          </div>

          <div className="mt-6 relative">
            <Image
              src={`/result/${data.personality}/${data.classHair}/${data.pairable[0]}.webp`}
              alt="Logo Sensus"
              width={1920}
              height={250}
              className="h-[250px]"
            />
            <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
              {data.pairable[0]?.substring(1)}
            </span>
            <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
              {data.pairable1Description}
            </span>
          </div>

          <div className="mt-3 relative">
            <Image
              src={`/result/${data.personality}/${data.classHair}/${data.pairable[1]}.webp`}
              alt="Logo Sensus"
              width={1920}
              height={250}
              className="h-[250px]"
            />
            <span className="absolute top-[1rem] left-[3rem] bg-[#b1b4ce] w-16 h-8 text-white text-[20px] text-center">
              {data.pairable[1]?.substring(1)}
            </span>
            <span className="absolute top-[1rem] left-[8rem] text-white text-[20px] text-center">
              {data.pairable2Description}
            </span>
          </div>

          {/* <div className="mt-6 pl-[35px] pr-[35px]">
            <p className="text-center text-[18px] text-[#FFFFFF]">
              Opta per tinte che combinano toni neutri come il beige o il naturale beige.
              Sperimenta con outfit nei toni del grigio, sabbia e rosa antico.
            </p>
          </div> */}

          <div className="mt-6">
            <p className="text-center text-[18px] text-[#FFFFFF]">
              Trova il salone più vicino a te e
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              chiedigli di Giulietta
            </p>
          </div>

          <div className="mt-2 text-center">
            <button className="w-64 transition input-button text-white px-3 mt-4"
                onClick={() => window.open("https://www.ilovesensus.it/salon-locator/", "_blank")}>
              STORE LOCATOR
            </button>
          </div>

          <div className="mt-0 mb-4 text-center">
            <button className="w-64 transition text-white input-button-2 px-3 mt-4">
              CONDIVIDI SUI SOCIAL
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-white">Caricamento risultati...</p>
      )}

      <Footer />
    </div>
  );
};

const Result: React.FC = () => {
  return (
    <Suspense fallback={<p className="text-center text-white">Loading...</p>}>
      <ResultContent />
    </Suspense>
  );
};

export default Result;