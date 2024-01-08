import React, { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <div className={styles.header} >
      {/* <img src={myImage} /> */}
      <div className={styles.space}></div>
      <div className={styles.description}>Harry Potter</div>
    </div>
  </div>
);

export default Header;
