import React from "react";
import Image from "next/image"
import "./styles.css";

interface Option {
  answer: string,
  logo: string,
}
interface Step {
  code: string,
  question?: string,
  type: string,
  replies?: Option[],
  email_check?: any,
  store_locator?: string,
}
interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const StepperFinal: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div>
      <Image className="margin-image" src="/Emoji.svg" alt="Smiling face" width={100} height={100}/>
      <h2 className="text-xl font-semibold text-center margin-text w-full">{steps[currentStep].question}</h2>

      <div className="margin-text-2">
        <p className="text-center m-0 p-0 paragraf-text-2">{steps[currentStep].email_check.text[0]}</p>
        <p className="text-center m-0 p-0 paragraf-text-2">{steps[currentStep].email_check.text[1]}</p>
      </div>

      <button
        className="w-full transition input-button px-3 mt-4"
        onClick={() => window.open("https://www.ilovesensus.it/salon-locator/", "_blank")}
        >
          {steps[currentStep].store_locator}
      </button>
      
    </div>
  );
}

export default StepperFinal;