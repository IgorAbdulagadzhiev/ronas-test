import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth || "1400px"};
  min-width: ${({ minWidth }) => minWidth || "375px"};
  width: 100%;
  margin: 0 auto;
  padding: ${({ padding }) => padding || "0"};
  @media (max-width: 720px) {
    padding: 25px 20px 40px 20px;
  }
`;

// контейнер для центрирования и размеров
const Container = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

export default Container;
