import React from 'react';
import { KnightIcon, QueenIcon, PlayerIcon } from './ChessIcon';

/**
 * Scoreboard displays X wins, O wins, and draws.
 * It also indicates the current player's turn when the game is active.
 *
 * props:
 * - scores: { X: number, O: number, draws: number }
 * - currentPlayer: 'X' | 'O' | null
 */
// PUBLIC_INTERFACE
export default function Scoreboard({ scores, currentPlayer }) {
  return (
    <section className="scoreboard" aria-label="Scoreboard">
      <div className="score-card" aria-live="polite">
        <div className="label">
          <span
            aria-label="Knight (X)"
            title="Knight (X)"
            style={{ color: 'var(--ocean-primary)', display: 'inline-grid', placeItems: 'center' }}
          >
            <KnightIcon />
          </span>
          <span className="small">wins</span>
        </div>
        <div className="value">{scores.X}</div>
      </div>
      <div className="score-card" aria-live="polite">
        <div className="label">
          <span
            aria-label="Queen (O)"
            title="Queen (O)"
            style={{ color: 'var(--ocean-secondary)', display: 'inline-grid', placeItems: 'center' }}
          >
            <QueenIcon />
          </span>
          <span className="small">wins</span>
        </div>
        <div className="value">{scores.O}</div>
      </div>
      <div className="score-card" aria-live="polite">
        <div className="label">
          <span>Draws</span>
        </div>
        <div className="value">{scores.draws}</div>
      </div>
      {currentPlayer && (
        <div className="status" role="status" aria-live="polite">
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
        </div>
      )}
    </section>
  );
}
