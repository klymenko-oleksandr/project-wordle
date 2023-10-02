import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ guessResults, answer }) {
  const guessList = range(0, 6).map((_, idx) => (
    <Guess key={idx} guess={guessResults[idx]} answer={answer} />
  ));

  return <div className="guess-results">{guessList}</div>;
}

export default GuessResults;
