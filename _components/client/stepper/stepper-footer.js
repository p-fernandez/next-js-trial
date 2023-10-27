export const StepperFooter = ({
  finishAction,
  isPreviousButton,
  previousStepHandler,
  isLastStep,
  nextStepHandler,
  submitHandler,
  stepperContent,
  currentTabIndex,
}) => {
  const submitCurrentStep = async () => {
    await stepperContent[currentTabIndex].clicked();
    nextStepHandler();
  };

  const canGoForward = stepperContent[currentTabIndex]?.isCompleted;
  const canGoBack = stepperContent[currentTabIndex - 1]?.isCompleted;
  const classes = `group rounded-lg border border-transparent m-5 p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`;

  return (
    <div className="flex-end flex w-full justify-center">
      {isPreviousButton && (
        <button
          className={`${classes} ${!canGoBack && 'opacity-50'}`}
          onClick={previousStepHandler}
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            &lt;-
          </span>
          Back to {stepperContent[currentTabIndex - 1].label}
        </button>
      )}
      <button
        className={`${classes} ${!canGoForward && 'opacity-50'}`}
        onClick={
          isLastStep
            ? submitHandler
            : stepperContent[currentTabIndex].clicked
            ? submitCurrentStep
            : nextStepHandler
        }
        disabled={
          isLastStep
            ? stepperContent.some((el) => !el.isCompleted)
            : !stepperContent[currentTabIndex].isCompleted
        }
      >
        {isLastStep
          ? finishAction
          : `Continue to ${stepperContent[currentTabIndex + 1].label}`}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </button>
    </div>
  );
};
