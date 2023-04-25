import cn from 'classnames';
import styles from './Header.module.css';
import Container from '../Container/Container';
import Logo from '../../public/logo.svg';
import Search from '@/components/Search/Search';
import UserIcon from '../../public/user.svg';
import GeoIcon from '../../public/geo.svg';
import PhoneIcon from '../../public/phone.svg';
import EmailIcon from '../../public/email.svg';
import CartIcon from '../../public/cart.svg';
import BurgerIcon from '../../public/burger.svg';
import SearchIcon from '../../public/search.svg';
import {formatPhoneNumber} from '@/utils/utils';
import Link from 'next/link';
import Navigation from '../Navigation/Navigation';
import {MenuItem} from '../Navigation/Navigation.types';

const menu: MenuItem[] = [
  {id: 1, label: 'Каталог', url: '/catalog'},
  {id: 3, label: 'Прайс-лист', url: '/price'},
  {id: 2, label: 'О компании', url: '/about'},
  {id: 4, label: 'Как купить', url: '/how-to-buy'},
  {id: 5, label: 'Бренды', url: '/brand'},
  {id: 6, label: 'Статьи', url: '/blog'},
  {id: 7, label: 'Контакты', url: '/contacts'},
];

function Header(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.topHeader}>
            <div className={styles.geo}>
              <GeoIcon />
              <span>Москва</span>
            </div>
            <a href='tel:89999999999' className={styles.phone}>
              <PhoneIcon />
              <span>{formatPhoneNumber(89999999999)}</span>
              <span>Звонок бесплатный</span>
            </a>
            <a href='mailto:test@test.ru' className={styles.email}>
              <EmailIcon />
              <span>test@test.ru</span>
            </a>
            <Link href={'#'} className={styles.logo}>
              <Logo className={styles.logoImage} />
            </Link>
            <Search placeholder='Что будем искать' className={styles.search} />
            <div className={styles.basket}>
              <CartIcon />
              <span>0</span>
            </div>
            <div className={styles.login}>
              <UserIcon />
              <span>Войти</span>
            </div>
          </div>
          <Navigation menu={menu} />
        </Container>
      </header>
    </>
  );
}

export default Header;
