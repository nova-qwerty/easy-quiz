"use client";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Stepper from './components/Stepper/Stepper';

const steps = [
  "Qual'è il sottotono della tua pelle?",
  "Qual'è il colore della tue labbra?",
  "Qual è il colore della tua pelle dopo l'abbronzatura?",
  "Qual'è il colore naturale dei tuoi capelli?",
  "Qual è il colore delle tue soppracciglia?",
  "Com'è il tuo carattere?",
  "Hai quasi finito",
  "Grazie"
];

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4">
        <Stepper steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </main>
    </div>
  );
};

export default Home;