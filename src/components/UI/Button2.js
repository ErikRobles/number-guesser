import React from 'react';
import styled from 'styled-components';

const ButtonStyle2 = styled.button`
  background-color: transparent;
  padding: 13px;
  color: palevioletred;
  border: 1px solid palevioletred;
  margin-top: 15px;
  margin-right: 5px;
  border-radius: 8px;
  cursor: pointer;
`;

const Button2 = (props) => {
  return (
    <ButtonStyle2 onClick={props.guessAgain}>{props.children}</ButtonStyle2>
  );
};

export default Button2;
