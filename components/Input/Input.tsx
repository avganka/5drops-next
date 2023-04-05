import {ButtonProps} from './Input.types';
import cn from 'classnames';
import styles from './Input.module.css';

function Input({className, ...props}: ButtonProps): JSX.Element {
  return <input className={cn(styles.input, className)} {...props} />;
}

export default Input;
