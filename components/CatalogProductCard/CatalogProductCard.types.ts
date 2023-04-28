import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface CatalogProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Product;
}

export interface Product {
  vendorCode: string;
  title: string;
  retailPrice: number;
  oldRetailPrice?: number;
  dealerPrice?: number;
  tag?: string;
  rating: number;
}
