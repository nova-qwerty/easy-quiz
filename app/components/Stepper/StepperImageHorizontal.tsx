import React from "react";
import "./styles.css";
import { StepperProps } from "./stepper.interface"


const StepperImageHorizontal: React.FC<StepperProps & { onSelect: (stepIndex: number, value: string) => void, selectedOption: string | null }> = ({ steps, currentStep, onSelect, selectedOption }) => {
  return (
    <div className="mt-4">
      <h2 className="text-[25px] font-normal text-center mt-[75px] md:mt-[80px] mb-4">{steps[currentStep].question}</h2>
      <div className="flex flex-col gap-2 w-full h-[249px]">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(currentStep, option.value)}
            style={{ backgroundImage: `url(/${option.logo})` }}
            className={`border-[2px] rounded-[3px] border-[#b1b3ce] w-full hover:shadow-lg transition-all card-height-double ${selectedOption === option.value ? "bg-[#b1b4ce] text-white border-white" : ""}`}
          >
            <div className="flex flex-col items-center text-center  w-full">
              {option.answer.replace(" ", "\n").split("\n").map((line, index) => (
                <span key={index} className="block text-[15px] font-normal">{line}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};



export default StepperImageHorizontal;