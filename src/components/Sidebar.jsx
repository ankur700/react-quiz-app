import React from 'react';

const Sidebar = ({
  questionCount,
  setQuestionsArray,
  Questions,
  setShowScore,
  state,
}) => {
  const handleClick = id => {
    let question = document.querySelector('.active');
    setShowScore(false);
    if (question) {
      question.classList.toggle('active');
      question.classList.toggle('hidden');
    }
    document.getElementById(`question-${id}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id}`)?.classList.toggle('active');
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
        btn.style.background = item.isCorrect === true ? green : red;
      }
    });
  }

  return (
    <div className='sidebar__wrapper clay card'>
      <div className='sidebar__header'>
        <div className='clay holder'>
          <select
            name='noofquestions'
            id='noofquestions'
            onChange={e => setQuestionsArray(e.target.value)}
            defaultValue={questionCount}
          >
            <option value='0'>Select no of questions</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='25'>25</option>
          </select>
        </div>
      </div>
      <div className='sidebar__content clay'>
        {Questions.length ? (
          Questions.map((question, index) => {
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
          })
        ) : (
          <div className=''>Select the no of questions you want.</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
