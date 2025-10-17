const LINES = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]          // diagonals
];

/**
 * Calculate the winner for a given board.
 * Returns: { winner: 'X'|'O'|null, line: number[] }
 */
// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  for (const [a,b,c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a,b,c] };
    }
  }
  return { winner: null, line: [] };
}
