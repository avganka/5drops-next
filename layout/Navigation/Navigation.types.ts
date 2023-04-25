import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface NavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menu: MenuItem[];
}

export interface MenuItem {
  id: number;
  label: string;
  url: string;
  icon?: string;
}

export interface MenuState {
  visible: MenuItem[];
  hidden: MenuItem[];
}

export interface MenuAction {
  type: 'hide' | 'show';
  payload: number;
}
