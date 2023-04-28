import {TagProps} from './Tag.types';
import cn from 'classnames';
import styles from './Tag.module.css';

export function Tag({type, children, className}: TagProps): JSX.Element {
  return (
    <div
      className={cn(
        styles.tag,
        {
          [styles.primary]: type === 'primary',
          [styles.success]: type === 'success',
          [styles.error]: type === 'error',
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Tag;
