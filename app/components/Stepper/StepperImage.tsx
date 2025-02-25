import React from "react";
import "./styles.css";

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
}

const StepperImage: React.FC<StepperProps & { onSelect: (stepIndex: number, value: string) => void, selectedOption: string | null }> = ({ steps, currentStep, onSelect, selectedOption }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-center margin-text mb-4">{steps[currentStep].question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(currentStep, option.answer)}
            className={`border rounded-lg w-full flex flex-col items-center hover:shadow-lg transition-all card-height-vertical ${selectedOption === option.answer ? "bg-gray-500 text-white" : ""}`}
          >
            <span className="mt-2 font-medium">{option.answer}</span>
            <div className="w-full h-full bg-cover bg-center rounded-b-md" style={{ backgroundImage: `url(/${option.logo})` }}></div>
          </button>
        ))}
      </div>
    </div>
  );
};



export default StepperImage;