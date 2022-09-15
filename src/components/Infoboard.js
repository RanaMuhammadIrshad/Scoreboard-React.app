import { useContext } from 'react';
import ScoreContext from '../contexts/ScoreContext';
import '../App.css';
const InfoBoard = () => {
  const [score] = useContext(ScoreContext);
  

  if (score >= 110) {
    return (
      <div className='score-board'>
        <h3>Goog Job!</h3>
      </div>
    );
  }
  if (score < 110) {
    return (
      <div className='score-board'>
        <h3 >Let's make it over 100!</h3>
      </div>
    );
  }
};

export default InfoBoard;
