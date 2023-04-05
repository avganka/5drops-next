import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface TopHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setShowMobile: () => void;
  setShowSearch: () => void;
}
