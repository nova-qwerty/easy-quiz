"use client";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Stepper from "./components/Stepper/Stepper";
import Footer from "./components/Footer/Footer";
import Thanks from "./components/Thanks/Thanks";
import Result from "./components/Result/Result";

const steps = [
  {
    code: "SKIN_UNDERTONE",
    question: "Qual è il sottotono della tua pelle?",
    type: "GRID_IMAGE",
    replies: [
      {
        answer: "ROSATO - BEIGE OLIVASTRO",
        logo: "Pelle_Beige_q1.svg",
        value: "FREDDO",
      },
      {
        answer: "PESCA - AVORIO AMBRATO",
        logo: "Pelle_Pesca_q1.svg",
        value: "CALDO",
      },
    ],
  },
  {
    code: "LIP_COLOR",
    question: "Qual è il colore della tue labbra?",
    type: "GRID_IMAGE",
    replies: [
      {
        answer: "ROSATE",
        logo: "Labbra_Rosate_q2.webp",
        value: "FREDDO",
      },
      {
        answer: "PESCA",
        logo: "Labbra_Pesca_q2.webp",
        value: "CALDO",
      },
    ],
  },
  {
    code: "TANNED_SKIN",
    question: "Qual è il colore della tua pelle dopo l'abbronzatura?",
    type: "GRID_IMAGE",
    replies: [
      {
        answer: "TENDENZA ARROSAMENTO",
        logo: "Pelle_Arrossata_q3.webp",
        value: "FREDDO",
      },
      {
        answer: "DORATA",
        logo: "Pelle_Dorata_q3.webp",
        value: "CALDO",
      },
    ],
  },
  {
    code: "NATURAL_HAIR_COLOR",
    question: "Qual è il colore naturale dei tuoi capelli?",
    type: "GRID_IMAGE_HORIZONTAL",
    replies: [
      {
        answer: "SCURI (livelli da 1 a 5)",
        logo: "Hair_L5_q4.webp",
        value: "SCURO",
      },
      {
        answer: "MEDI (livelli da 6 a 7)",
        logo: "Hair_L7_q4.webp",
        value: "MEDIO",
      },
      {
        answer: "CHIARI (livelli da 8 a 11)",
        logo: "Hair_L9_q4.webp",
        value: "CHIARO",
      },
    ],
  },
  {
    code: "EYEBROW_COLOR",
    question: "Qual è il colore delle tue soppracciglia?",
    type: "GRID_IMAGE_HORIZONTAL",
    replies: [
      {
        answer: "SCURI (livelli da 1 a 5)",
        logo: "Hair_L5_q4.webp",
        value: "SCURO",
      },
      {
        answer: "MEDI (livelli da 6 a 7)",
        logo: "Hair_L7_q4.webp",
        value: "MEDIO",
      },
      {
        answer: "CHIARI (livelli da 8 a 11)",
        logo: "Hair_L9_q4.webp",
        value: "CHIARO",
      },
    ],
  },
  {
    code: "PERSONALITY",
    question: "Com'è il tuo carattere?",
    type: "GRID_IMAGE_VERTICAL",
    replies: [
      {
        answer: "TIMIDO, RISERVATO",
        logo: "",
        value: "INTROVERSO",
      },
      {
        answer: "ESUBERANTE, ESTROVERSO",
        logo: "",
        value: "ESTROVERSO",
      },
    ],
  },
  {
    code: "STEP_7",
    question: "Hai quasi finito 😊",
    type: "FORM_CONTACT",
  },
  {
    code: "STEP_8",
    question: "Grazie!",
    type: "FINAL",
  },
];

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  return currentStep !== 8 ? (
    <div>
      <div className="min-screen relative">
        <Header />
        <main className="p-4">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </main>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <div className="min-screen-2 relative">
        <Header />
        <main className="p-4">
          {showResult ? <Result /> : <Thanks setShowResult={setShowResult} />}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
