import Sun from 'img/sun.png';
import Storm from 'img/strom.png';
import Rain from 'img/rain.png';
import Cloud from 'img/cloud.png';
import Partly from 'img/partly.png';

export default (main) => {
  let icon;
  switch(main) {
    case 'Clear':
      icon = Sun;
      break;
    case 'Clouds':
      icon = Partly;
      break;
    case 'Rain':
      icon = Rain;
      break;
    case 'Thunderstorm':
      icon = Storm;
      break;
    case 'Drizzle':
    case 'Snow':
      icon = Cloud;
      break;
    default:
      icon = Sun;
  }
  return icon;
}