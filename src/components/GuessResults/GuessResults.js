import React from 'react';

function GuessResults({ guessResults }) {
  const list = guessResults.map((item) => (
    <p className="guess" key={item.key}>
      {item.guess}
    </p>
  ));

  return <div className="guess-results">{list}</div>;
}

export default GuessResults;
