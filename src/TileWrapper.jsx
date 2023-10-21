import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import GameContext from './context/GameContext';
import Tile from './Tile';

function TileWrapper() {
  // context is required to trigger rerender when tile is clicked
  // then modifies context data, so tiles can be randomized
  useContext(GameContext);

  const [tiles] = useState([
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
    { id: 'Ben 10', imagePath: 'ben10.jpg', key: uuid() },
  ]);

  const randomizeTiles = () => {
    const copyTiles = [...tiles];
    for (let i = copyTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyTiles[i], copyTiles[j]] = [copyTiles[j], copyTiles[i]];
    }
    return copyTiles;
  };

  return (
    <div id="tiles-wrapper">
      {randomizeTiles().map((tile) => (
        <Tile key={tile.key} id={tile.id} imagePath={tile.imagePath} />
      ))}
    </div>
  );
}

export default TileWrapper;
