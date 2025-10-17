import React from 'react';

/**
 * Header component renders the app title and description.
 */
// PUBLIC_INTERFACE
export default function Header() {
  return (
    <header className="header" role="banner">
      <h1 className="title">Tic Tac Toe</h1>
      <p className="subtitle">Ocean Professional • Two-player game</p>
    </header>
  );
}
