import { Footer } from '@/_components/common/footer';
import { Header } from '@/_components/common/header';

export const Layout = ({ children }) => {
  return (
    <main className="flex h-screen w-screen flex-col">
      <Header />
      <div className="h-50 flex w-screen flex-row flex-wrap pt-20">
        {children}
      </div>
      <Footer />
    </main>
  );
};
