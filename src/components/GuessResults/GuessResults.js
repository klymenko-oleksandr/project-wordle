import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ guessResults }) {
  const guessList = range(0, 6).map((_, idx) => (
    <Guess key={idx} guess={guessResults[idx]} />
  ));

  return <div className="guess-results">{guessList}</div>;
}

export default GuessResults;
