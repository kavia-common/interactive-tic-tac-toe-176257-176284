import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Board from './components/Board';
import Controls from './components/Controls';
import { calculateWinner } from './utils/game';

// PUBLIC_INTERFACE
function App() {
  /**
   * This is the main Tic Tac Toe application component.
   * It manages game state, player turns, scoreboard, and controls.
   * Styled using Ocean Professional theme.
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [winnerInfo, setWinnerInfo] = useState({ winner: null, line: [] });

  // Apply base theme on mount
  useEffect(() => {
    document.title = 'Tic Tac Toe — Ocean Pro';
    const root = document.documentElement;
    root.style.setProperty('--ocean-primary', '#2563EB');
    root.style.setProperty('--ocean-secondary', '#F59E0B');
    root.style.setProperty('--ocean-success', '#F59E0B');
    root.style.setProperty('--ocean-error', '#EF4444');
    root.style.setProperty('--ocean-bg', '#f9fafb');
    root.style.setProperty('--ocean-surface', '#ffffff');
    root.style.setProperty('--ocean-text', '#111827');
  }, []);

  // Compute winner or draw on each move
  useEffect(() => {
    const { winner, line } = calculateWinner(squares);
    if (winner && !winnerInfo.winner) {
      setWinnerInfo({ winner, line });
      setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
    } else if (!winner && !squares.includes(null) && !winnerInfo.winner) {
      setWinnerInfo({ winner: null, line: [], draw: true });
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squares]);

  const currentPlayer = xIsNext ? 'X' : 'O';
  const isGameOver = Boolean(winnerInfo.winner) || (winnerInfo.draw && !winnerInfo.winner);

  // PUBLIC_INTERFACE
  const handleSquareClick = (index) => {
    /** Handle square click if game not over and square empty. */
    if (squares[index] || isGameOver) return;
    const next = squares.slice();
    next[index] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  // PUBLIC_INTERFACE
  const resetBoard = () => {
    /** Reset only the board and winner info, preserve scores. */
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinnerInfo({ winner: null, line: [], draw: false });
  };

  // PUBLIC_INTERFACE
  const newGame = () => {
    /** Reset board and scores to start a fresh session. */
    resetBoard();
    setScores({ X: 0, O: 0, draws: 0 });
  };

  return (
    <div className="app-root">
      <div className="app-container">
        <Header />
        <Scoreboard
          scores={scores}
          currentPlayer={isGameOver ? null : currentPlayer}
        />
        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          winningLine={winnerInfo.line}
          disabled={isGameOver}
        />
        <Controls
          onReset={resetBoard}
          onNewGame={newGame}
          status={{
            currentPlayer: isGameOver ? null : currentPlayer,
            winner: winnerInfo.winner || null,
            draw: Boolean(winnerInfo.draw && !winnerInfo.winner),
          }}
        />
      </div>
    </div>
  );
}

export default App;
