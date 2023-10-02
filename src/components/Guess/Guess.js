import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const defaultWord = range(0, 5).map(() => '');
  const cellList = (guess?.split('') || defaultWord).map((letter) => (
    <span className="cell">{letter}</span>
  ));

  return <p className="guess">{cellList}</p>;
}

export default Guess;
