import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ theme, switchTheme, user }) => {
  const HUE_COLOR = getComputedStyle(document.documentElement).getPropertyValue(
    '--hue-color'
  );

  const HUE_COLOR_ARRAY = [340, 250, 230, 142];

  const [themeColor, setThemeColor] = useState(`hsl(${HUE_COLOR}, 69%, 61%)`);
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const handleThemeColor = (e, color) => {
    e.preventDefault();
    let root = document.documentElement;
    root.style.setProperty('--hue-color', color);
    setThemeColor(`hsl(${color}, 69%, 61%)`);
    setShowColors(!showColors);
  };

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
        <div className='user '>
          <button className='clay'>{user.userName}</button>
        </div>
        <div
          className='colors__toggle'
          style={{ backgroundColor: themeColor }}
          onClick={() => toggleColors()}
        ></div>
      </div>
      {showColors && (
        <div className='theme__colors'>
          {HUE_COLOR_ARRAY?.map(color => {
            return (
              <div
                key={color}
                className='colors clay'
                style={{ backgroundColor: `hsl(${color}, 69%, 61%)` }}
                onClick={e => handleThemeColor(e, color)}
              ></div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
