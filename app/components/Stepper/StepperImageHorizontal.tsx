import React from "react";
import "./styles.css";

interface Option {
  answer: string,
  logo: string,
  value:string
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
}

const StepperImageHorizontal: React.FC<StepperProps & { onSelect: (stepIndex: number, value: string) => void, selectedOption: string | null }> = ({ steps, currentStep, onSelect, selectedOption }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-center margin-text mb-4">{steps[currentStep].question}</h2>
      <div className="flex flex-col gap-2 w-full">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(currentStep, option.value)}
            style={{ backgroundImage: `url(/${option.logo})` }}
            className={`border rounded-[3px] w-full hover:shadow-lg transition-all card-height-double ${selectedOption === option.value ? "bg-gray-500 text-white" : ""}`}
          >
            <div className="flex flex-col items-center text-center  w-full">
              {option.answer.replace(" ", "\n").split("\n").map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};



export default StepperImageHorizontal;