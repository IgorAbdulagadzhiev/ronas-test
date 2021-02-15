const apiBase = "http://api.openweathermap.org/data/2.5/";
const key = "6a8646774af02998e633e674fbacc2d6";
const units = "metric";
const lang = "RU";
const ip = "http://ip-api.com/json/?lang=ru";

export const getWeather = async (cityName) => {
  const fetchWeather = async (cityName) => {
    const res = await fetch(
      `${apiBase}weather?q=${cityName}&units=${units}&lang=${lang}&appid=${key}`
    );

    return await res.json();
  };

  if (!!cityName) {
    return fetchWeather(cityName);
  } else {
    const ip = await getIP();
    return fetchWeather(ip.city);
  }
};

export const getIP = async () => {
  const res = await fetch(`${ip}`);

  if (!res.ok) {
    throw new Error(`error: status ${res.status}`);
  }

  return await res.json();
};
