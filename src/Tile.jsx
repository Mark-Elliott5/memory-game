import { useContext } from 'react';
import GameContext from './context/GameContext';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';

function Tile({ id, imagePath, handleTileClick, ...rest }) {
  const { updateGuesses } = useContext(GameContext);

  function handleClick() {
    handleTileClick();
    updateGuesses(id);
  }
  return (
    <Tilt>
      <div {...rest} id={id} className="tile" onClick={handleClick}>
        <img className="tile-image" src={imagePath} />
        {/* <p className="tile-name">{id}</p> */}
      </div>
    </Tilt>
  );
}

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleTileClick: PropTypes.func.isRequired,
};

export default Tile;
