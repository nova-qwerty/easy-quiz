import React, { useState } from "react";
import axios from "axios";
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

// const StepperFormContact: React.FC<StepperProps & { steps: Step[], currentStep: number, selections: { [key: number]: string | null } }> = ({ steps, currentStep, setCurrentStep, selections }) => {
//   const handleNext = () => {
//     // if (currentStep < steps.length - 1) {
//     //   setCurrentStep((prev) => prev + 1);
//     // }
//     console.log("Respuestas seleccionadas:", selections);
//   };
//   return (
//     <div>
//       <h2 className="text-xl font-semibold text-center margin-text w-full">{steps[currentStep].question}</h2>
//       <p className="text-center mt-2">Inserisci la tua mail e scopri il risultato</p>

//       <div className="mt-6">
//         <input 
//           type="email" 
//           placeholder="Il tuo indirizzo mail" 
//           className="w-full focus:outline-none input-email mb-2"
//         />
//         <button
//           onClick={handleNext}
//           className="w-full transition input-button">
//           INVIA
//         </button>
//       </div>

//       <div className="mt-6 text-[11px]">
//         <p className="text-center">Preso atto dell&apos;informativa e avendola compresa</p>

//         <p className="w-full text-center m-0 p-0">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
//         <p className="w-full text-center m-0 p-0">finalita indicate al punto 2 lett. A della informativa (in sintesi: per</p>
//         <p className="w-full text-center m-0 p-0">rispondere alla richiesta)</p>

//         <div className="flex justify-center items-center space-x-8 mt-3">
//           <label className="flex items-center space-x-1">
//             <input type="radio" name="consent1" className="input-radio" />
//             <span>Acconsento</span>
//           </label>
//           <label className="flex items-center space-x-1">
//             <input type="radio" name="consent1" className="input-radio" />
//             <span>Non Acconsento</span>
//           </label>
//         </div>

//         <div className="mt-3">
//           <p className="w-full text-center m-0 p-0">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
//           <p className="w-full text-center m-0 p-0">finalita indicate al punto 2 lett. A della informativa (in sintesi</p>
//           <p className="w-full text-center m-0 p-0">ricezione di comunicazioni pubblicitarie/informative)</p>
//         </div>

//         <div className="flex justify-center items-center space-x-8 mt-3">
//           <label className="flex items-center space-x-1">
//             <input type="radio" name="consent2" className="input-radio" />
//             <span>Acconsento</span>
//           </label>
//           <label className="flex items-center space-x-1">
//             <input type="radio" name="consent2" className="input-radio" />
//             <span>Non Acconsento</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

const StepperFormContact: React.FC<StepperProps & { steps: Step[], currentStep: number, setCurrentStep: (step: number) => void, selections: { [key: number]: string | null } }> = ({ steps, currentStep, setCurrentStep, selections }) => {
  const [email, setEmail] = useState("");

  const handleNext = async () => {
    const formattedResponses = Object.entries(selections).map(([, value], index) => ({
      code: `STEP_${index + 1}`,
      response: value || ""
    }));

    const finalData = {
      email: email,
      response: formattedResponses
    };

    try {
      const response = await axios.post(
        "https://easy-quiz-361443445667.europe-west1.run.app/save-data", 
        finalData, {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        }
      });

      if (response.data) {
        if (currentStep < steps.length - 1) {
          setCurrentStep((prev) => prev + 1);
        }
      }
  
      console.log("Respuesta de la API:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center margin-text w-full">{steps[currentStep].question}</h2>
      <p className="text-center mt-2">Inserisci la tua mail e scopri il risultato</p>

      <div className="mt-6">
        <input 
          type="email" 
          placeholder="Il tuo indirizzo mail" 
          className="w-full focus:outline-none input-email mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleNext}
          className="w-full transition input-button">
          INVIA
        </button>
      </div>

      <div className="mt-6 text-[11px]">
        <p className="text-center">Preso atto dell&apos;informativa e avendola compresa</p>
        <p className="w-full text-center m-0 p-0">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
        <p className="w-full text-center m-0 p-0">finalita indicate al punto 2 lett. A della informativa (in sintesi: per</p>
        <p className="w-full text-center m-0 p-0">rispondere alla richiesta)</p>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" />
            <span>Acconsento</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent1" className="input-radio" />
            <span>Non Acconsento</span>
          </label>
        </div>

        <div className="mt-3">
          <p className="w-full text-center m-0 p-0">Acconsento (barrando l&apos;apposita casella) al trattamento per le</p>
          <p className="w-full text-center m-0 p-0">finalita indicate al punto 2 lett. A della informativa (in sintesi</p>
          <p className="w-full text-center m-0 p-0">ricezione di comunicazioni pubblicitarie/informative)</p>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-3">
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" required />
            <span>Acconsento</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="radio" name="consent2" className="input-radio" required />
            <span>Non Acconsento</span>
          </label>
        </div>
      </div>
    </div>
  );
}


export default StepperFormContact;