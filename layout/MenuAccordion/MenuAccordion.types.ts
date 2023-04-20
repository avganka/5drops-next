import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface MenuAccordionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  menu: string[];
}
