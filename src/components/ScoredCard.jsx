import React from 'react';

const ScoredCard = ({ children }) => {
  return (
    <div className='score__card' id='score'>
      {children}
    </div>
  );
};

export default ScoredCard;
