'use client';

import { useState } from 'react';

import { httpPost } from '@/_api';
import { SelectPdf } from '@/_components/common/files';
import { Error, Success } from '@/_components/common/messages';

const buildUploadSuccessMessage = (message, fileName) =>
  `The file ${fileName} has been ${message}`;

export const MedicalRecordsUpload = ({
  apiUrl,
  callback,
  file,
  label,
  name,
  setFile,
  submitText,
}) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [disabled, setDisabled] = useState('');

  const cleanMessages = () => {
    setError();
    setSuccess();
  };

  const onChange = (event) => {
    cleanMessages();
    callback((state) => ({ ...state, isCompleted: false, isFailed: false }));
    setFile(event.target.files?.[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    cleanMessages();

    if (!file) {
      setError('No file has been selected');
      return;
    }

    try {
      setDisabled('disabled');

      const data = new FormData();
      data.set('file', file);

      const { response, body } = await httpPost(apiUrl, data);

      if (!response.ok || response.status >= 400) {
        setError(body.message);
        callback((state) => ({ ...state, isFailed: true, isCompleted: false }));
      } else {
        setSuccess(
          buildUploadSuccessMessage('sucessfully uploaded', body.fileName)
        );
        callback((state) => ({ ...state, isFailed: false, isCompleted: true }));
      }
    } catch (e) {
      const errorMessage =
        e.message ??
        'There was a problem uploading the file you selected. Please try again.';
      setError(errorMessage);
      callback((state) => ({ ...state, isCompleted: false, isFailed: true }));
    } finally {
      setDisabled('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <SelectPdf
        callback={cleanMessages}
        disabled={disabled}
        label="Select a medical record"
        name="medical-records"
        file={file}
        setFile={setFile}
        onChange={onChange}
        submitText="Upload medical record"
      />
      <Success message={success} />
      <Error message={error} />
    </form>
  );
};
