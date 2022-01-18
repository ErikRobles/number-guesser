import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  width: 90%;
  background-color: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px 8px 0 0;
`;

const Card = (props) => {
  return <CardStyle>{props.children}</CardStyle>;
};

export default Card;
