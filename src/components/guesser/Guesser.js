import React, { useState } from 'react';
import { Container } from '../UI/Container';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Guesser = () => {
  let min = 1,
    max = 10;
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [coloring, setColoring] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [guessesLeft, setGuessesLeft] = useState(3);
  const [winningNum, setWinningNum] = useState(
    Math.floor(Math.random() * (max - min + 1) + min)
  );

  console.log(winningNum);
  console.log(guess);
  const guessHandler = (e) => {
    e.preventDefault();

    const value = parseInt(guess, 10);
    if (value === '' || value < min || value > max) {
      setMessage(`Please enter a number between ${min} and ${max}`);
      setTimeout(() => {
        setMessage('');
      }, 3000);
      setColoring('red');
    } else if (value === winningNum) {
      // Game over - Won
      gameOver(true);
    } else {
      // Wrong answer
      setGuessesLeft(guessesLeft - 1);
      if (guessesLeft === 0) {
        // Game Over - lost
        gameOver(false);
      } else {
        // Game Continues - answer wrong
        setColoring('red');
        setMessage(
          `${guess} was incorrect! You have ${guessesLeft} guesses left.`
        );
        setGuess('');
      }
    }
  };

  const gameOver = (won) => {
    setIsDisabled(!isDisabled);
    if (won === true) {
      setColoring('green');
      setMessage(`${winningNum} was correct! You Won!!!`);
    } else {
      setColoring('red');
      setMessage(
        `${guess} was incorrect! The winning number was ${winningNum}.`
      );
    }
  };
  return (
    <Container>
      <Card>
        <h1>Number Guesser</h1>
        <div id='game'>
          <p>
            Guess a number between <span className='min-num'>{min}</span> and
            <span className='max-num'>{max}</span>
          </p>
          <input
            type='number'
            id='guess-input'
            placeholder='Enter Your Guess...'
            onChange={(e) => setGuess(e.target.value)}
            disabled={isDisabled}
            style={{ borderColor: coloring }}
          />
          <Button id='guess-btn' guessNum={guessHandler}>
            Submit
          </Button>
          <p className='message' style={{ color: coloring }}>
            {message}
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Guesser;
