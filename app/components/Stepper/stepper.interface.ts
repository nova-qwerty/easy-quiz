export  interface Option {
    answer: string,
    logo: string,
    value:string
}

export interface Step {
    code: string,
    question?: any,
    type: string,
    replies?: Option[],
    next?: string,
    previous?: string,
    last?: string,
    email_check?: any,
    store_locator?: string,
    message?: string,
    placeholder?: string,
    send?: string,
    consent1?: any,
    consent2?: any,
    options?: any,
}

export interface StepperProps {
    steps: Step[];
    currentStep: number;
    setCurrentStep?: React.Dispatch<React.SetStateAction<number>> | null;

}