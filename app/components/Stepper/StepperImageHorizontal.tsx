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
}

const StepperImageHorizontal: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-center margin-text mb-4 w-full">{steps[currentStep].question}</h2>
      <div className="flex flex-col gap-2 w-full">
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            className="border rounded-lg w-full flex flex-col items-center hover:shadow-lg transition-all card-height-double"
          >
            <span className="mt-2 font-medium">{option}</span>
            <div className="w-full h-32 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(/logo-giulietta.svg)` }}></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default StepperImageHorizontal;