import React from 'react';
import DrawerMenu from './Drawer';
import MenuLinks from './MenuLinks';
import './style.css';

export default function header() {
  return (
    <header>
      <div className="container">
        <div className="logoContainer">
          <img src="./media/circle-tm-nobg.webp" alt="logo" />
        </div>
        <nav className="navMenu">
          <MenuLinks />
        </nav>
        <DrawerMenu />
      </div>
    </header>
  );
}
