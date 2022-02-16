import React from 'react';

const Sidebar = ({
  Questions,
  setShowScore,
  questionState,
  setShowQuestion,
  fetchSingleQuestion,
}) => {
  const handleClick = id => {
    setShowScore(false);
    setShowQuestion(true);
    fetchSingleQuestion(id);
  };

  if (questionState.length > 0) {
    questionState.map(item => {
      if (item.attempted) {
        const green = getComputedStyle(
          document.documentElement
        ).getPropertyValue('--green');
        const red = getComputedStyle(document.documentElement).getPropertyValue(
          '--red'
        );
        let btn = document.getElementById('question' + `${item.id}`);
        if (btn !== null) {
          return (btn.style.background = item.isCorrect === true ? green : red);
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
                onClick={() => handleClick(question.id)}
                id={'question' + `${question.id}`}
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
