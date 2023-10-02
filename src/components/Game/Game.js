import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const initialAnswer = () => {
  // Pick a random word on every pageload.
  const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  return answer;
};

function Game() {
  const [answer, setAnswer] = React.useState(initialAnswer);
  const [guessResults, setGuessResults] = React.useState([]);
  const [endGame, setEndGame] = React.useState(false);
  const [isWin, setIsWin] = React.useState(false);
  const submitGuess = (guess) => {
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);
    const isCorrectGuess = guess === answer;
    setIsWin(isCorrectGuess);
    const isGameFinished =
      isCorrectGuess || nextGuessResults.length === NUM_OF_GUESSES_ALLOWED;
    setEndGame(isGameFinished);
  };
  const restartGame = () => {
    const answer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
    setAnswer(answer);
    setGuessResults([]);
    setIsWin(false);
    setEndGame(false);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput submitGuess={submitGuess} isDisabled={endGame} />
      {endGame && (
        <Banner
          answer={answer}
          isWin={isWin}
          attemps={guessResults.length}
          restartGame={restartGame}
        />
      )}
    </>
  );
}

export default Game;
