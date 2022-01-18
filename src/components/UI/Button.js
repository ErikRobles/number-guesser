import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: palevioletred;
  padding: 13px;
  color: white;
  border: none;
  margin-top: 15px;
  margin-right: 5px;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = (props) => {
  return <ButtonStyle onClick={props.guessNum}>{props.children}</ButtonStyle>;
};

export default Button;
