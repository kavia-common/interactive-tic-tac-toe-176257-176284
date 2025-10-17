import React from 'react';

/**
 * Controls render action buttons and game status.
 *
 * props:
 * - onReset: () => void
 * - onNewGame: () => void
 * - status: { currentPlayer?: 'X'|'O'|null, winner?: 'X'|'O'|null, draw?: boolean }
 */
// PUBLIC_INTERFACE
export default function Controls({ onReset, onNewGame, status }) {
  const { currentPlayer, winner, draw } = status || {};
  let statusText = '';
  if (winner) statusText = `Winner: ${winner}`;
  else if (draw) statusText = 'Draw';
  else if (currentPlayer) statusText = `Turn: ${currentPlayer}`;

  return (
    <section>
      <div className="controls">
        <button className="btn primary" onClick={onReset} aria-label="Reset board (keep scores)">
          Reset Board
        </button>
        <button className="btn secondary" onClick={onNewGame} aria-label="New game (reset scores)">
          New Game
        </button>
      </div>
      <div className="status" role="status" aria-live="polite">
        {statusText}
      </div>
    </section>
  );
}
