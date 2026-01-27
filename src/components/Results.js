import React from 'react';

const Results = ({
  score,
  onPlayAgain,
  onChangeSettings
}) => {
  const { correct, missed, wrong, accuracy } = score;

  return (
    <div className="results-overlay">
      <div className="results-modal">
        <h2>Results</h2>

        <div className="accuracy">
          <span className="accuracy-value">{accuracy.toFixed(1)}%</span>
          <span className="accuracy-label">Accuracy</span>
        </div>

        <div className="breakdown">
          <div className="stat correct">
            <span className="stat-value">{correct}</span>
            <span className="stat-label">Correct</span>
          </div>
          <div className="stat missed">
            <span className="stat-value">{missed}</span>
            <span className="stat-label">Missed</span>
          </div>
          <div className="stat wrong">
            <span className="stat-value">{wrong}</span>
            <span className="stat-label">Wrong</span>
          </div>
        </div>

        <div className="legend">
          <div className="legend-item">
            <span className="legend-color correct"></span>
            <span>Correct (you got it right)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color missed"></span>
            <span>Missed (pattern cell you didn't select)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color wrong"></span>
            <span>Wrong (you selected but wasn't in pattern)</span>
          </div>
        </div>

        <div className="result-buttons">
          <button className="btn btn-play-again" onClick={onPlayAgain}>
            Play Again
          </button>
          <button className="btn btn-settings" onClick={onChangeSettings}>
            Change Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
