import Player from "./components/Player";
import { useState } from "react";
import GameBoard from "./components/Gameboard";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currentActivePlayer)=>currentActivePlayer ==='X'? 'O' : 'X');
  }

  return (
    <>
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" playerSymbol="X"/>
          <Player initialName="Player 2" playerSymbol="O"/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare}/>
      </div>
      LOG
    </main>
    </>
  )
}

export default App;