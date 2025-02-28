import React, { useState } from "react";
import Image from "next/image"
import "./styles.css";
import StepperImage from "./StepperImage";
import StepperImageHorizontal from "./StepperImageHorizontal";
import StepperImageVertical from "./StepperImageVertical";
import StepperFormContact from "./StepperFormContact";
import StepperFinal from "./StepperFinal";

interface Option {
  answer: string,
  logo: string,
  value: string
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
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
const Stepper: React.FC<StepperProps> = ({ steps, currentStep, setCurrentStep }) => {
  const [selections, setSelections] = useState<{ [key: number]: string | null }>({});

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSelection = (stepIndex: number, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [stepIndex]: value,
    }));
  };

  const stepRequiresSelection = ["GRID_IMAGE", "GRID_IMAGE_HORIZONTAL", "GRID_IMAGE_VERTICAL"].includes(steps[currentStep]?.type);
  const isNextDisabled = stepRequiresSelection && !selections[currentStep];

  return (
    <div className="flex flex-col items-center p-6 text-white rounded-xl max-w-md mx-auto">
      <div className="w-full relative">
        <div className="relative -top-4 w-full flex justify-between px-2">
          {steps.slice(0, 6).map((_, index) => (
            <span
              key={index}
              className={`text-xs font-bold position-bar position-bar-${index} ${index <= currentStep ? "text-white" : "text-bar-color-active"}`}
            >
              |
            </span>
          ))}
        </div>

        <div className="w-full h-2 bg-bar-color rounded-full overflow-hidden relative">
          <div
            className="h-2 bg-bar-color-active transition-all rounded-[5px] bg-bar-border-active"
            style={{ width: `${((currentStep + 1) / 7) * 100}%` }}
          ></div>
        </div>

        <div className="absolute top-2 w-full flex justify-between px-2">
          {steps.slice(0, 6).map((_, index) => (
            <span
              key={index}
              className={`text-xs font-medium position-bar text-bar-${index} ${index <= currentStep ? "text-white font-bold" : "text-gray-400"}`}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>

      <div>
        {
          steps[currentStep]?.type === "GRID_IMAGE"
            ? (<StepperImage steps={steps} currentStep={currentStep} onSelect={handleSelection} selectedOption={selections[currentStep]} />)
            : steps[currentStep]?.type === "GRID_IMAGE_HORIZONTAL"
            ? (<StepperImageHorizontal steps={steps} currentStep={currentStep} onSelect={handleSelection} selectedOption={selections[currentStep]} />)
            : steps[currentStep]?.type === "GRID_IMAGE_VERTICAL"
            ? (<StepperImageVertical steps={steps} currentStep={currentStep} onSelect={handleSelection} selectedOption={selections[currentStep]} />)
            : steps[currentStep]?.type === "FORM_CONTACT"
            ? (<StepperFormContact steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} selections={selections} />)
            : steps[currentStep]?.type === "FINAL"
            ? (<StepperFinal steps={steps} currentStep={currentStep} />)
            : null
        }
      </div>
      {
      steps[currentStep]?.type !== "FORM_CONTACT"  && steps[currentStep]?.type !== "FINAL" 
        ?
          <div className="flex justify-between w-full p-6">
            <div>
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                style={{ display: currentStep === 0 ? "none" : "" }}
                className={`rounded-md previous-button ${currentStep === 0 ? "bg-gray-500 cursor-not-allowed" : ""} text-white`}
              >
                <Image className="rotate-image" src="/Arrow.svg" alt="Previous arrow" width={10} height={10} />
                INDIETRO
              </button>
            </div>
            
            <div>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                style={{ display: currentStep === steps.length ? "none" : "" }}
                className={`text-lg font-normal rounded-md next-button ${isNextDisabled ? "bg-gray-500 cursor-not-allowed" : ""} text-white`}
                >
                CONTINUA
                <Image src="/Arrow.svg" alt="Next arrow" width={10} height={10} />
              </button>
            </div>
          </div>
        : null
      }
    </div>
  );
};


export default Stepper;