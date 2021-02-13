import React from 'react';
import Wrapper from 'containers/Wrapper';

// компонент для подключения к стору и расчету цвета;
const MainWrapper = ({children}) => {
  return <Wrapper>{children}</Wrapper>
}

export default MainWrapper;