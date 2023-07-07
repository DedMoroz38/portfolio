import React from 'react'
import Styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${Styles["header"]}`}>
      <h1 className={Styles.name}>Egor.dev</h1>
      <nav className={Styles.navigation}>
        <a href='#' className={Styles.link}>Home</a>
        <a href='#' className={Styles.link}>About</a>
        <a href='#' className={Styles.link}>Projects</a>
      </nav>
      
    </header>
  )
}

export default Header;
