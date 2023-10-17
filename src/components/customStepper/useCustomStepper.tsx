import { useState } from "react";

const useCustomHook = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return {
    activeStep,
    handleNext,
    handleBack,
    handleStepChange,
  };
};
export default useCustomHook;
