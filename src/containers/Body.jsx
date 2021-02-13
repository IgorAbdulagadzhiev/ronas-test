import React from "react";
import styled from "styled-components";
import Sun from "img/sun.png";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 180px;
  line-height: 1;
  @media screen and (max-width: 767px) {
		font-size: 90px;
	}

`;

const ValueIcon = styled.img`
	flex-shrink: 0;
	max-width: 200px;

	@media screen and (max-width: 767px) {
		max-width: 100px;
	}

`;

const ValueDescription = styled.span`
  font-size: 25px;
  line-height: 30px;
  @media screen and (max-width: 767px) {
		font-size: 18px;
	}

`

const Body = () => {
  return (
    <Main>
      <ValueContainer>
        <ValueIcon src={Sun} />
        <span>
          19<span>º</span>
        </span>
      </ValueContainer>
      <ValueDescription>Преимущественно солнечно</ValueDescription>
    </Main>
  );
};

export default Body;
