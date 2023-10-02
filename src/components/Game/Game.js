import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const submitGuess = (guessResult) => {
    const key = `key--${guessResults.length}`;
    const nextGuessResults = [...guessResults, { guess: guessResult, key }];
    setGuessResults(nextGuessResults);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
