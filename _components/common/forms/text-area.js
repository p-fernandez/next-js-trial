import { InputTextArea } from '@/_design-system';

export const TextArea = ({
  className,
  id,
  label,
  name,
  onChange,
  placeholder,
  value,
}) => {
  const options = {
    ...(className && { className }),
    id,
    label,
    name,
    onChange,
    placeholder,
    value,
  };

  return <InputTextArea rows={20} {...options} />;
};
