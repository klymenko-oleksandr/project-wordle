import React from 'react';

function Banner({ answer, isWin, attemps }) {
  const classes = `${!!isWin ? 'happy' : 'sad'} banner`;
  const content = !!isWin ? (
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{attemps} guesses</strong>.
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  return <div className={classes}>{content}</div>;
}

export default Banner;
