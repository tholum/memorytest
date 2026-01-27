import React, { memo } from 'react';

const Cell = memo(({
  filled,
  selected,
  exploded,
  showPattern,
  disabled,
  onClick,
  resultState
}) => {
  const getClassName = () => {
    const classes = ['cell'];

    if (exploded) {
      classes.push('exploded');
    } else if (resultState) {
      // Results phase
      if (resultState === 'correct') classes.push('correct');
      else if (resultState === 'missed') classes.push('missed');
      else if (resultState === 'wrong') classes.push('wrong');
    } else if (showPattern) {
      // Memorize phase - show the pattern
      if (filled) classes.push('pattern');
    } else if (selected) {
      // Input phase - show user selection
      classes.push('selected');
    }

    if (disabled) classes.push('disabled');

    return classes.join(' ');
  };

  const handleMouseDown = (e) => {
    if (!disabled && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      className={getClassName()}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      disabled={disabled || exploded}
      type="button"
    >
      {exploded && (
        <span className="mine">
          <svg viewBox="0 0 24 24" width="20" height="20">
            {/* Mine body */}
            <circle cx="12" cy="12" r="6" fill="#000" />
            {/* Spikes */}
            <line x1="12" y1="2" x2="12" y2="6" stroke="#000" strokeWidth="2" />
            <line x1="12" y1="18" x2="12" y2="22" stroke="#000" strokeWidth="2" />
            <line x1="2" y1="12" x2="6" y2="12" stroke="#000" strokeWidth="2" />
            <line x1="18" y1="12" x2="22" y2="12" stroke="#000" strokeWidth="2" />
            <line x1="5" y1="5" x2="8" y2="8" stroke="#000" strokeWidth="2" />
            <line x1="16" y1="16" x2="19" y2="19" stroke="#000" strokeWidth="2" />
            <line x1="5" y1="19" x2="8" y2="16" stroke="#000" strokeWidth="2" />
            <line x1="16" y1="8" x2="19" y2="5" stroke="#000" strokeWidth="2" />
            {/* Highlight */}
            <circle cx="10" cy="10" r="2" fill="#fff" />
          </svg>
        </span>
      )}
    </button>
  );
});

export default Cell;
