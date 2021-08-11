import React from "react";
import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useTickTackToe from "./hooks/useTicTacToe";

const App = () => {
  const game = useTickTackToe();
  function stateHandler(game) {
    switch (game.status) {
      case "created":
        return <Start handleStart={game.handleStart} />;
      case "started":
        return <Game board={game.board} handleClick={game.handleClick} />;
      case "finished":
        return <Finished name={game.winner} restart={game.handleRestart} />;
      default:
    }
  }
  return <div className="App">{stateHandler(game)}</div>;
};
export default App;
