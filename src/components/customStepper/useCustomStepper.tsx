import { useState } from "react";

const useCustomHook = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (maxSteps: number) => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep < maxSteps - 1 ? prevActiveStep + 1 : 0
    );
  };

  const handleBack = (maxSteps: number) => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return {
    activeStep,
    handleNext,
    handleBack,
  };
};
export default useCustomHook;
