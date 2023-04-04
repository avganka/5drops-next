import {HeadingProps} from './Heading.types';
import cn from 'classnames';
import styles from './Heading.module.css';

function Heading({tag, children, className, ...props}: HeadingProps): JSX.Element {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(className, styles.h1)} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cn(className, styles.h2)} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cn(className, styles.h3)} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h1 className={cn(className, styles.h4)} {...props}>
          {children}
        </h1>
      );
  }
}

export default Heading;
