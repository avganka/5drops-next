import {CatalogProductCardProps} from './CatalogProductCard.types';
import cn from 'classnames';
import styles from './CatalogProductCard.module.css';
import Image from 'next/image';
import ClickIcon from '../../public/click.svg';
import ProductImage from '../../public/product.jpg';
import {formatPrice} from '@/utils/utils';
import Button from '@/components/Button/Button';
import Tag from '@/components/Tag/Tag';
import Heading from '@/components/Heading/Heading';
import Tooltip from '@/components/Tooltip/Tooltip';
import Counter from '@/components/Counter/Counter';
import Rating from '@/components/Rating/Rating';
import BasketIcon from '../../public/cart.svg';
import InfoIcon from '../../public/help.svg';
import Link from 'next/link';

function CatalogProductCard({className, product, ...props}: CatalogProductCardProps): JSX.Element {
  const {title, vendorCode, retailPrice, oldRetailPrice, dealerPrice, tag, rating} = product;

  return (
    <div className={styles.card} {...props}>
      {tag && (
        <Tag className={styles.tags} type={'error'}>
          {tag}
        </Tag>
      )}
      <div className={styles.image}>
        <Link href={'#'}>
          <Image src={ProductImage.src} alt={title} fill />
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.topBlock}>
          <Rating rating={rating} className={styles.rating} />
          <div className={styles.vendorCode}>
            {'Арт. '}
            <span>{vendorCode}</span>
          </div>
        </div>
        <Heading className={styles.title} tag={'h2'}>
          <Link href={'#'}>{title}</Link>
        </Heading>
        <div className={styles.prices}>
          <div className={styles.priceWrapper}>
            <div className={styles.priceType}>Розничная цена</div>
            <div className={styles.price}>{formatPrice(retailPrice)}</div>
            {oldRetailPrice && <div className={styles.oldPrice}>{formatPrice(oldRetailPrice)}</div>}
          </div>
          {dealerPrice && (
            <div className={styles.priceWrapper}>
              <div className={styles.priceType}>Оптовая цена</div>
              <div className={styles.price}>{formatPrice(dealerPrice)}</div>
              <Tooltip
                text='Оптовая цена действует при сумме заказа от 100 000 рублей'
                width={'250px'}
              >
                <InfoIcon className={styles.infoIcon} />
              </Tooltip>
            </div>
          )}
        </div>
        <div className={styles.controls}>
          <Button className={(styles.button, styles.buy)} type={'bordered'} icon={<ClickIcon />}>
            Купить
          </Button>
          <Counter className={styles.counter} />
          <Button
            className={(styles.button, styles.counter)}
            type={'primary'}
            icon={<BasketIcon />}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CatalogProductCard;
