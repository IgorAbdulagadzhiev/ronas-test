import { blueBG, greyBG } from "constants/bg";

export default (main) => {
  let color;
  switch (main) {
    case "Clear":
    case "Clouds":
      color = blueBG;
      break;
    case "Rain":
    case "Thunderstorm":
    case "Drizzle":
    case "Snow":
      color = greyBG;
      break;
    default:
      color = blueBG;
  }
  return color;
};
