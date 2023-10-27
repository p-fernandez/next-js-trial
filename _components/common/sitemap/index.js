import { BASE_URL, urls, MEDICAL_RECORDS, SEARCH_HISTORY } from '@/_constants';

const buildUrl = (key) => `${BASE_URL}${urls[key]}`;

export const menu = {
  [MEDICAL_RECORDS]: {
    key: 'medical-records',
    title: MEDICAL_RECORDS,
    description: 'Go to medical records page',
    url: buildUrl(MEDICAL_RECORDS),
  },
  [SEARCH_HISTORY]: {
    key: 'medical-records-search-history',
    title: SEARCH_HISTORY,
    description:
      'Go to the search history to review the medical records submitted',
    url: buildUrl(SEARCH_HISTORY),
  },
};

const getUrlPath = (menuEntry) => menu[menuEntry].url;

export const getMedicalRecordsPath = () => getUrlPath(MEDICAL_RECORDS);

export const getPageTitleFromPath = (path) =>
Object.values(menu).find((menuEntry) => menuEntry.url === path)?.title;
export const getPageDescriptionFromPath = (path) =>
  Object.values(menu).find((menuEntry) => menuEntry.url === path)?.description;
