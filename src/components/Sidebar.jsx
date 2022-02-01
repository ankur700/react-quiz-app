import React from 'react';
import { FiInfo } from 'react-icons/fi';

const handleClick = id => {
  let question = document.querySelector('.active');
  if (question) {
    question.classList.toggle('active');
    question.classList.toggle('hidden');
  }
  document.getElementById(`question-${id}`)?.classList.toggle('hidden');
  document.getElementById(`question-${id}`)?.classList.toggle('active');
};

const Sidebar = ({ questionCount, setQuestions, Questions }) => {
  return (
    <div className='sidebar__wrapper clay card'>
      <div className='sidebar__header'>
        <div className='clay holder'>
          <select
            name='noofquestions'
            id='noofquestions'
            onChange={e => setQuestions(e.target.value)}
            defaultValue={questionCount}
          >
            <option value='0'>Select no of questions</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </select>
        </div>
        <div className=' sidebar__icon clay'>
          <FiInfo />
        </div>
      </div>
      <div className='sidebar__content clay'>
        {Questions.length ? (
          Questions.map(question => {
            return (
              <button
                key={question.id}
                className='clay sidebar__pagination-button'
                onClick={() => handleClick(question.id)}
              >
                {question.id}
              </button>
            );
          })
        ) : (
          <div className=''>Select the no of questions you want.</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
