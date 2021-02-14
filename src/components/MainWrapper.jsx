import React from 'react';
import Wrapper from 'containers/Wrapper';
import { useSelector } from "react-redux";
import getBG from 'helpers/getBG';

// компонент для подключения к стору и расчету цвета;
const MainWrapper = ({children}) => {
  const weatherData = useSelector(({ weather }) => weather);
  const bgColor = getBG(weatherData?.data?.weather?.[0].main)
  return <Wrapper color={bgColor}>{children}</Wrapper>
}

export default MainWrapper;