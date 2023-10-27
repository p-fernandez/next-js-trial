export const Input = ({
  accept,
  className,
  disabled,
  name,
  onChange,
  type,
  value,
}) => {
  const props = {
    type,
    name,
    ...(accept && { accept }),
    ...(disabled && { disabled }),
    ...(onChange && { onChange }),
    ...(value && { value }),
  };

  const computedClassName = disabled
    ? `${className} bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" disabled`
    : `${className} bg-white-500 hover:bg-white-600 active:bg-white-800 px-4 py-2 rounded-md text-white`;

  return <input className={computedClassName} {...props} />;
};
