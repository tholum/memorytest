import React, { useState, useCallback, useMemo } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import { memoryImages, imageCategories } from '../data/memoryImages';
import useTimer from '../hooks/useTimer';

const shuffleQuestions = (questions) => {
  return questions.map(q => {
    const correctAnswer = q.options[q.correctIndex];
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    return {
      ...q,
      options: shuffled,
      correctIndex: shuffled.indexOf(correctAnswer)
    };
  });
};

function MemoryImageGame({ onBack }) {
  const [gameState, setGameState] = useState({
    phase: 'start',
    displayTime: 30,
    selectedCategory: 'all',
    currentImage: null,
    currentQuestionIndex: 0,
    answers: [],
  });

  const handleTimerComplete = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      phase: 'quiz',
    }));
  }, []);

  const { timeRemaining, start: startTimer } = useTimer(
    gameState.displayTime,
    handleTimerComplete
  );

  const filteredImages = useMemo(() => {
    if (gameState.selectedCategory === 'all') {
      return memoryImages;
    }
    return memoryImages.filter((img) => img.category === gameState.selectedCategory);
  }, [gameState.selectedCategory]);

  const handleCategoryChange = (category) => {
    setGameState((prev) => ({
      ...prev,
      selectedCategory: category,
    }));
  };

  const handleDisplayTimeChange = (time) => {
    setGameState((prev) => ({
      ...prev,
      displayTime: parseInt(time, 10),
    }));
  };

  const handleStart = () => {
    const randomIndex = Math.floor(Math.random() * filteredImages.length);
    const selectedImage = {
      ...filteredImages[randomIndex],
      questions: shuffleQuestions(filteredImages[randomIndex].questions)
    };

    setGameState((prev) => ({
      ...prev,
      phase: 'memorize',
      currentImage: selectedImage,
      currentQuestionIndex: 0,
      answers: [],
    }));

    startTimer(gameState.displayTime);
  };

  const handleAnswer = (selectedIndex) => {
    const currentQuestion = gameState.currentImage.questions[gameState.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctIndex;

    const newAnswer = {
      questionIndex: gameState.currentQuestionIndex,
      selectedIndex,
      correct: isCorrect,
    };

    const newAnswers = [...gameState.answers, newAnswer];
    const nextQuestionIndex = gameState.currentQuestionIndex + 1;

    if (nextQuestionIndex >= gameState.currentImage.questions.length) {
      setGameState((prev) => ({
        ...prev,
        answers: newAnswers,
        phase: 'results',
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: nextQuestionIndex,
      }));
    }
  };

  const handlePlayAgain = () => {
    const randomIndex = Math.floor(Math.random() * filteredImages.length);
    const selectedImage = {
      ...filteredImages[randomIndex],
      questions: shuffleQuestions(filteredImages[randomIndex].questions)
    };

    setGameState((prev) => ({
      ...prev,
      phase: 'memorize',
      currentImage: selectedImage,
      currentQuestionIndex: 0,
      answers: [],
    }));

    startTimer(gameState.displayTime);
  };

  const handleBackToMenu = () => {
    setGameState({
      phase: 'start',
      displayTime: gameState.displayTime,
      selectedCategory: gameState.selectedCategory,
      currentImage: null,
      currentQuestionIndex: 0,
      answers: [],
    });
  };

  const handleShowGallery = () => {
    setGameState((prev) => ({
      ...prev,
      phase: 'gallery',
    }));
  };

  const handleSelectImage = (image) => {
    const shuffledImage = {
      ...image,
      questions: shuffleQuestions(image.questions)
    };

    setGameState((prev) => ({
      ...prev,
      phase: 'memorize',
      currentImage: shuffledImage,
      currentQuestionIndex: 0,
      answers: [],
    }));
    startTimer(gameState.displayTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `${secs}s`;
  };

  const score = gameState.answers.filter((a) => a.correct).length;
  const totalQuestions = gameState.currentImage?.questions.length || 6;

  const progressPercent = gameState.displayTime > 0
    ? (timeRemaining / gameState.displayTime) * 100
    : 0;

  return (
    <div className="app-modern-game memory-image-game">
      <div className="game-container">
        <div className="game-header">
          <button className="btn btn-back" onClick={onBack}>
            ← Back to Games
          </button>
          <h2>Picture Memory</h2>
        </div>

        {gameState.phase === 'start' && (
          <div className="controls">
            <div className="settings">
              <div className="setting">
                <label>Category:</label>
                <select
                  value={gameState.selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  {imageCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="category-count">
                {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''} available
              </div>

              <div className="setting time-setting">
                <label>Display Time: {formatTime(gameState.displayTime)}</label>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={gameState.displayTime}
                  onChange={(e) => handleDisplayTimeChange(e.target.value)}
                  className="time-slider"
                />
                <div className="time-range-labels">
                  <span>5s</span>
                  <span>2min</span>
                </div>
              </div>

              <div className="start-buttons">
                <button
                  className="btn btn-start"
                  onClick={handleStart}
                  disabled={filteredImages.length === 0}
                >
                  Random Image
                </button>
                <button
                  className="btn btn-gallery"
                  onClick={handleShowGallery}
                  disabled={filteredImages.length === 0}
                >
                  Image Gallery
                </button>
              </div>
            </div>
          </div>
        )}

        {gameState.phase === 'gallery' && (
          <div className="gallery-phase">
            <div className="gallery-header">
              <button className="btn btn-back-gallery" onClick={handleBackToMenu}>
                ← Back to Settings
              </button>
              <p className="gallery-hint">Select an image to start the game</p>
            </div>
            <div className="image-gallery">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="gallery-card"
                  onClick={() => handleSelectImage(image)}
                >
                  <div className="gallery-card-image">
                    <img src={image.src} alt={image.title} />
                  </div>
                  <div className="gallery-card-info">
                    <h3 className="gallery-card-title">{image.title}</h3>
                    <span className="gallery-card-category">
                      {imageCategories.find((c) => c.id === image.category)?.label || image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {gameState.phase === 'memorize' && gameState.currentImage && (
          <div className="memorize-phase">
            <div className="image-container">
              <img
                src={gameState.currentImage.src}
                alt={gameState.currentImage.title}
                className="memory-image"
              />
            </div>
            <div className="timer-progress-bar">
              <div
                className="timer-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="image-info">
              <p className="image-title">{gameState.currentImage.title}</p>
              <p className="image-attribution">{gameState.currentImage.attribution}</p>
            </div>
          </div>
        )}

        {gameState.phase === 'quiz' && gameState.currentImage && (
          <div className="quiz-phase">
            <QuizQuestion
              question={gameState.currentImage.questions[gameState.currentQuestionIndex].question}
              options={gameState.currentImage.questions[gameState.currentQuestionIndex].options}
              onAnswer={handleAnswer}
              questionNumber={gameState.currentQuestionIndex + 1}
              totalQuestions={totalQuestions}
            />
          </div>
        )}

        {gameState.phase === 'results' && gameState.currentImage && (
          <div className="results-phase">
            <div className="results-modal inline">
              <h2>Results</h2>
              <div className="score-display">
                <span className="score-value">{score}</span>
                <span className="score-divider">/</span>
                <span className="score-total">{totalQuestions}</span>
              </div>
              <p className="score-label">Questions Correct</p>

              <div className="answers-review">
                {gameState.currentImage.questions.map((q, index) => {
                  const answer = gameState.answers[index];
                  return (
                    <div
                      key={index}
                      className={`answer-item ${answer?.correct ? 'correct' : 'incorrect'}`}
                    >
                      <span className="answer-indicator">
                        {answer?.correct ? '✓' : '✗'}
                      </span>
                      <span className="answer-question">{q.question}</span>
                      {!answer?.correct && (
                        <span className="correct-answer">
                          Correct: {q.options[q.correctIndex]}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="result-buttons">
                <button className="btn" onClick={handlePlayAgain}>
                  Play Again
                </button>
                <button className="btn" onClick={handleBackToMenu}>
                  Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MemoryImageGame;
