import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Image from "next/image";

interface Option {
  answer: string,
  logo: string,
}
interface Step {
  code: string,
  question: string,
  type: string,
  replies?: Option[],
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
          "https://easy-quiz-361443445667.europe-west1.run.app/save-data", 
          finalData, {
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          }
        });
  
        if (response.data) {
          if (currentStep < steps.length - 1) {
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
      <div className="flex items-center justify-center gap-4 margin-text w-full">
        <h2 className="text-xl font-semibold">{steps[currentStep].question}</h2>
        <Image src="/Emoji.svg" alt="Smiling face" width={30} height={30}/>
      </div>
      <p className="text-center mt-2">Inserisci la tua mail e scopri il risultato</p>

      <div className="mt-6">
        <input 
          type="email" 
          placeholder="Il tuo indirizzo mail" 
          className="w-full focus:outline-none input-email mb-2"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {/* {!isValidEmail && email.length > 0 && ( 
          <p className="text-white-500 text-sm text-center">Inserisci una email valida</p>
        )} */}
        <button
          onClick={handleNext}
          disabled={isButtonDisabled} 
          className={`w-full transition input-button ${isButtonDisabled ? "bg-gray-500 cursor-not-allowed" : ""}`}
        >
          INVIA
        </button>
      </div>

      <div className="mt-6 text-[11px]">
        <p className="text-center">Preso atto dell&apos;informativa e avendola compresa</p>
        <p className="w-full text-center m-0 p-0">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
        <p className="w-full text-center m-0 p-0">finalita indicate al punto 2 lett. A della informativa (in sintesi: per</p>
        <p className="w-full text-center m-0 p-0">rispondere alla richiesta)</p>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" value="accept" onChange={(e) => setConsent1(e.target.value)} />
            <span>Acconsento</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" value="not_accept" onChange={(e) => setConsent1(e.target.value)} />
            <span>Non Acconsento</span>
          </label>
        </div>

        <div className="mt-3">
          <p className="w-full text-center m-0 p-0">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
          <p className="w-full text-center m-0 p-0">finalita indicate al punto 2 lett. A della informativa (in sintesi</p>
          <p className="w-full text-center m-0 p-0">ricezione di comunicazioni pubblicitarie/informative)</p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" value="accept" onChange={(e) => setConsent2(e.target.value)} />
            <span>Acconsento</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" value="not_accept" onChange={(e) => setConsent2(e.target.value)} />
            <span>Non Acconsento</span>
          </label>
        </div>
      </div>
    </div>
  );
};




export default StepperFormContact;