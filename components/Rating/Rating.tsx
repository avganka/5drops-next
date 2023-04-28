import {RatingProps} from './Rating.types';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from '../../public/start.svg';

function Rating({rating, className}: RatingProps): JSX.Element {
  return (
    <div className={className}>
      {[1, 2, 3, 4, 5].map((item) => (
        <StarIcon
          key={item}
          className={cn(styles.ratingIcon, {
            [styles.filledIcon]: item <= rating,
          })}
        />
      ))}
    </div>
  );
}

export default Rating;
