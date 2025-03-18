import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Image from "next/image";

interface Option {
  answer: string;
  logo: string;
}

interface Step {
  code: string;
  question?: string;
  type: string;
  replies?: Option[];
  message?: string;
  placeholder?: string;
  send?: string;
  consent1?: any;
  consent2?: any;
  options?: any;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  lang?: string;
}

const StepperFormContact: React.FC<
  StepperProps & {
    steps: Step[];
    currentStep: number;
    setCurrentStep: (step: number) => void;
    selections: { [key: number]: string | null };
  }
> = ({ steps, currentStep, setCurrentStep, selections, lang }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [consent1, setConsent1] = useState<string | null>(null);
  const [consent2, setConsent2] = useState<string | null>(null);
  const [isValidFormContact, setValidFormContact] = useState<boolean | null>(
    null
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleEmailClick = () => {
    if(consent1 !== null && consent2 !== null) {
      setValidFormContact(true);
    }else{
      setValidFormContact(false);
    }
  };

  const handleConsentChange = (name: string, value: string) => {
    if (name === "consent1") {
      setConsent1(value);
    } else if (name === "consent2") {
      setConsent2(value);
    }
  
    const newConsent1 = name === "consent1" ? value : consent1;
    const newConsent2 = name === "consent2" ? value : consent2;
  
    // Validar si alguno es null o si consent1 no es "accept"
    if (!newConsent1 || !newConsent2 || newConsent1 !== "accept") {
      setValidFormContact(false);
    } else {
      setValidFormContact(true);
    }
  };

  const handleNext = async () => {
    handleEmailClick();
    const formattedResponses = Object.entries(selections).map(
      ([, value], index) => ({
        code: steps[index]?.code,
        response: value || "",
      })
    );

    const finalData = {
      email,
      responses: formattedResponses,
      lang,
    };

    if (consent1 === "accept" && consent2 !== null) {
      try {
        const response = await axios.post(
          "https://sensus-giulietta-453610.ew.r.appspot.com/save-data",
          finalData,
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );

        if (response.data) {
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        }
      } catch (error) {
        console.error("error on send email", error);
      }
    }
  };

  // Habilitar botón solo si email es válido y los consentimientos cumplen la condición
  const isButtonDisabled = !isValidEmail || !isValidFormContact;

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mt-[75px] md:mt-[80px] text-[25px] w-full">
        <h2 className="text-xl font-semibold">{steps[currentStep].question}</h2>
        <Image src="/Emoji.svg" alt="Smiling face" width={30} height={30} />
      </div>
      <p className="text-center mt-2">{steps[currentStep].message}</p>

      <div className="mt-6">
        <input
          type="email"
          placeholder={steps[currentStep].placeholder}
          className="w-full focus:outline-none input-email mb-2"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          onClick={handleNext}
          className={`w-full transition input-button ${
            isButtonDisabled ? "bg-gray-500 cursor-not-allowed" : ""
          }`}
        >
          {steps[currentStep].send}
        </button>
        {isValidFormContact === false && (
          <p className="text-white-500 text-sm text-center">
            Accetta i termini per procedere
          </p>
        )}
      </div>

      <div className="mt-6 text-[11px]">
        <p className="text-center">{steps[currentStep].consent1.text[0]}</p>
        <p className="w-full text-center m-0 p-0">
          {steps[currentStep].consent1.text[1]}
        </p>
        <p className="w-full text-center m-0 p-0">
          {steps[currentStep].consent1.text[2]}
        </p>
        <p className="w-full text-center m-0 p-0">
          {steps[currentStep].consent1.text[3]}
        </p>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="consent1"
              className="input-radio"
              value="accept"
              onChange={(e) => handleConsentChange("consent1", e.target.value)}
            />
            <span>{steps[currentStep].options.accept}</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="consent1"
              className="input-radio"
              value="not_accept"
              onChange={(e) => handleConsentChange("consent1", e.target.value)}
            />
            <span>{steps[currentStep].options.not_accept}</span>
          </label>
        </div>

        <div className="mt-3">
          <p className="w-full text-center m-0 p-0">
            {steps[currentStep].consent2.text[0]}
          </p>
          <p className="w-full text-center m-0 p-0">
            {steps[currentStep].consent2.text[1]}
          </p>
          <p className="w-full text-center m-0 p-0">
            {steps[currentStep].consent2.text[2]}
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="consent2"
              className="input-radio"
              value="accept"
              onChange={(e) => handleConsentChange("consent2", e.target.value)}
            />
            <span>{steps[currentStep].options.accept}</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="consent2"
              className="input-radio"
              value="not_accept"
              onChange={(e) => handleConsentChange("consent2", e.target.value)}
            />
            <span>{steps[currentStep].options.not_accept}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepperFormContact;