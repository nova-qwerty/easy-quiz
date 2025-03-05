import React from "react";
import "./styles.css";

interface Option {
  answer: string,
  logo: string,
  value:string
}
interface Step {
  code: string,
  question?: string,
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
      <h2 className="text-[36px] font-normal text-center margin-text mb-4">{steps[currentStep].question}</h2>
      <div className="grid grid-cols-2 gap-4 h-[249px] md:w-[636px]">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(currentStep, option.value)}
            className={`border rounded-md border-[#b1b3ce] w-full md:w-[310px] flex flex-col items-center hover:shadow-lg transition-all p-2 md:p-4 
            ${selectedOption === option.value ? "bg-[#b1b4ce] text-white border-white" : "bg-transparent"}`}
          >
            <span className={`mt-2 text-[15px] font-normal h-[48px] md:h-auto md:mb-2 text-center ${currentStep === 1 || currentStep === 2 && option.value != "FREDDO"  ? "leading-[39px]" : ""}`}>{option.answer}</span>
            <div 
              className="w-[130px] h-[175px] md:w-[290px] bg-cover bg-center" 
              style={{ backgroundImage: `url(/${option.logo})` }}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};



export default StepperImage;