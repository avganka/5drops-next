import Footer from './Footer/Footer';
import Header from './Header/Header';
import {LayoutProps} from './Layout.types';
import styles from './Layout.module.css';

function Layout({children}: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
