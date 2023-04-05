import Footer from './Footer/Footer';
import Header from './Header/Header';
import {LayoutProps} from './Layout.types';
import styles from './Layout.module.css';
import Navigation from './Navigation/Navigation';

function Layout({children}: LayoutProps): JSX.Element {
  return (
    <>
      <Header className={styles.maxWidth} />
      <Navigation className={styles.maxWidth} />
      <main className={styles.maxWidth}>{children}</main>
      <Footer className={styles.maxWidth} />
    </>
  );
}

export default Layout;
