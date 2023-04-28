import {CounterProps} from './Counter.types';
import cn from 'classnames';
import styles from './Counter.module.css';
import {ChangeEvent, useState} from 'react';

function Counter({className, ...props}: CounterProps): JSX.Element {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setCounter(Number(evt.target.value));
  };

  return (
    <div className={cn(styles.counter, className)} {...props}>
      <button onClick={decrease}>-</button>
      <input type='number' value={counter} onChange={changeHandler} />
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
