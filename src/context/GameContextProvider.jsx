import { useState, useEffect } from 'react';
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
    setGameData({
      ...gameData,
      wins: gameData.wins + 1,
      score: 0,
      guesses: [],
    });
  }

  function updateLosses() {
    setGameData({
      ...gameData,
      losses: gameData.losses + 1,
      score: 0,
      guesses: [],
    });
  }

  function updateGuesses(guess) {
    const { guesses } = gameData;
    if (guesses.includes(guess)) {
      updateLosses();
      return;
    }
    if (guesses.length === 11) {
      updateWins();
      return;
    }
    const newGuessesArray = [...guesses];
    newGuessesArray.push(guess);
    setGameData({
      ...gameData,
      score: gameData.score + 1,
      guesses: newGuessesArray,
    });
    // must set all data at once or some properties will be skipped
    // putting updateScore before guesses update results in score property
    // being skipped, and vice versa.
  }

  useEffect(() => {
    console.log(gameData);
  }, [gameData]);

  return (
    <GameContext.Provider value={{ gameData, updateGuesses }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameContextProvider;
