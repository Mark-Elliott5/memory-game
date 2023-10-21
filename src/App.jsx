import GameContextProvider from './context/GameContextProvider';
import TileWrapper from '../public/characterportraits/TileWrapper';
import Scoreboard from './Scoreboard';

function App() {
  return (
    <>
      <GameContextProvider>
        <Scoreboard />
        <TileWrapper />
      </GameContextProvider>
    </>
  );
}

export default App;
