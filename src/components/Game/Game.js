import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
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

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput submitGuess={submitGuess} isDisabled={endGame} />
      {endGame && (
        <Banner answer={answer} isWin={isWin} attemps={guessResults.length} />
      )}
    </>
  );
}

export default Game;
