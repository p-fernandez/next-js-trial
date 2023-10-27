const StepSvg = () => (
  <svg
    className="stepper-tick"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
  >
    <path d="M452.253 28.326L197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z" />
  </svg>
);

export const Step = ({
  indicator,
  label,
  navigateToStepHandler,
  index,
  isActive,
  isCompleted,
  isFailed,
}) => {
  const classes = ['p-5 flex flex-row text-2xl'];

  if (isActive) {
    classes.push('bg-white text-black');
  }
  if (isCompleted) {
    classes.push('text-green-500');
  }

  const computedClasses = `${classes.join(' ')}`;

  return (
    <div className={computedClasses}>
      <div className="w-6">
        <span>{indicator}</span>
      </div>
      <div>{label}</div>
    </div>
  );
};
