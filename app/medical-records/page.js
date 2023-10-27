'use client';

import { useState } from 'react';

import {
  DecisionBoard,
  MedicalRecordsUpload,
  Guidelines,
  Stepper,
} from '@/_components/client';
import { getMedicalRecordsPath } from '@/_components/common';

export default function MedicalRecords() {
  const [medicalRecord, setMedicalRecord] = useState();
  const [guidelines, setGuidelines] = useState();
  const [prediction, setPrediction] = useState();
  const [firstStep, setFirstStep] = useState({
    isCompleted: false,
    isFailed: false,
  });
  const [secondStep, setSecondStep] = useState({
    isCompleted: false,
    isFailed: false,
  });

  const resetFlow = () => {
    setFirstStep((state) => ({
      ...state,
      isFailed: false,
      isCompleted: false,
    }));
    setSecondStep((state) => ({
      ...state,
      isFailed: false,
      isCompleted: false,
    }));
    setGuidelines();
    setMedicalRecord();
    setPrediction();
  };

  const stepperContent = [
    {
      label: 'Select medical record',
      content: (
        <MedicalRecordsUpload
          apiUrl="/api/medical-records"
          file={medicalRecord}
          setFile={setMedicalRecord}
          callback={setFirstStep}
        />
      ),
      isFailed: firstStep.isFailed,
      isCompleted: medicalRecord && firstStep.isCompleted,
    },
    {
      label: 'Provide guidelines',
      content: (
        <Guidelines
          apiUrl="/api/guidelines"
          guidelines={guidelines}
          setGuidelines={setGuidelines}
          setPrediction={setPrediction}
          callback={setSecondStep}
        />
      ),
      isFailed: secondStep.isFailed,
      isCompleted: secondStep.isCompleted,
    },
    {
      label: 'Get a prediction',
      content: <DecisionBoard prediction={prediction} />,
      isFailed: !prediction,
      isCompleted: !!prediction,
    },
  ];

  return (
    <div className="flex h-full w-screen">
      <Stepper
        finishAction="Start new prediction"
        stepperContent={stepperContent}
        submitStepper={resetFlow}
      />
    </div>
  );
}
