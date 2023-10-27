import { Button, InputFile } from '@/_design-system';
import { Submit } from '@/_components/common/forms';

export const SelectPdf = ({
  callback,
  disabled,
  file,
  label,
  name,
  onChange,
  setFile,
  submitText,
}) => {
  if (!file) {
    return (
      <InputFile accept=".pdf" label={label} name={name} onChange={onChange} />
    );
  }

  const selectAnotherFile = () => {
    callback();
    setFile();
  };

  return (
    <>
      <div className="flex items-center justify-around justify-items-center font-mono text-2xl lg:flex">
        {file.name}
      </div>
      <div className="flex items-center justify-center justify-items-center font-mono text-sm lg:flex">
        <Button value="Select another file" onClick={selectAnotherFile} />
        <Submit value={submitText} disabled={disabled} />
      </div>
    </>
  );
};
