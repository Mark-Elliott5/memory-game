import { useContext } from 'react';
import GameContext from './context/GameContext';

function Scoreboard() {
  const { gameData } = useContext(GameContext);

  return (
    <div id="scoreboard">
      <p id="score" className="scoreboard-data">
        {`Score: ${gameData.score}`}
      </p>
      <p id="wins" className="scoreboard-data">
        {`Wins: ${gameData.wins}`}
      </p>
      <p id="losses" className="scoreboard-data">
        {`Losses: ${gameData.losses}`}
      </p>
    </div>
  );
}

export default Scoreboard;
