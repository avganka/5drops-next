import {SearchProps} from './Search.types';
import cn from 'classnames';
import styles from './Search.module.css';
import Input from '../Input/Input';
import SearchIcon from '../../public/search.svg';

function Search({className, ...props}: SearchProps): JSX.Element {
  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input placeholder='Поиск' className={styles.searchInput} />
      <div className={styles.iconWrapper}>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
}

export default Search;
