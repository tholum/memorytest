import React from 'react';

const Controls = ({
  phase,
  gridSize,
  displayTime,
  clustering,
  landmineMode,
  timeRemaining,
  onGridSizeChange,
  onDisplayTimeChange,
  onClusteringChange,
  onLandmineModeChange,
  onStart,
  onDone
}) => {
  const gridSizes = [5, 6, 7, 8, 9, 10, 11, 12];
  const displayTimes = [10, 11, 12, 13, 14, 15];
  const clusteringOptions = [
    { value: 'none', label: 'None (Random)' },
    { value: 'light', label: 'Light' },
    { value: 'medium', label: 'Medium' },
    { value: 'heavy', label: 'Heavy' },
  ];

  return (
    <div className="controls">
      {phase === 'start' && (
        <div className="settings">
          <div className="setting">
            <label htmlFor="gridSize">Grid Size:</label>
            <select
              id="gridSize"
              value={gridSize}
              onChange={(e) => onGridSizeChange(Number(e.target.value))}
            >
              {gridSizes.map((size) => (
                <option key={size} value={size}>
                  {size}x{size}
                </option>
              ))}
            </select>
          </div>
          <div className="setting">
            <label htmlFor="displayTime">Display Time:</label>
            <select
              id="displayTime"
              value={displayTime}
              onChange={(e) => onDisplayTimeChange(Number(e.target.value))}
            >
              {displayTimes.map((time) => (
                <option key={time} value={time}>
                  {time}s
                </option>
              ))}
            </select>
          </div>
          <div className="setting">
            <label htmlFor="clustering">Clustering:</label>
            <select
              id="clustering"
              value={clustering}
              onChange={(e) => onClusteringChange(e.target.value)}
            >
              {clusteringOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="setting checkbox-setting">
            <label htmlFor="landmineMode">
              <input
                type="checkbox"
                id="landmineMode"
                checked={landmineMode}
                onChange={(e) => onLandmineModeChange(e.target.checked)}
              />
              Landmine Mode
            </label>
          </div>
          <button className="btn btn-start" onClick={onStart}>
            Start Game
          </button>
        </div>
      )}

      {phase === 'memorize' && (
        <div className="timer-display">
          <span className="timer-label">Memorize the pattern!</span>
          <span className="timer-value">{timeRemaining}s</span>
        </div>
      )}

      {phase === 'input' && (
        <div className="input-controls">
          <span className="input-label">Click cells to recreate the pattern</span>
          <button className="btn btn-done" onClick={onDone}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Controls;
