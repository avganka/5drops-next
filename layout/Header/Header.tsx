import cn from 'classnames';
import {HeaderProps} from './Header.types';
import styles from './Header.module.css';
import Search from '@/components/Search/Search';
import Image from 'next/image';
import logo from '../../public/logo.png';
import LoginIcon from '../../public/login.svg';
import GeoIcon from '../../public/geo.svg';
import PhoneIcon from '../../public/phone.svg';
import EmailIcon from '../../public/email.svg';
import BasketIcon from '../../public/basket.svg';
import FavoritesIcon from '../../public/favorite.svg';
import BurgerIcon from '../../public/burger.svg';

function Header({className, ...props}: HeaderProps): JSX.Element {
  return (
    <>
      <header className={styles.header} {...props}>
        <div className={cn(className, styles.headerWrapper)}>
          <div className={styles.burger}>
            <BurgerIcon />
          </div>
          <div className={styles.geo}>
            <GeoIcon />
            <span>Москва</span>
          </div>
          <div className={styles.email}>
            <EmailIcon />
            <span>test@test.ru</span>
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
            <span>89999999999З</span>
            <span>Звонок бесплатный</span>
          </div>
          <div className={styles.login}>
            <LoginIcon />
            <span>Войти</span>
          </div>
          <div className={styles.logo}>
            <Image src={logo} className={styles.logoImage} alt='Логотип' width={190} height={40} />
          </div>
          <div className={styles.title}>Оборудование и аксессуары для химических процессов</div>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.icons}>
            <div className={cn(styles.iconElement, styles.basketIcon)}>
              <BasketIcon />
              <span>0</span>
            </div>
            <div className={cn(styles.iconElement, styles.favoritesIcon)}>
              <FavoritesIcon />
              <span>0</span>
            </div>
          </div>
        </div>
        <div className={styles.line} />
      </header>
    </>
  );
}

export default Header;
