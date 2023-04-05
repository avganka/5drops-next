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
import SearchIcon from '../../public/search.svg';
import {formatPhoneNumber} from '@/utils/utils';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import {useState} from 'react';
import Link from 'next/link';
import TopHeader from '../TopHeader/TopHeader';

const menu = ['Каталог', 'О компании', 'Прайс-лист', 'Как купить', 'Бренды', 'Статьи', 'Контакты'];

function Header({className, ...props}: HeaderProps): JSX.Element {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(true);

  const showMobileMenuHandler = () => {
    setShowMobile(!showMobile);
    setShowSearch(false);
  };
  const showMobileSearchHandler = () => {
    setShowSearch(!showSearch);
    setShowMobile(false);
  };

  return (
    <>
      <header className={styles.header} {...props}>
        <TopHeader setShowMobile={showMobileMenuHandler} setShowSearch={showMobileSearchHandler} />
        <Navigation menu={menu} />
        {showSearch && (
          <div className={styles.mobileSearch}>
            <Search />
          </div>
        )}
        {showMobile && <MobileNavigation menu={menu} setShowMobile={showMobileMenuHandler} />}
        {/* <div className={styles.line} /> */}
      </header>
    </>
  );
}

export default Header;
