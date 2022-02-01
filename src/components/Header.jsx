import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const toggleStyle = {
  padding: '.75rem 1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  cursor: 'pointer',
};

const Header = ({ theme, switchTheme }) => {
  return (
    <header className='App-header'>
      <div className='main-nav clay'>
        <div
          className='logo App-logo'
          style={
            theme === 'dark'
              ? { background: '#61DAFB' }
              : { background: '#222' }
          }
        ></div>
        {/* <img src='/assets/images/logo.svg' alt='LOGO' className='logo' /> */}
        <h1 className='title'>Javascript MCQ'S</h1>

        <label className='label' htmlFor='toggle'>
          <div className='toggle clay'>
            <input
              className='toggle-state'
              type='checkbox'
              name='check'
              value='check'
              id='toggle'
              defaultChecked={theme === 'dark' ? true : false}
              onClick={() => switchTheme(theme)}
            />
            <div className='indicator clay'></div>
            {theme === 'dark' ? (
              <FiSun
                stroke='#fff'
                style={{ position: 'absolute', right: '7px', bottom: '8px' }}
              />
            ) : (
              <FiMoon
                stroke='#222'
                style={{ position: 'absolute', left: '7px', bottom: '8px' }}
              />
            )}
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;
