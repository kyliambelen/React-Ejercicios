import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);

  /* pasamos un estado al ganador: si no hay ganador = null
     si hay empate = false */

  const [winner, setWinner] = useState(null);

  // Función para resetear el juego

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };

  const updateBoard = (index) => {
    //si la posición ya tiene algo no se actualiza
    if (board[index] || winner) return;

    // actualizamos el tablero. usamos ('restoperator')

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // aqui se cambia el turno

    const newTurn = turn == TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    // revisamos si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Habría Empate
    }
  };
  return (
    <main className='board'>
      <h2>Tic-Tac-Toe</h2>
      <button onClick={resetGame}>Nueva Partida</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
