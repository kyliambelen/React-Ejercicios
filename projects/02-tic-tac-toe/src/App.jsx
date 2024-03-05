import { useState } from "react";

const TURNS = {
  x: "x",
  o: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return <div className={className}>{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  return (
    <main className='board'>
      <h2>Tic-Tac-Toe</h2>
      <section className='game'>
        {board.map((_, index) => {
          return <Square key={index} index={index}></Square>;
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
    </main>
  );
}

export default App;
