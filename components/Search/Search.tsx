import {SearchProps} from './Search.types';
import cn from 'classnames';
import styles from './Search.module.css';
import Input from '../Input/Input';
import SearchIcon from '../../public/search.svg';

function Search({className, placeholder = 'Поиск', ...props}: SearchProps): JSX.Element {
  return (
    <div className={cn(className, styles.search)}>
      {/*<div className={styles.iconWrapper}>*/}
      <SearchIcon className={styles.searchIcon} />
      {/*</div>*/}
      <input placeholder={placeholder} className={styles.input} />
    </div>
  );
}

export default Search;
