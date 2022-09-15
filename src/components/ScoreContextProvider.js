import React, { useState } from 'react';

import ScoreContext from '../contexts/ScoreContext';

const ScoreContextProvider = (props) => {
  const [score, setScore] = useState(0);
  const plusScore = () => {
    setScore((score) => score + 10);
  };

  const minusScore = () => {
    setScore((score) => score - 10);
  };

  return <ScoreContext.Provider value={[score, plusScore, minusScore]}>{props.children}</ScoreContext.Provider>;
};

export default ScoreContextProvider;
