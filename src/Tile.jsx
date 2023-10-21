import { useContext } from 'react';
import GameContext from './context/GameContext';
import PropTypes from 'prop-types';

function Tile({ id, imagePath }) {
  const { updateGuesses } = useContext(GameContext);

  function handleClick() {
    // do stuff
    updateGuesses(id);
  }
  return (
    <div id={id} className="tile" onClick={handleClick}>
      <img className="tile-image" src={imagePath} />
      <p className="tile-name">{id}</p>
    </div>
  );
}

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Tile;
