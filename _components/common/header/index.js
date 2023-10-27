import Link from 'next/link';

export const Header = () => (
  <div className="flex h-20 w-screen">
    <h1 className="p-5 text-4xl">
      <Link href="https://www.co-helm.com/" target="_blank">
        Co:Helm
      </Link>
    </h1>
  </div>
);
