import { Input } from './input';

export const InputSubmit = ({ className, disabled, value }) => (
  <Input
    className={`group m-5 cursor-pointer rounded-lg border border-white p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${className}`}
    type="submit"
    value={value}
    disabled={disabled}
  />
);
