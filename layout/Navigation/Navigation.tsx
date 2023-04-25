import React, {useRef, useEffect, useReducer} from 'react';
import {NavigationProps} from './Navigation.types';
import styles from './Navigation.module.css';
import Link from 'next/link';
import {MenuReducer} from './Navigation.reducer';
import Image from 'next/image';

function Navigation({menu}: NavigationProps) {
  const [items, dispatch] = useReducer(MenuReducer, {
    visible: [...menu],
    hidden: [],
  });

  const visibleRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let totalWidth = 0;
    let breaks: number[] = [];
    if (visibleRef.current) {
      const children = visibleRef.current.children;
      for (let i = 0; i < children.length - 1; i++) {
        const vLink = children[i] as HTMLElement;

        totalWidth += vLink.offsetWidth;
        breaks.push(totalWidth);
      }
    }

    function resizeHandler() {
      if (visibleRef.current) {
        const availableSpace = visibleRef.current.clientWidth - 50;
        let numOfVisibleItems = visibleRef.current.children.length - 1;
        const requiredSpace = breaks[numOfVisibleItems - 1];

        if (requiredSpace > availableSpace) {
          dispatch({type: 'hide', payload: numOfVisibleItems});
          numOfVisibleItems -= 1;
          // TODO Пофиксить рекурсию для корректного определния видимых пунктов меню при первом рендере
          //resizeHandler();
        } else if (availableSpace > breaks[numOfVisibleItems]) {
          dispatch({type: 'show', payload: numOfVisibleItems});
          numOfVisibleItems += 1;
        }
      }
    }

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList} ref={visibleRef}>
        {items.visible.map((item) => (
          <li key={item.id} className={styles.navigationItem}>
            <Link href={item.url} className={styles.navigationLink}>
              {item.icon ? <img src={item.icon} /> : null}
              {item.label}
            </Link>
          </li>
        ))}
        <li className={styles.navigationItem}>
          {items.hidden.length !== 0 ? (
            <>
              <span className={styles.navigationLink}>...</span>
              <ul className={styles.dropdown}>
                {items.hidden.map((item) => (
                  <Link key={item.id} href={item.url} className={styles.dropdownItem}>
                    {item.label}
                  </Link>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
