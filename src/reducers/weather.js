import { isLoaded } from "actions";
import {
  GET_WEATHER,
  CHANGE_SEARCH_PANEL_ACTIVE,
  UNIT_CHANGE,
} from "actions/weather";

const initialState = {
  data: {},
  searchPanelOpen: false,
  unitType: "celsius",
  loading: false,
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER: {
      return { ...state, loading: true }
    }
    case isLoaded(GET_WEATHER, true): {
      return { ...state, data: payload, searchPanelOpen: false, loading: false };
    }
    case isLoaded(GET_WEATHER, false): {
      return { ...state, error: payload, loading: false };
    }
    case CHANGE_SEARCH_PANEL_ACTIVE: {
      return { ...state, searchPanelOpen: payload };
    }
    case UNIT_CHANGE: {
      return { ...state, unitType: payload };
    }
    default: {
      return state;
    }
  }
};
