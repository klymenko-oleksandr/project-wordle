import React from 'react';

function Banner({ answer, isWin, attemps, restartGame }) {
  const classes = `${!!isWin ? 'happy' : 'sad'} banner`;
  const content = !!isWin ? (
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{attemps} guesses</strong>.
      <button type="button" onClick={restartGame}>
        Restart
      </button>
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
      <button onClick={restartGame}>Restart</button>
    </p>
  );

  return <div className={classes}>{content}</div>;
}

export default Banner;
