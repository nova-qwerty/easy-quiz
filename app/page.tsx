"use client";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Stepper from './components/Stepper/Stepper';
import Footer from './components/Footer/Footer';

const steps = [
  {
    question: "Qual'è il sottotono della tua pelle?",
    type: "GRID_IMAGE",
    replies: ["ROSATO - BEIGE OLIVASTRO","PESCA - AVORIO AMBRATO"]
  },
  {
    question: "Qual'è il colore della tue labbra?",
    type: "GRID_IMAGE",
    replies: ["ROSATE","PESCA"]
  },
  {
    question: "Qual è il colore della tua pelle dopo l'abbronzatura?",
    type: "GRID_IMAGE",
    replies: ["ROSATRA","DORATA"]
  },
  {
    question: "Qual'è il colore naturale dei tuoi capelli?",
    type: "GRID_IMAGE_HORIZONTAL",
    replies: ["SCURI", "MEDI", "CHIARI"]
  },
  {
    question: "Qual è il colore delle tue soppracciglia?",
    type: "GRID_IMAGE_HORIZONTAL",
    replies: ["SCURI", "MEDI", "CHIARI"]
  },
  {
    question: "Com'è il tuo carattere?",
    type: "GRID_IMAGE_VERTICAL",
    replies: ["TIMIDO, RISERVATO", "ESUBERANTE, ESTROVERSO"]
  },
  {
    question: "Hai quasi finito",
    type: "FORM_CONTACT"
  },
  {
    question: "Grazie",
    type: "FINAL"
  }
];

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="p-4">
        <Stepper steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;