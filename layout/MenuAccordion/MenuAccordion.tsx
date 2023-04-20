import cn from 'classnames';
import styles from './MenuAccordion.module.css';
import {MenuAccordionProps} from './MenuAccordion.types';
import Link from 'next/link';
import Heading from '@/components/Heading/Heading';
import {useState} from 'react';

function MenuAccordion({className, title, menu, ...props}: MenuAccordionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(styles.menu, className)} {...props}>
      <Heading tag='h4' className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        Инфомрация
      </Heading>
      <div
        className={cn(styles.list, {
          [styles.open]: isOpen,
          [styles.close]: !isOpen,
        })}
      >
        {menu.map((m) => (
          <Link key={m} href={'#'} className={styles.item}>
            {m}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuAccordion;
