import './App.css';
import InfoBoard from './components/Infoboard';
import Scoreboard from './components/Scoreboard';
import ScoreContextProvider from './components/ScoreContextProvider';

function App() {
  return (
    <ScoreContextProvider>
      <div className="App">
        <Scoreboard />
        <InfoBoard/>
      </div>
    </ScoreContextProvider>
  );
}

export default App;
