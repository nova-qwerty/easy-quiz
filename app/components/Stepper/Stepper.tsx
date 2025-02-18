import React from "react";
import Image from "next/image"
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

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, setCurrentStep }) => {
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 text-white rounded-xl max-w-md mx-auto">
      <div className="w-full relative">
        <div className="relative -top-4 w-full flex justify-between px-2">
          {steps.slice(0, 6).map((_, index) => (
            <span
              key={index}
              className={`text-xl font-bold position-bar position-bar-${index} ${index <= currentStep ? "text-white" : "text-bar-color-active"}`}
            >
              |
            </span>
          ))}
        </div>

        <div className="w-full h-2 bg-bar-color rounded-full overflow-hidden relative">
          <div
            className="h-2 bg-bar-color-active transition-all"
            style={{ width: `${((currentStep + 1) / 7) * 100}%` }} // Máximo en paso 6
          ></div>
        </div>

        <div className="absolute top-2 w-full flex justify-between px-2">
          {steps.slice(0, 6).map((_, index) => (
            <span
              key={index}
              className={`text-sm position-bar text-bar-${index} ${index <= currentStep ? "text-white font-bold" : "text-gray-400"}`}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-semibold text-center margin-text w-full">{steps[currentStep].question}</h2>
      <div className={steps[currentStep].type == "GRID_IMAGE" ? "grid grid-cols-2 gap-4" : "flex flex-col gap-2 w-full"}>
        {steps[currentStep].replies?.map((option, index) => (
          <button
            key={index}
            className={`
              border rounded-lg w-full flex flex-col items-center hover:shadow-lg transition-all 
              ${steps[currentStep].type == "GRID_IMAGE_HORIZONTAL" ? "card-height-double" : 
                steps[currentStep].type == "GRID_IMAGE_VERTICAL" ? "card-height-triple" : "card-height-vertical"
              }`
            }
          >
            <span className="mt-2 font-medium">{option}</span>
            <div className="w-full h-32 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(/logo-giulietta.svg)` }}></div>
          </button>
        ))}
      </div>

      <div className="flex justify-between w-full position-button p-6">
        <div>
          <button
            onClick={handlePrevious}
            style={{ display: currentStep === 0 ? "none" : "" }}
            className={`rounded-md previous-button ${
              currentStep === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            <Image className="rotate-image" src="/arrow.svg" alt="Next arrow" width={10} height={10} />
            INDIETRO
          </button>
        </div>
        <div>
          <button
            onClick={handleNext}
            style={{ display: currentStep === steps.length - 1 ? "none" : "" }}
            className={`rounded-md next-button ${
              currentStep === steps.length - 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            CONTINUA
            <Image src="/arrow.svg" alt="Next arrow" width={10} height={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;