import React from 'react';

const SingleQuestion = ({ data, setCheckAnswer, checkAnswer }) => {
  const handleClick = (e, index) => {
    e.preventDefault();
    resetOptions();
    let target = e.currentTarget;
    if (index === answer) {
      setCheckAnswer(true);
      target.classList.add('success');
    } else {
      setCheckAnswer(false);
      target.classList.add('error');
    }
  };

  const resetOptions = () => {
    let options = Array.from(document.getElementsByClassName('option'));
    options.forEach(option => {
      if (option.classList.contains('success')) {
        option.classList.remove('success');
      } else if (option.classList.contains('error')) {
        option.classList.remove('error');
      }
    });
  };

  const reset = () => {
    setCheckAnswer(false);
    resetOptions();
  };

  const { id, question, image, options, answer, explanation } = data;

  const handleNext = (e, id) => {
    e.preventDefault();
    document.getElementById(`question-${id}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id}`)?.classList.toggle('active');
    document.getElementById(`question-${id + 1}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id + 1}`)?.classList.toggle('active');
    reset();
  };

  const handlePrev = (e, id) => {
    e.preventDefault();
    document.getElementById(`question-${id}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id}`)?.classList.toggle('active');
    document.getElementById(`question-${id - 1}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id - 1}`)?.classList.toggle('active');
    reset();
  };

  return (
    <>
      <div
        className={
          id !== 1
            ? 'hidden single__question-wrapper'
            : 'active single__question-wrapper'
        }
        id={'question-' + id.toString()}
        key={id}
      >
        <h3 className='question__title'>
          {id}: {question}
        </h3>
        <img className='question__image' src={image} alt={'question-' + id} />

        <ul className='options__list'>
          {options?.map((option, index) => {
            return (
              <>
                <li
                  key={answer}
                  id={index.toString()}
                  className='option clay'
                  onClick={e => handleClick(e, index)}
                  dangerouslySetInnerHTML={{ __html: option }}
                ></li>
              </>
            );
          })}
        </ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingInline: '2rem',
            position: 'relative',
            width: '100%',
          }}
        >
          <div key={answer} className='answer'>
            <details className='clay'>
              <summary>
                <strong>Answer</strong>
              </summary>
              <h3 className='answer__title'>Answer: option {answer + 1}</h3>
              <div
                className='answer__detail'
                dangerouslySetInnerHTML={{ __html: explanation }}
              ></div>
            </details>
          </div>
          <div className='pagination__holder'>
            <button
              className={
                id !== 1
                  ? 'clay pagination__button'
                  : 'clay pagination__button hidden'
              }
              onClick={e => handlePrev(e, id)}
            >
              Prev
            </button>

            <button
              className='clay pagination__button'
              onClick={e => handleNext(e, id)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleQuestion;
