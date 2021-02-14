export const UNIT_CHANGE = "UNIT_CHANGE";
export const GET_WEATHER = "GET_WEATHER";
export const CHANGE_SEARCH_PANEL_ACTIVE = "CHANGE_SEARCH_PANEL_ACTIVE";

export const getWeather = (cityName) => {
  return {
    type: GET_WEATHER,
    payload: cityName,
  };
};

export const changeSearchPanelActive = (status) => {
  return {
    type: CHANGE_SEARCH_PANEL_ACTIVE,
    payload: status,
  };
};

export const changeUnit = (unit) => {
  return {
    type: UNIT_CHANGE,
    payload: unit,
  };
};
