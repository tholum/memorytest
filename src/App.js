import React, { useState, useCallback } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import Results from './components/Results';
import usePatternGenerator from './hooks/usePatternGenerator';
import useTimer from './hooks/useTimer';
import './App.css';

function App() {
  const [gameState, setGameState] = useState({
    phase: 'start',
    gridSize: 5,
    displayTime: 10,
    clustering: 'medium',
    landmineMode: false,
    pattern: [],
    userInput: [],
    exploded: [],
  });

  const [score, setScore] = useState(null);

  const { generatePattern } = usePatternGenerator();

  const handleTimerComplete = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      phase: 'input',
    }));
  }, []);

  const { timeRemaining, start: startTimer } = useTimer(
    gameState.displayTime,
    handleTimerComplete
  );

  const createEmptyGrid = (size) => {
    return Array(size).fill(null).map(() => Array(size).fill(false));
  };

  const handleGridSizeChange = (newSize) => {
    setGameState((prev) => ({
      ...prev,
      gridSize: newSize,
    }));
  };

  const handleDisplayTimeChange = (newTime) => {
    setGameState((prev) => ({
      ...prev,
      displayTime: newTime,
    }));
  };

  const handleClusteringChange = (newClustering) => {
    setGameState((prev) => ({
      ...prev,
      clustering: newClustering,
    }));
  };

  const handleLandmineModeChange = (enabled) => {
    setGameState((prev) => ({
      ...prev,
      landmineMode: enabled,
    }));
  };

  const handleStart = () => {
    const pattern = generatePattern(gameState.gridSize, gameState.clustering);
    const userInput = createEmptyGrid(gameState.gridSize);
    const exploded = createEmptyGrid(gameState.gridSize);

    setGameState((prev) => ({
      ...prev,
      phase: 'memorize',
      pattern,
      userInput,
      exploded,
    }));

    setScore(null);
    startTimer(gameState.displayTime);
  };

  const handleCellClick = (row, col) => {
    if (gameState.phase !== 'input') return;

    // If cell already exploded, ignore
    if (gameState.exploded[row]?.[col]) return;

    // Check if this is a wrong click in landmine mode
    const isWrongClick = gameState.landmineMode &&
                         !gameState.pattern[row][col] &&
                         !gameState.userInput[row][col];

    setGameState((prev) => {
      const newUserInput = prev.userInput.map((r, ri) =>
        r.map((c, ci) => (ri === row && ci === col ? !c : c))
      );

      let newExploded = prev.exploded;
      if (isWrongClick) {
        newExploded = prev.exploded.map((r, ri) =>
          r.map((c, ci) => (ri === row && ci === col ? true : c))
        );
      }

      return {
        ...prev,
        userInput: newUserInput,
        exploded: newExploded,
      };
    });
  };

  const calculateScore = (pattern, userInput) => {
    let correct = 0;
    let missed = 0;
    let wrong = 0;

    for (let row = 0; row < pattern.length; row++) {
      for (let col = 0; col < pattern[row].length; col++) {
        const patternFilled = pattern[row][col];
        const userSelected = userInput[row][col];

        if (patternFilled && userSelected) correct++;
        else if (patternFilled && !userSelected) missed++;
        else if (!patternFilled && userSelected) wrong++;
      }
    }

    const total = correct + missed + wrong;
    const accuracy = total > 0 ? (correct / total) * 100 : 0;

    return { correct, missed, wrong, accuracy };
  };

  const handleDone = () => {
    const calculatedScore = calculateScore(gameState.pattern, gameState.userInput);
    setScore(calculatedScore);
    setGameState((prev) => ({
      ...prev,
      phase: 'results',
    }));
  };

  const handlePlayAgain = () => {
    handleStart();
  };

  const handleChangeSettings = () => {
    setGameState((prev) => ({
      ...prev,
      phase: 'start',
      pattern: [],
      userInput: [],
    }));
    setScore(null);
  };

  return (
    <div className="app">
      <h1>Shape Memory Test</h1>

      <Controls
        phase={gameState.phase}
        gridSize={gameState.gridSize}
        displayTime={gameState.displayTime}
        clustering={gameState.clustering}
        landmineMode={gameState.landmineMode}
        timeRemaining={timeRemaining}
        onGridSizeChange={handleGridSizeChange}
        onDisplayTimeChange={handleDisplayTimeChange}
        onClusteringChange={handleClusteringChange}
        onLandmineModeChange={handleLandmineModeChange}
        onStart={handleStart}
        onDone={handleDone}
      />

      {gameState.phase !== 'start' && (
        <Grid
          size={gameState.gridSize}
          pattern={gameState.pattern}
          userInput={gameState.userInput}
          exploded={gameState.exploded}
          showPattern={gameState.phase === 'memorize'}
          disabled={gameState.phase === 'memorize' || gameState.phase === 'results'}
          onCellClick={handleCellClick}
          resultData={gameState.phase === 'results' ? score : null}
        />
      )}

      {gameState.phase === 'results' && score && (
        <Results
          score={score}
          onPlayAgain={handlePlayAgain}
          onChangeSettings={handleChangeSettings}
        />
      )}
    </div>
  );
}

export default App;
