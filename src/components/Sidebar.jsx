import React, { useState } from 'react';

const Sidebar = ({ Questions, setShowScore, state }) => {
  const handleClick = id => {
    let question = document.querySelector('.active');
    setShowScore(false);
    if (question) {
      question.classList.toggle('active');
      question.classList.toggle('hidden');
    }
    let elem = document.getElementById(`question-${id}`);
    elem?.classList.toggle('hidden');
    elem?.classList.toggle('active');
  };

  if (state.length > 0) {
    state.map(item => {
      if (item.attempted) {
        const green = getComputedStyle(
          document.documentElement
        ).getPropertyValue('--green');
        const red = getComputedStyle(document.documentElement).getPropertyValue(
          '--red'
        );
        let btn = document.getElementById('question' + `${item.id}`);
        if (btn !== null) {
          btn.style.background = item.isCorrect === true ? green : red;
        }
      }
    });
  }

  return (
    <div className='sidebar__wrapper clay card'>
      {/* <div className='sidebar__header'></div> */}
      {Questions.length > 0 && (
        <div className='sidebar__content clay'>
          {Questions.map((question, index) => {
            return (
              <button
                key={question.id}
                className='clay sidebar__pagination-button'
                onClick={() => handleClick(index + 1)}
                id={`question` + question.id}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
