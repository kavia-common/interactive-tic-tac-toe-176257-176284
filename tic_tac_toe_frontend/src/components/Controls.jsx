import React from 'react';
import { PlayerIcon } from './ChessIcon';

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
        {winner && (
          <span>
            Winner:{' '}
            <strong
              style={{
                display: 'inline-grid',
                placeItems: 'center',
                color: winner === 'X' ? 'var(--ocean-primary)' : 'var(--ocean-secondary)',
              }}
              aria-label={winner === 'X' ? 'Knight (X)' : 'Queen (O)'}
              title={winner === 'X' ? 'Knight (X)' : 'Queen (O)'}
            >
              <PlayerIcon player={winner} />
            </strong>
          </span>
        )}
        {!winner && draw && <span>Draw</span>}
        {!winner && !draw && currentPlayer && (
          <span>
            Turn:{' '}
            <strong
              style={{
                display: 'inline-grid',
                placeItems: 'center',
                color:
                  currentPlayer === 'X' ? 'var(--ocean-primary)' : 'var(--ocean-secondary)',
              }}
              aria-label={currentPlayer === 'X' ? 'Knight (X)' : 'Queen (O)'}
              title={currentPlayer === 'X' ? 'Knight (X)' : 'Queen (O)'}
            >
              <PlayerIcon player={currentPlayer} />
            </strong>
          </span>
        )}
      </div>
    </section>
  );
}
