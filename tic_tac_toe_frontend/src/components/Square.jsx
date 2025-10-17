import React from 'react';

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

  const label = value ? `Square with ${value}` : 'Empty square';

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <span style={{ color: value === 'X' ? 'var(--ocean-primary)' : 'var(--ocean-secondary)' }}>
        {value}
      </span>
    </button>
  );
}
