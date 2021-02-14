import { takeEvery } from "redux-saga/effects";

import { GET_WEATHER } from 'actions/weather';
import { loadWeather } from './weather';

export default function* () {
  yield takeEvery(GET_WEATHER, loadWeather);
}