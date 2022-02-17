import React from 'react';

const Sidebar = ({ questionState, setShowQuestion, fetchSingleQuestion }) => {
  const handleClick = id => {
    setShowQuestion(true);
    fetchSingleQuestion(id);
  };

  return (
    <div className='sidebar__wrapper clay card'>
      {/* <div className='sidebar__header'></div> */}
      {questionState.length > 0 && (
        <div className='sidebar__content clay'>
          {questionState.map((question, index) => {
            return (
              <button
                key={question.id}
                className={
                  !question.attempted
                    ? 'clay sidebar__pagination-button'
                    : question.isCorrect
                    ? 'success clay sidebar__pagination-button'
                    : 'error clay sidebar__pagination-button'
                }
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
