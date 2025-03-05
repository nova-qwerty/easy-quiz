"use client";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Stepper from "./components/Stepper/Stepper";
import Footer from "./components/Footer/Footer";
import Thanks from "./components/Thanks/Thanks";
import Result from "./components/Result/Result";

const translations = {
  it: [
    {
      code: "SKIN_UNDERTONE",
      question: "Qual è il sottotono della tua pelle?",
      type: "GRID_IMAGE",
      replies: [
        { answer: "ROSATO - BEIGE OLIVASTRO", logo: "Pelle_Beige_q1.svg", value: "FREDDO" },
        { answer: "PESCA - AVORIO AMBRATO", logo: "Pelle_Pesca_q1.svg", value: "CALDO" },
      ],
      next: "CONTINUA",
      previous: "INDIETRO"
    },
    {
      code: "LIP_COLOR",
      question: "Qual è il colore della tue labbra?",
      type: "GRID_IMAGE",
      replies: [
        { answer: "ROSATE", logo: "Labbra_Rosate_q2.webp", value: "FREDDO" },
        { answer: "PESCA", logo: "Labbra_Pesca_q2.webp", value: "CALDO" },
      ],
    },
    {
      code: "TANNED_SKIN",
      question: "Qual è il colore della tua pelle dopo l'abbronzatura?",
      type: "GRID_IMAGE",
      replies: [
        { answer: "TENDENZA ARROSAMENTO", logo: "Pelle_Arrossata_q3.webp", value: "FREDDO" },
        { answer: "DORATA", logo: "Pelle_Dorata_q3.webp", value: "CALDO" },
      ],
    },
    {
      code: "NATURAL_HAIR_COLOR",
      question: "Qual è il colore naturale dei tuoi capelli?",
      type: "GRID_IMAGE_HORIZONTAL",
      replies: [
        { answer: "SCURI (livelli da 1 a 5)", logo: "Hair_L5_q4.webp", value: "SCURO" },
        { answer: "MEDI (livelli da 6 a 7)", logo: "Hair_L7_q4.webp", value: "MEDIO" },
        { answer: "CHIARI (livelli da 8 a 11)", logo: "Hair_L9_q4.webp", value: "CHIARO" },
      ],
    },
    {
      code: "EYEBROW_COLOR",
      question: "Qual è il colore delle tue soppracciglia?",
      type: "GRID_IMAGE_HORIZONTAL",
      replies: [
        { answer: "SCURI (livelli da 1 a 5)", logo: "Hair_L5_q4.webp", value: "SCURO" },
        { answer: "MEDI (livelli da 6 a 7)", logo: "Hair_L7_q4.webp", value: "MEDIO" },
        { answer: "CHIARI (livelli da 8 a 11)", logo: "Hair_L9_q4.webp", value: "CHIARO" },
      ],
    },
    {
      code: "PERSONALITY",
      question: [
        "Com'è il tuo",
        "carattere?"
      ],
      type: "GRID_IMAGE_VERTICAL",
      replies: [
        { answer: "TIMIDO, RISERVATO", logo: "", value: "INTROVERSO" },
        { answer: "ESUBERANTE, ESTROVERSO", logo: "", value: "ESTROVERSO" },
      ],
    },
    {
      code: "STEP_7",
      question: "Hai quasi finito",
      type: "FORM_CONTACT",
      last: "MANCA UN ULTIMO PASSO",
      message: "Inserisci la tua mail e scopri il risultato",
      placeholder: "Il tuo indirizzo mail",
      send: "INVIA",
      consent1: {
        text: [
          "Preso atto dell'informativa e avendola compresa",
          "Acconsento (barrando l'apposita casella) al trattamento per le",
          "finalità indicate al punto 2 lett. A della informativa (in sintesi: per rispondere alla richiesta)"
        ],
      },
      consent2: {
        text: [
          "Acconsento (barrando l'apposita casella) al trattamento per le",
          "finalità indicate al punto 2 lett. A della informativa",
          "(in sintesi: ricezione di comunicazioni pubblicitarie/informative)"
        ],
      },
      options: {
        accept: "Acconsento",
        not_accept: "Non Acconsento"
      }
    },
    {
      code: "STEP_8",
      question: "Grazie!",
      type: "FINAL",
      last: "HAI FINITO!",
      email_check: {
        text: [
          "Controlla la tua casella di",
          "posta elettronica"
        ],
      },
      store_locator: "VISITA IL NOSTRO STORE LOCATOR"
    },
  ],
  en: [
    {
      code: "SKIN_UNDERTONE",
      question: "What is your skin undertone?",
      type: "GRID_IMAGE",
      replies: [
        { answer: "PINK - OLIVE BEIGE", logo: "Pelle_Beige_q1.svg", value: "COOL" },
        { answer: "PEACH - AMBER IVORY", logo: "Pelle_Pesca_q1.svg", value: "WARM" },
      ],
      next: "NEXT",
      previous: "PREVIOUS"
    },
    {
      code: "LIP_COLOR",
      question: "What is the color of your lips?",
      type: "GRID_IMAGE",
      replies: [
        { answer: "PINK", logo: "Labbra_Rosate_q2.webp", value: "COOL" },
        { answer: "PEACH", logo: "Labbra_Pesca_q2.webp", value: "WARM" },
      ],
    },
    {
      code: "TANNED_SKIN",
      question: "What is the color of your skin after tanning?",
      type: "GRID_IMAGE",
      replies: [
        { answer: "TENDS TO REDNESS", logo: "Pelle_Arrossata_q3.webp", value: "COOL" },
        { answer: "GOLDEN", logo: "Pelle_Dorata_q3.webp", value: "WARM" },
      ],
    },
    {
      code: "NATURAL_HAIR_COLOR",
      question: "What is your natural hair color?",
      type: "GRID_IMAGE_HORIZONTAL",
      replies: [
        { answer: "DARK (levels 1 to 5)", logo: "Hair_L5_q4.webp", value: "DARK" },
        { answer: "MEDIUM (levels 6 to 7)", logo: "Hair_L7_q4.webp", value: "MEDIUM" },
        { answer: "LIGHT (levels 8 to 11)", logo: "Hair_L9_q4.webp", value: "LIGHT" },
      ],
    },
    {
      code: "EYEBROW_COLOR",
      question: "What is your eyebrow color?",
      type: "GRID_IMAGE_HORIZONTAL",
      replies: [
        { answer: "DARK (levels 1 to 5)", logo: "Hair_L5_q4.webp", value: "DARK" },
        { answer: "MEDIUM (levels 6 to 7)", logo: "Hair_L7_q4.webp", value: "MEDIUM" },
        { answer: "LIGHT (levels 8 to 11)", logo: "Hair_L9_q4.webp", value: "LIGHT" },
      ],
    },
    {
      code: "PERSONALITY",
      question: [
        "What is your",
        "personality like?"
      ],
      type: "GRID_IMAGE_VERTICAL",
      replies: [
        { answer: "SHY, RESERVED", logo: "", value: "INTROVERTED" },
        { answer: "EXUBERANT, OUTGOING", logo: "", value: "EXTROVERTED" },
      ],
    },
    {
      code: "STEP_7",
      question: "You're almost done",
      type: "FORM_CONTACT",
      last: "ONE LAST STEP TO GO",
      message: "Enter your email and find out the result",
      placeholder: "Your email address",
      send: "SEND",
      consent1: {
        text: [
          "Having read and understood the information notice",
          "I consent (by checking the appropriate box) to the processing for the",
          "purposes indicated in point 2 letter A of the information notice (in summary: to respond to the request)"
        ],
      },
      consent2: {
        text: [
          "I consent (by checking the appropriate box) to the processing for the",
          "purposes indicated in point 2 letter A of the information notice",
          "(in summary: receiving advertising/informative communications)"
        ],
      },
      options: {
        accept: "I Consent",
        not_accept: "I Do Not Consent"
      }
    },
    {
      code: "STEP_8",
      question: "Thank you!",
      type: "FINAL",
      last: "YOU'RE DONE!",
      email_check: {
        text: [
          "Check your",
          "inbox"
        ]
      },
      store_locator: "VISIT OUR STORE LOCATOR"
    },
  ],
};

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [language, setLanguage] = useState<"it" | "en">("it");

  return currentStep !== 8 ? (
    <div>
      <div className="min-screen relative">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <Stepper
            steps={translations[language]}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </main>
      </div>
      <Footer language={language} />
    </div>
  ) : (
    <div>
      <div className="min-screen-2 relative">
        <Header language={language} setLanguage={setLanguage} />
        <main className="p-4">
          {showResult ? <Result /> : <Thanks setShowResult={setShowResult} />}
        </main>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Home;
