import GameContextProvider from './context/GameContextProvider';
import TileWrapper from './TileWrapper';
import Scoreboard from './Scoreboard';
import githubMark from './assets/github-mark-white.png';

function App() {
  return (
    <>
      <GameContextProvider>
        <header>
          <img src="cartoonnetworklogo.png" />
          <p>Memory Game</p>
          <Scoreboard />
        </header>
        <TileWrapper />
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
