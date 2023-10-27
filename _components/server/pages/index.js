import { headers } from 'next/headers';

import {
  getPageDescriptionFromPath,
  getPageTitleFromPath,
} from '@/_components/common';

const getCoHelmHeader = () => {
  const headersList = headers();
  return headersList.get('co-helm-url') || '';
};

export const getPageDescription = () => {
  const headerUrl = getCoHelmHeader();
  return getPageDescriptionFromPath(headerUrl);
};

export const getPageTitle = () => {
  const headerUrl = getCoHelmHeader();
  return getPageTitleFromPath(headerUrl);
};
