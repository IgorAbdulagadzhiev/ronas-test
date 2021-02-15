import { call } from "redux-saga/effects";

import { dispatchSuccess, dispatchFailed } from "actions";
import * as weatherService from "services/weather";

export function* loadWeather({ type, payload }) {
  const weather = yield call(weatherService.getWeather, payload);
  if (weather.cod === "404") {
    yield dispatchFailed(type, weather);
  } else {
    yield dispatchSuccess(type, weather);
  }
}
