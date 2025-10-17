import React from 'react';

/**
 * Inline SVG chess icons styled with currentColor so parent color applies.
 * Provides accessible titles and ARIA labels for screen readers.
 */

// PUBLIC_INTERFACE
export function KnightIcon({ title = 'Knight (X)', className = 'square-icon', ...props }) {
  /** Renders a chess knight icon (represents player X) */
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      className={className}
      focusable="false"
      width="1em"
      height="1em"
      {...props}
    >
      <title>{title}</title>
      <path
        fill="currentColor"
        d="M6 19h12v2H6v-2Zm9-8.5c.55 0 1 .45 1 1V14h-1v1h3v-1h-1v-2.5c0-1.66-1.34-3-3-3h-.6L9 4 8 5.5l2.2 2.2L8 9v3h3l2-2 2 .5ZM8 16h8v2H8v-2Z"
      />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function QueenIcon({ title = 'Queen (O)', className = 'square-icon', ...props }) {
  /** Renders a chess queen icon (represents player O) */
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      className={className}
      focusable="false"
      width="1em"
      height="1em"
      {...props}
    >
      <title>{title}</title>
      <path
        fill="currentColor"
        d="M7 20h10v2H7v-2Zm10-8.5 2.5-3.5-3.9 1 .7-4L12 8 7.7 5l.7 4-3.9-1L7 11.5 5 14h14l-2-2.5ZM8 16h8v2H8v-2Z"
      />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function PlayerIcon({ player, className = 'square-icon', ...props }) {
  /** Render Knight for 'X' and Queen for 'O' with appropriate labeling. */
  if (player === 'X') {
    return <KnightIcon className={className} title="Knight (X)" {...props} />;
  }
  if (player === 'O') {
    return <QueenIcon className={className} title="Queen (O)" {...props} />;
  }
  return null;
}
