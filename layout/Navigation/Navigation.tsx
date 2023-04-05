import cn from 'classnames';
import {NavigationProps} from './Navigation.types';
import styles from './Navigation.module.css';
import CatalogIcon from '../../public/catalog.svg';
import LightningIcon from '../../public/lightning.svg';
import Link from 'next/link';

function Navigation({menu, className, ...props}: NavigationProps): JSX.Element {
  return (
    <nav className={styles.navigation} {...props}>
      <div className={styles.colorWrapper}>
        <div className={cn(className, styles.navigationWrapper)}>
          <Link href={'#'} className={styles.navigationItem}>
            <CatalogIcon />
            Каталог
          </Link>
          <Link href={'#'} className={styles.navigationItem}>
            <LightningIcon />
            Опт
          </Link>
          <Link href={'#'} className={styles.navigationItem}>
            О компании
          </Link>
          <Link href={'#'} className={styles.navigationItem}>
            Прайс-лист
          </Link>
          <Link href={'#'} className={styles.navigationItem}>
            Как купить
          </Link>
          <Link href={'#'} className={styles.navigationItem}>
            Бренды
          </Link>
          <Link href={'#'} className={styles.navigationItem}>
            Статьи
          </Link>
          <Link href={'#'} className={styles.navigationItem}>
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
