'use client';

import { useState } from 'react';

import { httpPost } from '@/_api';
import { Submit, TextArea } from '@/_components/common/forms';
import { Error, Success } from '@/_components/common/messages';

export const Guidelines = ({
  apiUrl,
  callback,
  guidelines,
  setGuidelines,
  setPrediction,
}) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [disabled, setDisabled] = useState('');

  const onChange = (event) => {
    clearMessages();
    setGuidelines(event.target.value);
    setError();
    setSuccess();
  };

  const clearMessages = () => {
    setError();
    setSuccess();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    clearMessages();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setGuidelines(formJson.guidelines);

    if (!guidelines) {
      setError('No guidelines have been provided');
      return;
    }

    try {
      setDisabled('disabled');

      const { response, body } = await httpPost(
        apiUrl,
        JSON.stringify({ guidelines })
      );

      if (!response.ok || response.status >= 400) {
        setError(body.message);
        callback((state) => ({ ...state, isFailed: true, isCompleted: false }));
      } else {
        setSuccess('The guidelines have been successfully uploaded');
        callback((state) => ({ ...state, isFailed: false, isCompleted: true }));
        setPrediction(body.prediction);
      }
    } catch (e) {
      const errorMessage =
        e.message ??
        'There was a problem uploading the guidelines you pasted. Please try again.';
      setError(errorMessage);
      callback((state) => ({ ...state, isCompleted: false, isFailed: true }));
    } finally {
      setDisabled('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <TextArea
        id="guidelines"
        label="Introduce guidelines"
        name="guidelines"
        onChange={onChange}
        placeholder="Paste the guidelines here"
        value={guidelines}
      />
      <div className="flex justify-end">
        <Submit value="Send guidelines" />
      </div>
      <Success message={success} />
      <Error message={error} />
    </form>
  );
};
