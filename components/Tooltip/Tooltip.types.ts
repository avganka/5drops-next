import {CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface TooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  text: ReactNode;
  width?: CSSProperties['width'];
}
