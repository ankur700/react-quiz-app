import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Start = ({
  children,
  user,
  setUser,
  setQuestionCount,
  setGameStarted,
  setShowStart,
}) => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    setName(user.username);
  }, []);

  const handleSelect = event => {
    event.preventDefault();
    setQuestionCount(event.target.value);
    setShow(true);
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: name,
      data: [],
    };
    setUser({ ...newUser });
  };

  return (
    <div className='wrapper'>
      <div className='start__card'>
        <div className='user__info-form'>
          <form onSubmit={e => handleSubmit(e)} className='user__detail-form'>
            <label htmlFor='name' className='user__name'>
              Give yourself a cool name !!
            </label>
            <input
              className='clay user__input'
              type='text'
              id='name'
              defaultValue={name}
              onChange={e => handleChange(e)}
            />
          </form>
          <div className='clay holder'>
            <select
              name='noofquestions'
              id='noofquestions'
              onChange={e => handleSelect(e)}
            >
              <option value='0'>Select no of questions</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='25'>25</option>
            </select>
          </div>
        </div>
        {show && (
          <button
            type='button'
            className='clay start__btn'
            role='button'
            onClick={() => {
              setGameStarted(true);
              setShowStart(false);
            }}
          >
            Start
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Start;
