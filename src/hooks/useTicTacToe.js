import { useState, useEffect } from "react";

export default () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState("created");
  const [players, setPlayers] = useState(["", ""]);

  useEffect(() => {
    if (status !== "started") return;
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winningPositionsIndex = 0;
    let winner = null;
    while (winningPositionsIndex < winningPositions.length && !winner) {
      const boardPositionsToCheck = winningPositions[winningPositionsIndex];
      const boardValuesToCheck = boardPositionsToCheck.map(
        (index) => board[index]
      );
      const checkingValue = boardValuesToCheck[0];
      const isFinished = boardValuesToCheck.every(
        (value) => value === checkingValue && checkingValue
      );
      winner = !isFinished ? null : checkingValue;
      winningPositionsIndex++;
    }
    if (winner) {
      setWinner(winner === "X" ? players[0] : players[1]);
      setStatus("finished");
      return;
    }
    setStatus(board.filter((value) => !value).length ? "started" : "finished");
  }, [board, players, status]);

  const handleClick = (index) => {
    if (index < 0 || index > 9 || winner) return;
    const newBoard = [...board];
    newBoard.splice(index, 1, turn);
    setBoard(newBoard);
    const newTurn = turn === "X" ? "O" : "X";
    setTurn(newTurn);
  };
  const handleStart = (players) => {
    setPlayers(players);
    setTurn("X");
    setStatus("started");
  };
  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    setStatus("created");
  };

  return { board, status, winner, handleClick, handleRestart, handleStart };
};
