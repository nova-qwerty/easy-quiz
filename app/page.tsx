"use client";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Stepper from './components/Stepper/Stepper';
import Footer from './components/Footer/Footer';
import Thanks from './components/Thanks/Thanks';
import Result from './components/Result/Result';

const steps = [
  {
    code: "STEP_1",
    question: "Qual'è il sottotono della tua pelle?",
    type: "GRID_IMAGE",
    replies: [
      {
        answer: "ROSATO - BEIGE OLIVASTRO",
        logo: "Pelle_Beige_q1.svg",
      },
     {
        answer: "PESCA - AVORIO AMBRATO",
        logo: "Pelle_Pesca_q1.svg"
      }
    ],
  },
  {
    code: "STEP_2",
    question: "Qual'è il colore della tue labbra?",
    type: "GRID_IMAGE",
    replies: [
     {
      answer:  "ROSATE",
      logo: "Labbra_Rosate_q2.png"
     },
     {
      answer:  "PESCA",
      logo: "Labbra_Pesca_q2.png"
     }
      
    ]
  },
  {
    code: "STEP_3",
    question: "Qual è il colore della tua pelle dopo l'abbronzatura?",
    type: "GRID_IMAGE",
    replies: [
      {
        answer:  "ROSATRA",
        logo: "Pelle_Arrossata_q3.png"
       },
       {
        answer:  "DORATA",
        logo: "Pelle_Dorata_q3.png"
       }
    ]
  },
  {
    code: "STEP_4",
    question: "Qual'è il colore naturale dei tuoi capelli?",
    type: "GRID_IMAGE_HORIZONTAL",
    replies: [
      {
        answer:  "SCURI",
        logo: "Hair_L5_q4.png"
       },
       {
        answer:  "MEDI",
        logo: "Hair_L7_q4.png"
       },
       {
        answer:  "CHIARI",
        logo: "Hair_L9_q4.png"
       }
    ]
  },
  {
    code: "STEP_5",
    question: "Qual è il colore delle tue soppracciglia?",
    type: "GRID_IMAGE_HORIZONTAL",
    replies: [
      {
        answer:  "SCURI",
        logo: "Eyebrown_L3_q5.png"
       },
       {
        answer:  "MEDI",
        logo: "Eyebrown_L6_q5.png"
       },
       {
        answer:  "CHIARI",
        logo: "Eyebrown_L8_q5.png"
       }
    ]
  },
  {
    code: "STEP_6",
    question: "Com'è il tuo carattere?",
    type: "GRID_IMAGE_VERTICAL",
    replies: [
      {
        answer:  "TIMIDO, RISERVATO",
        logo: ""
       },
       {
        answer:  "ESUBERANTE, ESTROVERSO",
        logo: ""
       },
    ]
  },
  {
    code: "STEP_7",
    question: "Hai quasi finito 😊",
    type: "FORM_CONTACT"
  },
  {
    code: "STEP_8",
    question: "Grazie!",
    type: "FINAL"
  }
];

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  return currentStep !== 8 ? (
    <div>
      <div className="min-screen relative">
        <Header />
        <main className="p-4">
          <Stepper steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
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
  )
};

export default Home;