import React from 'react';

const Sidebar = ({
  questionCount,
  setQuestions,
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
        let btn = document.getElementById('question' + `${item.id}`);
        console.log(item, btn);
        btn.style.background = item.isCorrect === true ? '#027802' : '#e44b4b';
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
            onChange={e => setQuestions(e.target.value)}
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
          Questions.map(question => {
            return (
              <button
                key={question.id}
                className='clay sidebar__pagination-button'
                onClick={() => handleClick(question.id)}
                id={`question` + question.id}
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
