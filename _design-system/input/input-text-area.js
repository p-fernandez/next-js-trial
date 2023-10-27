export const InputTextArea = ({
  className,
  disabled,
  id,
  label,
  name,
  onChange,
  placeholder,
  rows,
  value,
}) => (
  <label htmlFor={id} className="py-2 text-2xl text-gray-100">
    {label}
    <textarea
      className={`w-full p-1 text-sm text-black ${className}`}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      value={value}
    />
  </label>
);
