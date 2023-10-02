import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers.js';

function Guess({ guess, answer }) {
  const defaultList = () =>
    range(0, 5).map((_, idx) => <span className="cell" key={idx}></span>);
  const guessList = () =>
    checkGuess(guess, answer).map((item, idx) => {
      const classes = 'cell' + (item.status ? ` ${item.status}` : '');

      return (
        <span className={classes} key={idx}>
          {item.letter}
        </span>
      );
    });
  const result = !!guess ? guessList() : defaultList();

  return <p className="guess">{result}</p>;
}

export default Guess;
