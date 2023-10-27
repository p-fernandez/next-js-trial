import { Step } from './step';

export const StepperHeader = ({
  stepperContent,
  navigateToStepHandler,
  currentTabIndex,
}) => (
  <div
    className={`flex w-screen items-center justify-around justify-items-center font-mono text-sm lg:flex`}
  >
    {stepperContent.map((el, i) => (
      <Step
        key={i}
        index={i}
        navigateToStepHandler={navigateToStepHandler}
        isActive={i === currentTabIndex}
        isCompleted={el.isCompleted}
        isFailed={el.isFailed}
        indicator={i + 1}
        label={el.label}
      />
    ))}
  </div>
);
