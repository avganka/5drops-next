import {ButtonProps} from './Button.types';
import cn from 'classnames';
import styles from './Button.module.css';

function Button({
  type,
  icon,
  iconPosition = 'left',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, {
        [styles.ghost]: type === 'ghost',
      })}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}

export default Button;
