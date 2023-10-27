import { getPageTitle } from '@/_components/server';

const History = () => <>{getPageTitle()}</>;

export default function MedicalRecordsSearchHistory() {
  return (
    <div className="flex h-full w-screen justify-center text-5xl">
      <History />
    </div>
  );
}
