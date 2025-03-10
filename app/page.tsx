"use client";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Stepper from "./components/Stepper/Stepper";
import Footer from "./components/Footer/Footer";
import Thanks from "./components/Thanks/Thanks";
import Result from "./components/Result/Result";
import { steps } from "./config"

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
            steps={steps[language]}
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
