import {ButtonProps} from './Button.types';
import cn from 'classnames';
import styles from './Button.module.css';
import {useRef, MouseEvent} from 'react';

function Button({
  type = 'primary',
  icon,
  iconPosition = 'left',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: type === 'primary',
          [styles.bordered]: type === 'bordered',
          [styles.ghost]: type === 'ghost',
        },

        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}

export default Button;
