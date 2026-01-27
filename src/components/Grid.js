import React from 'react';
import Cell from './Cell';

const Grid = ({
  size,
  pattern,
  userInput,
  exploded,
  showPattern,
  disabled,
  onCellClick,
  resultData
}) => {
  const getCellResultState = (row, col) => {
    if (!resultData) return null;

    const patternFilled = pattern[row][col];
    const userSelected = userInput[row][col];

    if (patternFilled && userSelected) return 'correct';
    if (patternFilled && !userSelected) return 'missed';
    if (!patternFilled && userSelected) return 'wrong';
    return null;
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${size}, 30px)`,
    gridTemplateRows: `repeat(${size}, 30px)`,
  };

  return (
    <div className="grid" style={gridStyle}>
      {Array(size).fill(null).map((_, row) => (
        Array(size).fill(null).map((_, col) => (
          <Cell
            key={`${row}-${col}`}
            filled={pattern[row]?.[col] || false}
            selected={userInput[row]?.[col] || false}
            exploded={exploded?.[row]?.[col] || false}
            showPattern={showPattern}
            disabled={disabled}
            onClick={() => onCellClick?.(row, col)}
            resultState={getCellResultState(row, col)}
          />
        ))
      ))}
    </div>
  );
};

export default Grid;
