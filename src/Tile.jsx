import { useContext } from 'react';
import GameContext from './context/GameContext';
import PropTypes from 'prop-types';

function Tile({ id, imagePath, name, value }) {
  const { updateGuesses } = useContext(GameContext);

  function handleClick() {
    // do stuff
    updateGuesses(value);
  }
  return (
    <div id={id} className="tile" onClick={handleClick}>
      <img className="tile-image" src={imagePath} />
      <p className="tile-name">{name}</p>
    </div>
  );
}

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Tile;
