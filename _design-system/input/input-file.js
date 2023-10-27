import { Input } from './input';

export const InputFile = ({
  accept,
  className,
  label = '',
  name,
  onChange,
}) => (
  <label className="text-xl text-gray-100">
    {label} -&gt;
    <Input
      className={`border-solid cursor-point ${className}`}
      type="file"
      accept={accept}
      name={name}
      onChange={onChange}
    />
  </label>
);
