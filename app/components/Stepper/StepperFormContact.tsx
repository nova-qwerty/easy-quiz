import React from "react";
import "./styles.css";

interface Step {
  question: string,
  type: string,
  replies?: string[]
}
interface StepperProps {
  steps: Step[];
  currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepperFormContact: React.FC<StepperProps> = ({ steps, currentStep, setCurrentStep }) => {
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold text-center margin-text w-full">{steps[currentStep].question}</h2>
      <p className="text-center mt-2">Inserisci la tua mail e scopri il risultato</p>
      <input 
        type="email" 
        placeholder="Il tuo indirizzo mail" 
        className="w-full focus:outline-none input-email mb-2"
      />
      
      <button
        onClick={handleNext}
        className="w-full transition input-button">
        INVIA
      </button>
      <div className="mt-6 text-sm">
        <p className="text-center">Preso atto dell&apos;informativa e avendola compresa</p>

        <p className="w-full text-center m-0 p-0 whitespace-nowrap">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
        <p className="w-full text-center m-0 p-0 whitespace-nowrap">finalita indicate al punto 2 lett. A della informativa (in sintesi: per</p>
        <p className="w-full text-center m-0 p-0 whitespace-nowrap">rispondere alla richiesta)</p>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" />
            <span>Acconsento</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" />
            <span>Non Acconsento</span>
          </label>
        </div>

        <div className="mt-3">
          <p className="w-full text-center m-0 p-0 whitespace-nowrap">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
          <p className="w-full text-center m-0 p-0 whitespace-nowrap">finalita indicate al punto 2 lett. A della informativa (in sintesi</p>
          <p className="w-full text-center m-0 p-0 whitespace-nowrap">ricezione di comunicazioni pubblicitarie/informative)</p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" />
            <span>Acconsento</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" />
            <span>Non Acconsento</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default StepperFormContact;