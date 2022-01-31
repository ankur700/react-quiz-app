import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='App-header'>
      <div className='main-nav clay'>
        <img src='../assets/images/logo.svg ' alt='LOGO' className='logo' />
        <h1>Javascript MCQ'S</h1>
        <FiSun />
      </div>
    </header>
  );
};

export default Header;
