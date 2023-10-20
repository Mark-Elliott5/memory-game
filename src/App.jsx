import { useEffect } from 'react';
import GameContextProvider from './context/GameContextProvider';
import { v4 as uuid } from 'uuid';
import Tile from './Tile';
import githubMark from './assets/github-mark-white.png';
import './App.css';

function App() {
  const tiles = [
    { id: 'Blossom', imagePath: 'blossom.jpg', key: uuid() },
    { id: 'Eddy', imagePath: 'eddy.jpg', key: uuid() },
    { id: 'Courage', imagePath: 'courage.jpg', key: uuid() },
    { id: 'Johnny Bravo', imagePath: 'johnnybravo.jpg', key: uuid() },
    { id: 'Dexter', imagePath: 'dexter.jpg', key: uuid() },
    { id: 'Numbuh 1', imagePath: 'numbuh1.jpg', key: uuid() },
    { id: 'Bloo', imagePath: 'bloo.jpg', key: uuid() },
    { id: 'Finn', imagePath: 'finn.jpg', key: uuid() },
    { id: 'Samurai Jack', imagePath: 'samuraijack.jpg', key: uuid() },
    { id: 'Mordecai', imagePath: 'mordecai.jpg', key: uuid() },
    { id: 'Gumball', imagePath: 'gumball.jpg', key: uuid() },
    { id: 'Ben10', imagePath: 'ben10.jpg', key: uuid() },
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
          <Tile key={tile.key} id={tile.id} imagePath={tile.imagePath} />
        ))}
      </>
    );
  };

  return (
    <>
      <header>Memory Game</header>
      <GameContextProvider>
        <div id="tiles-wrapper">{randomizeTiles()}</div>
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
