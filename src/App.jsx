// import { useEffect } from 'react';
import GameContextProvider from './context/GameContextProvider';
import TileWrapper from './TileWrapper';
import githubMark from './assets/github-mark-white.png';
import './App.css';

function App() {
  return (
    <>
      <GameContextProvider>
        <TileWrapper />
      </GameContextProvider>
    </>
  );
}

export default App;
