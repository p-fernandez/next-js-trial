import { redirect } from 'next/navigation';

import { getMedicalRecordsPath } from '@/_components/common';

export default function Home() {
  redirect(getMedicalRecordsPath());
}
