import React from "react";
import "./styles.css";


interface Option {
  answer: string,
  logo: string,
  value:string
}
interface Step {
  code: string,
  question?: any,
  type: string,
  replies?: Option[],
}
interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const StepperImageVertical: React.FC<StepperProps & { onSelect: (stepIndex: number, value: string) => void, selectedOption: string | null }> = ({ steps, currentStep, onSelect, selectedOption }) => {
  return (
    <div className="w-[300px]">
      <div className="flex items-center flex-col justify-center">
        <span className="text-[25px] font-normal text-center h-[37px] mt-[80px]">{steps[currentStep].question[0]}</span>
        <span className="text-[25px] font-normal text-center mb-4">{steps[currentStep].question[1]}</span>
      </div>
      <div className="flex flex-col gap-2 w-full h-[249px]">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(currentStep, option.value)}
            style={{ backgroundImage: `url(/${option.logo})` }}
            className={`border rounded-[3px] border-[#b1b3ce] w-full flex flex-col items-center hover:shadow-lg transition-all card-height-triple ${selectedOption === option.value ? "bg-[#b1b4ce] text-white border-white" : ""}`}
          >
            <span className="mt-2 text-[15px] font-normal h-[48px] leading-[50px] text-custom-center">{option.answer}</span>
          </button>
        ))}
      </div>
    </div>
  );
};



export default StepperImageVertical;