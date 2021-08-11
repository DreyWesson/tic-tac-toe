import { useState, useMemo } from "react";
import React from "react";

const Start = (props) => {
  const { handleStart } = props;
  const [players, setPlayers] = useState(["", ""]);
  const handleInput = (event, index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  };
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
  };
  return (
    <div>
      <h1>React Tic Tac Toe</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "30%" }}>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="player1">Player 1</label>
          <input
            type="text"
            value={players[0]}
            onChange={(e) => e.target.value}
            onInput={(e) => handleInput(e, 0)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="player2">Player 2</label>
          <input
            type="text"
            value={players[1]}
            onChange={(e) => e.target.value}
            onInput={(e) => handleInput(e, 1)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={!canStart}
            style={{ margin: "0 auto" }}
          >
            Start
          </button>
        </div>
      </form>
    </div>
  );
};
export default Start;
