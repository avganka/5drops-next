import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface MobileNavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setShowMobile: (isShow: boolean) => void;
  menu: string[];
}
