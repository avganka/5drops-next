import cn from 'classnames';
import {TopHeaderProps} from './TopHeader.types';
import styles from './TopHeader.module.css';
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
import Link from 'next/link';

function TopHeader({
  className,
  setShowSearch,
  setShowMobile,
  ...props
}: TopHeaderProps): JSX.Element {
  return (
    <div className={styles.topHeader} {...props}>
      <div className={styles.burger} onClick={setShowMobile}>
        <BurgerIcon />
      </div>

      <div className={styles.geo}>
        <GeoIcon />
        <span>Москва</span>
      </div>
      <a href='mailto:test@test.ru' className={styles.email}>
        <EmailIcon />
        <span>test@test.ru</span>
      </a>
      <a href='tel:89999999999' className={styles.phone}>
        <PhoneIcon />
        <span>{formatPhoneNumber(89999999999)}</span>
        <span>Звонок бесплатный</span>
      </a>
      <div className={styles.login}>
        <LoginIcon />
        <span>Войти</span>
      </div>
      <Link href={'#'} className={styles.logo}>
        <Image src={logo} className={styles.logoImage} alt='Логотип' width={190} height={40} />
      </Link>
      <div className={styles.title}>Оборудование и аксессуары для химических процессов</div>
      <div className={styles.search}>
        <Search />
      </div>

      <SearchIcon className={styles.searchBtn} onClick={setShowSearch} />

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
  );
}

export default TopHeader;
