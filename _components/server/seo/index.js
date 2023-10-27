import { getPageDescription, getPageTitle } from '@/_components/server/pages';

export const generateSeoForPage = () => {
  return {
    title: getPageTitle() || 'Co:Helm',
    description: getPageDescription() || 'This is a Co:Helm page',
  };
};
