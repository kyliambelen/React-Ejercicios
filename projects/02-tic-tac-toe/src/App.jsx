import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS, WINNER_COMBOS } from "./constants.js";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);

  /* pasamos un estado al ganador: si no hay ganador = null
     si hay empate = false */

  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    // se revisan todas las combinaciones posibles para acar el ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  // Función para resetear el juego

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };
  const checkEndGame = (newBoard) => {
    //Si no hay más espacios vacios en el tablero y no hay ganador
    return newBoard.every((square) => square != null);
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
    const newWinner = checkWinner(newBoard);
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

      <section>
        {winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>{winner == false ? "Empate" : "Ganó:"}</h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Nueva Partida</button>
              </footer>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
