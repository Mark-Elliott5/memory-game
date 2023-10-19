import { useState } from 'react';
import GameContext from './GameContext';
import PropTypes from 'prop-types';

function GameContextProvider({ children }) {
  const [gameData, setGameData] = useState({
    wins: 0,
    losses: 0,
    score: 0,
    guesses: [],
  });

  function updateWins() {
    setGameData({ ...gameData, wins: gameData.wins + 1 });
  }

  function updateLosses() {
    setGameData({ ...gameData, losses: gameData.losses + 1 });
  }

  function updateScore() {
    setGameData({ ...gameData, score: gameData.score + 1 });
  }

  function resetGame() {
    setGameData({ ...gameData, guesses: [] });
  }

  function updateGuesses(guess) {
    const { guesses } = gameData;
    if (guesses.includes(guess)) {
      // alert loss here
      updateLosses();
      resetGame();
      return;
    }
    if (guesses.length === 12) {
      // alert wins here
      updateWins();
      resetGame();
      return;
    }
    const newGuessesArray = [...guesses];
    newGuessesArray.push(guess);
    setGameData({ ...gameData, guesses: newGuessesArray });
    updateScore();
  }

  return (
    <GameContext.Provider value={{ updateGuesses }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameContextProvider;
