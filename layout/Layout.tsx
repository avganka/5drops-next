import Footer from './Footer/Footer';
import Header from './Header/Header';
import {PropsWithChildren} from 'react';

function Layout({children}: PropsWithChildren): JSX.Element {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
