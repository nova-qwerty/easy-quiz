"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "./styles.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { result } from "../config";
import axios from "axios";
import { Language } from "../languages";
import { translateSuggestion } from "../utils/utils";

const ResultContent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [language, setLanguage] = useState<Language>("it");
  const searchParams = useSearchParams();   
  const email = searchParams.get("email");
  const paramLang = searchParams.get("lang") as Language || "it";


  useEffect(() => {
    setLanguage(paramLang);
    const fetchData = async () => {
      if (!email) return; // Evitar ejecutar si no hay email

      try {
        const response = await axios.get(
          `https://sensus-giulietta-453610.ew.r.appspot.com/get-data?email=${email}`,
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
      <Header language={language} setLanguage={setLanguage} />

      {data ? (
        <div className="mt-6">
          <p className="m-0 p-0 text-center text-[25px] text-[#9EA5C4]">
            {result[language][0].title}
          </p>
          <p className="mt-2 text-center text-[18px] text-[#FFFFFF]">
          {result[language][0].subtitle}
          </p>
          {/* <p className="mt-2 m-0 p-0 text-center text-[22px] text-[#FFFFFF] font-bold">
            {data.classHair?.replace(/_/g, " ").toUpperCase()}
          </p> */}

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
              {translateSuggestion(data.suggestion1Description, language)}
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
              {translateSuggestion(data.suggestion2Description, language)}
            </span>
          </div>

          <div className="mt-6">
            <p className="text-center font-bold text-[22px] text-[#FFFFFF]">
              {result[language][0].match}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-center text-[18px] text-[#FFFFFF]">
              {result[language][0].text[0]}
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              {result[language][0].text[1]}
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              {result[language][0].text[2]}
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              {result[language][0].text[3]}
            </p>
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
              {translateSuggestion(data.pairable1Description, language)}
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
              {translateSuggestion(data.pairable2Description, language)}
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
              {result[language][0].text_final[0]}
            </p>
            <p className="text-center text-[18px] text-[#FFFFFF]">
              {result[language][0].text_final[1]}
            </p>
          </div>

          <div className="mt-2 text-center">
            <button className="w-64 transition input-button text-white px-3 mt-4"
                onClick={() => window.open("https://www.ilovesensus.it/salon-locator/", "_blank")}>
              {result[language][0].store_locator}
            </button>
          </div>

          <div className="mt-0 mb-[2.5rem] text-center">
            {/* <button className="w-64 transition text-white input-button-2 px-3 mt-4">
              {result[language][0].share_social}
            </button> */}
          </div>
        </div>
      ) : (
        <p className="text-center text-white">Caricamento risultati...</p>
      )}

      <Footer language={language} marginTop={true} />
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