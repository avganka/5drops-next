import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
}
