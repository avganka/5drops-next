import cn from 'classnames';
import {NavigationProps} from './Navigation.types';
import styles from './Navigation.module.css';
import CatalogIcon from '../../public/catalog.svg';
import LightningIcon from '../../public/lightning.svg';

function Navigation({className, ...props}: NavigationProps): JSX.Element {
  return (
    <nav className={styles.navigation} {...props}>
      <div className={cn(className, styles.navigationWrapper)}>
        <div className={styles.navigationItem}>
          <CatalogIcon />
          Каталог
        </div>
        <div className={styles.navigationItem}>
          <LightningIcon />О компании
        </div>
        <div className={styles.navigationItem}>Прайс-лист</div>
        <div className={styles.navigationItem}>Как купить</div>
        <div className={styles.navigationItem}>Бренды</div>
        <div className={styles.navigationItem}>Статьи</div>
        <div className={styles.navigationItem}>Контакты</div>
      </div>
    </nav>
  );
}

export default Navigation;
