import React from 'react';
import { PlayerIcon } from './ChessIcon';

/**
 * Single square component.
 *
 * props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - disabled: boolean
 * - isWinning: boolean
 */
// PUBLIC_INTERFACE
export default function Square({ value, onClick, disabled, isWinning }) {
  const className = [
    'square',
    disabled ? 'disabled' : '',
    isWinning ? 'win' : ''
  ].join(' ').trim();

  const label = value
    ? `Square with ${value === 'X' ? 'Knight (X)' : 'Queen (O)'}`
    : 'Empty square';

  const iconColor =
    value === 'X' ? 'var(--ocean-primary)' : value === 'O' ? 'var(--ocean-secondary)' : 'inherit';

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {value ? (
        <span style={{ color: iconColor, display: 'grid', placeItems: 'center' }}>
          <PlayerIcon player={value} />
        </span>
      ) : null}
    </button>
  );
}
