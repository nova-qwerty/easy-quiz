import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Image from "next/image";

interface Option {
  answer: string,
  logo?: string,
}
interface Step {
  code: string,
  question?: string,
  type: string,
  replies?: Option[],
  message?: string,
  placeholder?: string,
  send?: string,
  consent1?: any,
  consent2?: any,
  options?: any,
}
interface StepperProps {
  steps: Step[];
  currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepperFormContact: React.FC<StepperProps & { steps: Step[], currentStep: number, setCurrentStep: (step: number) => void, selections: { [key: number]: string | null } }> = ({ steps, currentStep, setCurrentStep, selections }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [consent1, setConsent1] = useState<string | null>(null);
  const [consent2, setConsent2] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleNext = async () => {
    if (!isValidEmail || !consent1 || !consent2) return;

    const formattedResponses = Object.entries(selections).map(([, value], index) => ({
      code: steps[index]?.code,
      response: value || ""
    }));

    const finalData = {
      email,
      responses: formattedResponses,
    };

    if (consent1 == "accept" && consent2 == "accept") {
      try {
        const response = await axios.post(
          "https://giorgiainitaliano.ew.r.appspot.com/save-data", 
          finalData, {
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          }
        });
  
        if (response.data) {
          if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
          }
        }
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    }

  };

  // Deshabilitar botón si el email es inválido o si falta algún consentimiento
  const isButtonDisabled = !isValidEmail || !consent1 || !consent2;

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mt-[75px] md:mt-[80px] text-[25px] w-full">
        <h2 className="text-xl font-semibold">{steps[currentStep].question}</h2>
        <Image src="/Emoji.svg" alt="Smiling face" width={30} height={30}/>
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
          disabled={isButtonDisabled} 
          className={`w-full transition input-button ${isButtonDisabled ? "bg-gray-500 cursor-not-allowed" : ""}`}
        >
          {steps[currentStep].send}
        </button>
      </div>

      <div className="mt-6 text-[11px]">
        <p className="text-center">{steps[currentStep].consent1.text[0]}</p>
        <p className="w-full text-center m-0 p-0">{steps[currentStep].consent1.text[1]}</p>
        <p className="w-full text-center m-0 p-0">{steps[currentStep].consent1.text[2]}</p>
        <p className="w-full text-center m-0 p-0">{steps[currentStep].consent1.text[3]}</p>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" value="accept" onChange={(e) => setConsent1(e.target.value)} />
            <span>{steps[currentStep].options.accept}</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" value="not_accept" onChange={(e) => setConsent1(e.target.value)} />
            <span>{steps[currentStep].options.not_accept}</span>
          </label>
        </div>

        <div className="mt-3">
          <p className="w-full text-center m-0 p-0">{steps[currentStep].consent2.text[0]}</p>
          <p className="w-full text-center m-0 p-0">{steps[currentStep].consent2.text[1]}</p>
          <p className="w-full text-center m-0 p-0">{steps[currentStep].consent2.text[2]}</p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" value="accept" onChange={(e) => setConsent2(e.target.value)} />
            <span>{steps[currentStep].options.accept}</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" value="not_accept" onChange={(e) => setConsent2(e.target.value)} />
            <span>{steps[currentStep].options.not_accept}</span>
          </label>
        </div>
      </div>
    </div>
  );
};




export default StepperFormContact;