import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
  //Si no hay más espacios vacios en el tablero y no hay ganador
  return newBoard.every((square) => square != null);
};