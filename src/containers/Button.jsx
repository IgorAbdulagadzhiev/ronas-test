import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  opacity: 60%;
  font-size: 18px;
  line-height: 22px;
  padding: 0;
  margin-right: 30px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  ${({ icon }) => icon && `
    padding-left: 25px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 18px;
      height: 24px;
      background-image: url(${icon});
      background-size: cover;
      background-repeat: no-repeat
    }
  `};

  &:hover {
    opacity: 100%;
  }
`;

const Button = ({children, ...props}) => {
  return (
    <StyledButton { ...props }>
      {children}
    </StyledButton>
  )
}

export default Button;