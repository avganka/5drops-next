import {SearchProps} from './Search.types';
import cn from 'classnames';
import styles from './Search.module.css';
import SearchIcon from '../../public/search.svg';

function Search({className, placeholder = 'Поиск', ...props}: SearchProps): JSX.Element {
  return (
    <div className={cn(className, styles.search)}>
      <SearchIcon className={styles.searchIcon} />
      <input placeholder={placeholder} className={styles.input} />
    </div>
  );
}

export default Search;
