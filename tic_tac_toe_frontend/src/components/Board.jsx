import React from 'react';
import Square from './Square';

/**
 * Board renders a 3x3 grid of Square components.
 *
 * props:
 * - squares: Array(9) of 'X' | 'O' | null
 * - onSquareClick: (index: number) => void
 * - winningLine: number[] (indices of winning squares)
 * - disabled: boolean
 */
// PUBLIC_INTERFACE
export default function Board({ squares, onSquareClick, winningLine = [], disabled = false }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((val, idx) => (
        <Square
          key={idx}
          value={val}
          onClick={() => onSquareClick(idx)}
          disabled={disabled || Boolean(val)}
          isWinning={winningLine.includes(idx)}
        />
      ))}
    </div>
  );
}
