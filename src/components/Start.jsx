import React, { useState, useEffect } from 'react';

import Select from 'react-select';

const Start = ({
  children,
  user,
  setUser,
  setQuestionCount,
  setShowQuestion,
  setShowStart,
  fetchAllQuestions,
}) => {
  const [name, setName] = useState(user.userName);
  const [show, setShow] = useState(false);

  const OPTIONS = [
    { value: '3', label: '3' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '25', label: '25' },
  ];

  const [selectedValue, setSelectedValue] = useState({
    value: 'Select no of questions',
    label: 'Select no of questions',
  });

  useEffect(() => {
    if (selectedValue.value === 'Select no of questions') return;
    setQuestionCount(parseInt(selectedValue.value));
    setShow(true);
  }, [selectedValue]);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleFormSubmit = () => {
    const newUser = {
      userName: name,
      bestScores: [...user.bestScores],
    };
    setUser({ ...newUser });
  };

  const start = () => {
    setShowQuestion(true);
    setShowStart(false);
    handleFormSubmit();
    fetchAllQuestions();
  };

  return (
    <div className='wrapper'>
      <div className='start__card'>
        <div className='user__info-form'>
          <form onSubmit={e => handleSubmit(e)} className='user__detail-form'>
            <label
              htmlFor='name'
              className='user__name stroke shadow'
              data-text='Your cool name !!'
            >
              Your cool name !!
            </label>
            <input
              className='clay user__input'
              type='text'
              id='name'
              defaultValue={name}
              onChange={e => handleChange(e)}
            />
            <Select
              className='clay'
              classNamePrefix='select'
              defaultValue={selectedValue}
              onChange={setSelectedValue}
              options={OPTIONS}
            />
          </form>
        </div>
        {show && (
          <button
            type='button'
            className='clay start__btn'
            role='button'
            onClick={() => start()}
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
