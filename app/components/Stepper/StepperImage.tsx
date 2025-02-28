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

const StepperImage: React.FC<StepperProps & { onSelect: (stepIndex: number, value: string) => void, selectedOption: string | null }> = ({ steps, currentStep, onSelect, selectedOption }) => {
  return (
    <div className="mt-4">
      <h2 className="text-4xl font-normal font-semibold text-center margin-text mb-4">{steps[currentStep].question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(currentStep, option.value)}
            className={`border rounded-[3px] border-[#b1b3ce] w-full flex flex-col items-center hover:shadow-lg transition-all card-height-vertical ${selectedOption === option.value ? "bg-[#b1b4ce] text-white border-white" : ""}`}
          >
            <span className={`mt-2 font-medium h-[48px] ${currentStep !== 0 && option.value != "FREDDO" ? "leading-[48px]" : ""}`}>
              {option.answer}
            </span>
            <div className="w-[130px] h-[175px] bg-cover bg-center" style={{ backgroundImage: `url(/${option.logo})` }}></div>
          </button>
        ))}
      </div>
    </div>
  );
};



export default StepperImage;