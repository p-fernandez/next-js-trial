import Link from 'next/link';

import { menu } from '@/_components/common/sitemap';

const FooterMenuEntry = ({ menuEntry }) => (
  <Link
    href={menuEntry.url}
    className="group h-auto rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    rel="noopener noreferrer"
  >
    <h2 className={`mb-3 text-2xl font-semibold`}>
      {menuEntry.title}{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      {menuEntry.description}
    </p>
  </Link>
);

export const Footer = () => (
  <footer className="bottom-0 flex w-screen justify-around">
    {Object.values(menu).map((menuEntry) => (
      <FooterMenuEntry key={menuEntry.key} menuEntry={menuEntry} />
    ))}
  </footer>
);
