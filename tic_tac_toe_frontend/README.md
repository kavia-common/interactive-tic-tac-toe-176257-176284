# Tic Tac Toe — Ocean Professional

A modern, responsive two-player Tic Tac Toe built with React. No backend or persistence; all client-side.

## Features
- Centered 3x3 board with header, scoreboard, and controls
- Alternating turns for X and O with clear current-turn indicator
- Win/draw detection with winning line highlight
- Scoreboard tracks X wins, O wins, and draws during the session
- Controls:
  - Reset Board: clears board, keeps scores
  - New Game: clears board and scores
- Responsive layout (works at 300px+ widths)
- Ocean Professional theme with smooth transitions

## Scripts
- npm start — start dev server at http://localhost:3000
- npm run build — production build
- npm test — run tests

## Files
- src/App.js — main app composition and state
- src/components/* — Header, Scoreboard, Board, Square, Controls
- src/utils/game.js — winner calculation utility
- src/index.css — theme tokens and app styling
- public/index.html — title, favicon, meta

## Notes
- No environment variables required.
- All state is in-memory and resets on page reload.
