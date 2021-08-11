import React from "react";
import Square from "../components/Squares";

const Game = ({ board, handleClick }) => {
  const styles = {
    board: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      width: "300px",
    },
  };
  console.log(board);
  return (
    <div style={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default Game;
