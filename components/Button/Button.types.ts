import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  type?: 'primary' | 'bordered' | 'ghost';
  square?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: ReactNode;
}
