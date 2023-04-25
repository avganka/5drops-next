import cn from 'classnames';
import styles from './Footer.module.css';
import {FooterProps} from './Footer.types';
import EmailIcon from '../../public/email.svg';
import PhoneIcon from '../../public/phone.svg';
import {formatPhoneNumber} from '@/utils/utils';
import MenuAccordion from '../MenuAccordion/MenuAccordion';
import Container from '../Container/Container';

function Footer({className, ...props}: FooterProps): JSX.Element {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <Container>
        <div className={styles.wrapper}>
          <MenuAccordion
            title='Информация'
            menu={['Информация', 'Информация', 'Информация', 'Информация', 'Информация']}
          />
          <MenuAccordion
            title='Информация'
            menu={['Информация', 'Информация', 'Информация', 'Информация', 'Информация']}
          />
          <div className={styles.contacts}>
            <a href='mailto:test@test.ru' className={styles.email}>
              <EmailIcon />
              <span>test@test.ru</span>
            </a>
            <a href='tel:89999999999' className={styles.phone}>
              <PhoneIcon />
              <span>{formatPhoneNumber(89999999999)}</span>
            </a>
            <div className={styles.socials}>
              <a
                className={cn(styles.socialItem, styles.vk)}
                href='https://vk.com/5drops_lab'
                target='_blank'
                rel='nofollow'
                title='VK'
              >
                VK
              </a>
              <a
                className={cn(styles.socialItem, styles.telegram)}
                href='https://t.me/fivedrops_lab'
                target='_blank'
                rel='nofollow'
                title='Telegram'
              >
                Telegram
              </a>
              <a
                className={cn(styles.socialItem, styles.youtube)}
                href='https://www.youtube.com/channel/UCS_eOviMlujzKWrJ2cEss8g'
                target='_blank'
                rel='nofollow'
                title='YouTube'
              >
                YouTube
              </a>
            </div>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} &quot;Пять Капель&quot; - интернет-магазин товаров для
            химических процессов с доставкой по России.
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
