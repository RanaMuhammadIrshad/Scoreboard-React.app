import { useContext } from 'react';
import ScoreContext from '../contexts/ScoreContext';
import '../App.css';
const Scoreboard = () => {
  const [score, plusScore, minusScore] = useContext(ScoreContext);

  return (
    <div>
      <h1 className="score-board">Score Board</h1>
      <h2 className="text">Your current score is : {score}</h2>
      <button className='button' onClick={plusScore}>+</button>
      <button className='button' onClick={minusScore}>-</button>
    </div>
  );
};

export default Scoreboard;
