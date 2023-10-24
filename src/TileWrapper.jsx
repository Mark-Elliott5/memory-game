import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Tile from './Tile';
import { Flipper, Flipped } from 'react-flip-toolkit';

function TileWrapper() {
  const [tiles, setState] = useState([
    {
      id: 'Blossom',
      imagePath: '/characterportraits/blossom.jpg',
      key: uuid(),
    },
    { id: 'Eddy', imagePath: '/characterportraits/eddy.jpg', key: uuid() },
    {
      id: 'Courage',
      imagePath: '/characterportraits/courage.jpg',
      key: uuid(),
    },
    {
      id: 'Johnny Bravo',
      imagePath: '/characterportraits/johnnybravo.jpg',
      key: uuid(),
    },
    {
      id: 'Dexter',
      imagePath: '/characterportraits/dexter.jpg',
      key: uuid(),
    },
    {
      id: 'Numbuh 1',
      imagePath: '/characterportraits/numbuh1.jpg',
      key: uuid(),
    },
    { id: 'Bloo', imagePath: '/characterportraits/bloo.jpg', key: uuid() },
    { id: 'Finn', imagePath: '/characterportraits/finn.jpg', key: uuid() },
    {
      id: 'Samurai Jack',
      imagePath: '/characterportraits/samuraijack.jpg',
      key: uuid(),
    },
    {
      id: 'Mordecai',
      imagePath: '/characterportraits/mordecai.jpg',
      key: uuid(),
    },
    {
      id: 'Gumball',
      imagePath: '/characterportraits/gumball.jpg',
      key: uuid(),
    },
    { id: 'Ben 10', imagePath: '/characterportraits/ben10.jpg', key: uuid() },
  ]);

  const randomizeTiles = () => {
    const copyTiles = [...tiles];
    for (let i = copyTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyTiles[i], copyTiles[j]] = [copyTiles[j], copyTiles[i]];
    }
    setState(copyTiles);
  };

  return (
    <Flipper flipKey={uuid()} spring={{ stiffness: 260, damping: 26 }}>
      <div id="tiles-wrapper">
        {tiles.map((tile) => (
          <Flipped key={tile.key} flipId={tile.key}>
            <Tile
              id={tile.id}
              imagePath={tile.imagePath}
              handleTileClick={randomizeTiles}
            />
          </Flipped>
        ))}
      </div>
    </Flipper>
  );
}

export default TileWrapper;
