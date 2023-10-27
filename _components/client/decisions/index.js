import { Field, FieldValue } from '@/_design-system';

const buildTotalEvidencesMessage = (count) =>
  `ø  ${count} evidence${count === 1 ? ' has' : 's have'} been met`;

const buildAccuracyMessage = (value) =>
  `∆  The estimated accuracy of this prediction is [${value}%]*`;

const calculateAccuracyWeight = (total, score) => {
  const MAXIMUM_ACCURACY = 100;
  const MAXIMUM_SCORE = 10;

  const scorePercentage =
    score > 0 ? (score * MAXIMUM_ACCURACY) / MAXIMUM_SCORE : 0;
  const accuracyWeight = scorePercentage / total;

  return accuracyWeight;
};

const VisualAid = ({ met }) => (
  <div
    className={`${
      met ? 'text-green-500' : 'text-red-500'
    } flex items-center justify-items-center px-10 text-2xl`}
  >
    {met ? '√' : 'X'}
  </div>
);

const Evidence = ({ evidence: { criteria, evidence, met, reasoning } }) => {
  return (
    <div className="flex pb-10 text-xs">
      <VisualAid met={met} />
      <div>
        <Field></Field>
        <FieldValue className="pb-5 text-lg">{evidence}</FieldValue>
        <Field>Criteria</Field>
        <FieldValue className="pl-5">{criteria}</FieldValue>
        <Field>Reasoning</Field>
        <FieldValue className="pl-5">{reasoning}</FieldValue>
      </div>
    </div>
  );
};

const PredictionSummary = ({ numberOfEvidencesMet, accuracy }) => (
  <div className="px-5">
    <p className="text-2xl">
      {buildTotalEvidencesMessage(numberOfEvidencesMet)}
    </p>
    <p className="text-2xl">{buildAccuracyMessage(accuracy)}</p>
  </div>
);

const PredictionMarginNote = () => (
  <div className="pt-2 text-xs">
    <p>
      * Remember this is not a precise figure. Please validate first some of the
      results if spotting something unexpected.
    </p>
  </div>
);

const EvidencesList = ({ evidences }) => (
  <div className="pt-5">
    <ul>
      {evidences.map((ev, i) => (
        <li key={`evidence-${i}`}>{ev}</li>
      ))}
    </ul>
  </div>
);

const DecisionSummary = ({ prediction }) => {
  const evidence = prediction.evidence;

  const numberOfEvidences = evidence.length;
  const mappedEvidences = [];
  let numberOfEvidencesMet = 0;
  let accuracy = 0;
  for (let i = 0; i < numberOfEvidences; i += 1) {
    const rawEvidence = evidence[i];
    mappedEvidences.push(<Evidence evidence={rawEvidence} />);
    if (rawEvidence.met) {
      numberOfEvidencesMet += 1;
    }
    accuracy += calculateAccuracyWeight(numberOfEvidences, rawEvidence.score);
  }

  return (
    <div>
      <PredictionSummary
        numberOfEvidencesMet={numberOfEvidencesMet}
        accuracy={accuracy}
      />
      <EvidencesList evidences={mappedEvidences} />
      <PredictionMarginNote />
    </div>
  );
};

export const DecisionBoard = ({ prediction }) => {
  return prediction && <DecisionSummary prediction={prediction} />;
};
