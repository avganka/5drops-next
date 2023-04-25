import {PropsWithChildren} from 'react';
import styles from './Container.module.css';

function Container({children}: PropsWithChildren): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
