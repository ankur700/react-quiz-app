import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import chroma from 'chroma-js';
import Select from 'react-select';
import { colourOptions, dot } from '../lib/data';

const Header = ({ theme, switchTheme, user }) => {
  const [themeColor, setThemeColor] = useState(null);

  useEffect(() => {
    if (themeColor === null) return;
    let root = document.documentElement;
    root.style.setProperty('--hue-color', themeColor.hue);
  }, [themeColor]);

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot('#ccc') }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
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

        <Select
          classNamePrefix='rs'
          defaultValue={colourOptions[0]}
          options={colourOptions}
          styles={colourStyles}
          onChange={setThemeColor}
        />
      </div>
    </header>
  );
};

export default Header;
