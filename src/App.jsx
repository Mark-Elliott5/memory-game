// import { useState } from 'react';
import GameContextProvider from './context/GameContextProvider';
import Tile from './Tile';
import githubMark from './assets/github-mark-white.png';
import './App.css';

function App() {
  const tiles = [
    { id: 'blossom' },
    { id: 'eddy' },
    { id: 'courage' },
    { id: 'johnnybravo' },
    { id: 'dexter' },
    { id: 'numbuh1' },
    { id: 'bloo' },
    { id: 'finn' },
    { id: 'samuraijack' },
    { id: 'mordecai' },
    { id: 'gumball' },
    { id: 'ben10' },
  ];

  const randomizeTiles = () => {
    const copyTiles = [...tiles];
    for (let i = copyTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyTiles[i], copyTiles[j]] = [copyTiles[j], copyTiles[i]];
    }
    return (
      <>
        {copyTiles.map((tile) => (
          <Tile
            key={tile.key}
            id={tile.id}
            imagePath={tile.imagePath}
            name={tile.name}
            value={tile.value}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <header>Memory Game</header>
      <GameContextProvider>
        <div id="tiles-wrapper">{randomizeTiles}</div>
      </GameContextProvider>
      <footer>
        Designed by Mark Elliott{' '}
        <a href="https://github.com/Mark-Elliott5">
          <img className="github-link" src={githubMark} />
        </a>
      </footer>
    </>
  );
}

export default App;
