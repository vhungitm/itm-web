import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main style={{ padding: '70px 0 24px 0' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
