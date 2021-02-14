import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Body from "containers/Body";
import Container from "containers/Container";
import Footer from "containers/Footer";
import Header from "containers/Header";
import { getWeather, changeSearchPanelActive, changeUnit } from "actions/weather";
import createDerailsList from "helpers/createDetailsList";
import getIcon from "helpers/getIcon";

const MainPage = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(({ weather }) => weather);
  const cityName = weatherData?.data?.name;
  const description = weatherData?.data?.weather?.[0].description;
  const detailsList = createDerailsList(weatherData);
  const icon = getIcon(weatherData?.data?.weather?.[0].main);
  const status = weatherData.searchPanelOpen;

  const unitType = weatherData.unitType;
  const temp = unitType === 'celsius' ?
  Math.round(weatherData?.data?.main?.temp) :
  Math.round(weatherData?.data?.main?.temp * 1.8 + 32);

  const currentWeather = () => {
    dispatch(getWeather());
  };

  const changeSearchPanelStatus = () => {
    dispatch(changeSearchPanelActive(!status));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getWeather(event.target[0].value));
  }

  const handlerUnitChange = (event) => {
    dispatch(changeUnit(event.target.value));
  }

  useEffect(() => {
    currentWeather();
  }, []);

  return (
    <Container padding="75px 100px 122px 100px">
      <Header
        name={cityName}
        currentWeather={currentWeather}
        changeSearchPanelStatus={changeSearchPanelStatus}
        status={status}
        handleSubmit={handleSubmit}
        unitChange={handlerUnitChange}
      />
      <Body temp={temp} description={description} icon={icon} />
      <Footer list={detailsList} />
    </Container>
  );
};

export default MainPage;
