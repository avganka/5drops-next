import {MobileNavigationProps} from './MobileNavigation.types';
import styles from './MobileNavigation.module.css';
import ArrowIcon from '../../public/arrow.svg';
import Link from 'next/link';

function MobileNavigation({menu, setShowMobile, ...props}: MobileNavigationProps): JSX.Element {
  return (
    <div className={styles.menuWrapper} onClick={() => setShowMobile(false)}>
      <div className={styles.menu} {...props}>
        {menu.map((m) => (
          <Link href={'#'} key={m} className={styles.menuItem}>
            {m}
            <ArrowIcon />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNavigation;
