import cn from 'classnames';
import styles from './Header.module.css';
import {FooterProps} from './Footer.types';

function Footer({...props}: FooterProps): JSX.Element {
  return <footer {...props}>footer</footer>;
}

export default Footer;
