import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${({ color }) => color || "#498CEC"};
  display: flex;
  width: 100vw;
  height: 100vh;
`;
// обертка для фонового цвета
const Wrapper = ({ children, color }) => {
  return <StyledWrapper color={color}>{children}</StyledWrapper>;
};

export default Wrapper;
