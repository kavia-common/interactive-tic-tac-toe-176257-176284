import React from 'react';

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
          <span style={{ color: 'var(--ocean-primary)' }}>X</span>
          <span className="small">wins</span>
        </div>
        <div className="value">{scores.X}</div>
      </div>
      <div className="score-card" aria-live="polite">
        <div className="label">
          <span style={{ color: 'var(--ocean-secondary)' }}>O</span>
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
        <div className="status" role="status">
          Turn: <strong>{currentPlayer}</strong>
        </div>
      )}
    </section>
  );
}
