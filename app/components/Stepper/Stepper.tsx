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
  logo?: string,
  value: string
}
interface Step {
  code: string,
  question?: any,
  type: string,
  replies?: Option[],
  next?: string,
  previous?: string,
  last?: string,
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
    <div className="flex flex-col items-center pt-[28px] text-black rounded-xl w-[300px] mx-auto">
      <div className="w-[300px]  relative">
      <div className="relative -top-4 w-full flex justify-between px-2">
        {steps.slice(0, steps.length).map((_, index) => (
          <span
            key={index}
            className={`text-[1.5rem] leading-[1.5rem] position-bar absolute 
              ${index <= currentStep ? "text-[#9092ad] z-1" : "text-[#b1b4ce]"}`}
            style={{ left: `${((index + 1) / (steps.length + 1)) * 100}%` }}
          >
            |
          </span>
        ))}
      </div>

        <div className="w-full h-[10px] bg-bar-color rounded-full overflow-hidden relative border border-[#b1b4ce]">
          <div
            className="h-[10px] bg-bar-color-active transition-all rounded-[5px] bg-bar-border-active mt-[-1px]"
            style={{ width: `${((currentStep + 1) / (steps.length + 1)) * 100 + 1.5}%` }}
          ></div>
        </div>

        <div className="absolute top-2 w-full flex justify-between px-2">
          {
            steps.slice(0, steps.length).map((_, index) => (
              <span
                key={index}
                className={`font-medium text-[12px] position-text absolute transform -translate-x-1/2
                  ${index <= currentStep ? "text-black" : "text-gray-400"}`}
                  style={{ left: `${((index + 1) / (steps.length + 1)) * 100 + 1}%` }}
              >
                {index + 1}
              </span>
            ))
          }
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
      steps[currentStep]?.type !== "FORM_CONTACT"
        ?
          <div className="flex justify-between w-[225px] pl-[0] pr-[0] pt-[35px] md:pt-[25px]">
            <div>
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                style={{ display: currentStep === 0 ? "none" : "" }}
                className={`rounded-md previous-button ${currentStep === 0 ? "bg-gray-500 cursor-not-allowed" : ""} text-black`}
              >
                <Image className="rotate-image" src="/Arrow.svg" alt="Previous arrow" width={10} height={10} />
                <span className="text-[18px] font-normal">{steps[0].previous}</span>
              </button>
            </div>
            
            <div>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                style={{ display: currentStep === steps.length ? "none" : "" }}
                className={`text-lg font-normal rounded-md next-button ${isNextDisabled ? "bg-gray-500 cursor-not-allowed" : ""} text-black`}
                >
                  <span className="text-[18px] font-normal">{steps[0].next}</span>
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