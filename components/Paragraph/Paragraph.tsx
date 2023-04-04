import {HeadingProps} from './Paragraph.types';
import cn from 'classnames';
import styles from './Paragraph.module.css';

function Paragraph({children, className, ...props}: HeadingProps): JSX.Element {
  return (
    <p className={cn(className, styles.text)} {...props}>
      {children}
    </p>
  );
}

export default Paragraph;
