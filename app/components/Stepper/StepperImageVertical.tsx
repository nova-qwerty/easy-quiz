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

const StepperImageVertical: React.FC<StepperProps & { onSelect: (stepIndex: number, value: string) => void, selectedOption: string | null }> = ({ steps, currentStep, onSelect, selectedOption }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center margin-text mb-4">{steps[currentStep].question}</h2>
      <div className="flex flex-col gap-2 w-full">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(currentStep, option.value)}
            style={{ backgroundImage: `url(/${option.logo})` }}
            className={`border rounded-[3px] w-full flex flex-col items-center hover:shadow-lg transition-all card-height-triple ${selectedOption === option.value ? "bg-gray-500 text-white" : ""}`}
          >
            <span className="mt-2 font-medium h-[48px] text-custom-center">{option.answer}</span>
          </button>
        ))}
      </div>
    </div>
  );
};



export default StepperImageVertical;