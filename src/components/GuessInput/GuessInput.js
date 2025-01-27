import React from 'react';

function GuessInput({ submitGuess, isDisabled = false }) {
  const [guess, setGuess] = React.useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    console.info({ guess });
    submitGuess(guess);
    setGuess('');
  };
  const inputHandler = (event) => {
    const guess = event.target.value?.trim().toUpperCase();
    setGuess(guess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        autoComplete="off"
        required={true}
        pattern=".{5,5}"
        disabled={isDisabled}
        value={guess}
        onChange={inputHandler}
      />
    </form>
  );
}

export default GuessInput;
