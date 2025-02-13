import React from "react";
import "./styles.css";

interface StepperProps {
  steps: string[];
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
      {/* Contenedor del Stepper */}
      <div className="w-full relative">
        {/* Indicadores tipo "termómetro" */}
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

        {/* Barra de progreso (solo hasta el paso 6) */}
        <div className="w-full h-2 bg-bar-color rounded-full overflow-hidden relative">
          <div
            className="h-2 bg-bar-color-active transition-all"
            style={{ width: `${((currentStep + 1) / 7) * 100}%` }} // Máximo en paso 6
          ></div>
        </div>

        {/* Números de pasos (solo del 1 al 6) */}
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

      {/* Texto del paso actual */}
      <h2 className="text-lg font-semibold text-center margin-text">{steps[currentStep]}</h2>

      {/* Botones de navegación */}
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded-md ${
            currentStep === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          Indietro
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 rounded-md ${
            currentStep === steps.length - 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          Continua
        </button>
      </div>
    </div>
  );
};

export default Stepper;