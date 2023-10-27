import { InputSubmit } from '@/_design-system';

export const Submit = ({ className, disabled, value }) => {
  const options = {
    value,
    ...(disabled && { disabled }),
  };

  return <InputSubmit className={`h-10 ${className}`} {...options} />;
};
