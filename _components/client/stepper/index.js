'use client';

import { useState } from 'react';

import { StepperFooter } from './stepper-footer';
import { StepperHeader } from './stepper-header';

export const Stepper = ({ finishAction, stepperContent, submitStepper }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const isLastStep = currentTabIndex === stepperContent.length - 1;
  const isPreviousButton = currentTabIndex !== 0;

  const navigateToStepHandler = (index) => {
    if (index !== currentTabIndex) {
      setCurrentTabIndex(index);
    }
  };

  const nextStepHandler = () => {
    setCurrentTabIndex((prev) => {
      if (prev !== stepperContent.length - 1) {
        return prev + 1;
      }
    });
  };

  const previousStepHandler = () => {
    setCurrentTabIndex((prev) => prev - 1);
  };

  const resetFlow = () => {
    setCurrentTabIndex(0);
    submitStepper();
  };

  return (
    <div className="flex w-screen flex-row flex-wrap">
      <div className="flex w-screen flex-row flex-wrap justify-center">
        <StepperHeader
          stepperContent={stepperContent}
          navigateToStepHandler={navigateToStepHandler}
          currentTabIndex={currentTabIndex}
        />
      </div>
      <div className="y-80 flex w-screen flex-row flex-wrap justify-center py-10">
        {stepperContent.map((el, i) => (
          <div className="flex w-screen justify-center" key={i}>
            {i === currentTabIndex && el.content}
          </div>
        ))}
      </div>
      <div className="flex w-screen flex-row flex-wrap justify-center">
        <StepperFooter
          finishAction={finishAction}
          isPreviousButton={isPreviousButton}
          previousStepHandler={previousStepHandler}
          isLastStep={isLastStep}
          nextStepHandler={nextStepHandler}
          submitHandler={resetFlow}
          stepperContent={stepperContent}
          currentTabIndex={currentTabIndex}
        />
      </div>
    </div>
  );
};
