import { todayWeather } from '../views/components/todayWeather';
import { weatherStats } from '../views/components/weatherStats';
import { weatherPlaces } from '../views/components/weatherPlaces';

const changeCurrentWeather = () => {
  const gradeSign = document.querySelector('#grade-not');
  const toggleTemp = document.querySelector('#toggle-temp');
  const grade = document.querySelector('#grade');
  const feelsLike = document.querySelector('#feels-like');
  const tempMins = document.getElementsByClassName('temp-min');
  const tempMaxs = document.getElementsByClassName('temp-max');

  if (gradeSign.innerText === '°C') {
    gradeSign.innerText = '°F';
    toggleTemp.innerText = '°C';
    grade.innerText = Math.floor(grade.innerText * 1.8 + 32);
    feelsLike.innerText = Math.floor(feelsLike.innerText * 1.8 + 32);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; tempMins.length > i; i++) {
      tempMins[i].innerText = Math.floor(tempMins[i].innerText * 1.8 + 32);
      tempMaxs[i].innerText = Math.floor(tempMaxs[i].innerText * 1.8 + 32);
    }
  } else if (gradeSign.innerText === '°F') {
    gradeSign.innerText = '°C';
    toggleTemp.innerText = '°F';
    grade.innerText = Math.floor((grade.innerText - 32) / 1.8);
    feelsLike.innerText = Math.floor((feelsLike.innerText - 32) / 1.8);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; tempMins.length > i; i++) {
      tempMins[i].innerText = Math.floor((tempMins[i].innerText - 32) / 1.8);
      tempMaxs[i].innerText = Math.floor((tempMaxs[i].innerText - 32) / 1.8);
    }
  }
};


const insertHTMLWeatherInfo = (weatherData, container) => {
  const weatherForecast = container.firstChild.nextElementSibling;
  const todayWeatherHTML = container.querySelector('#today-weather');
  const dataContHTML = weatherForecast.querySelector('#data-container');
  if (todayWeatherHTML && dataContHTML) {
    todayWeatherHTML.remove();
    dataContHTML.previousElementSibling.remove();
    dataContHTML.remove();
  }


  weatherForecast.insertAdjacentHTML('beforeend', weatherStats(weatherData));
  container.insertAdjacentHTML('beforeend', todayWeather(weatherData));

  const weatherPlacesContainer = weatherForecast.querySelector('#carrousel-places');
  weatherPlacesContainer.insertAdjacentHTML('afterbegin', weatherPlaces(weatherData));
};

const searchPhoto = async (keyWord) => {
  try {
    const clientIDKey = '5phIk2Z31V96pArCaFDbgnDH0rG6gJZ7NMaCr4R3CEg';
    const ulr2 = `https://api.unsplash.com/search/photos/?client_id=${clientIDKey}&query=${keyWord}`;
    const data2 = await (await fetch(ulr2)).json();
    const photo = data2.results[0].urls.thumb;

    const img1 = document.body.querySelector('#img-1');
    img1.style.background = `url(${photo})`;
    img1.style.backgroundSize = 'cover';
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const getWeather = async (cityName, unit, container) => {
  try {
    const apiKey = '2bbd8cfc68b9d95c36a82ea2b731e3d3';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}`;
    const result = await fetch(url);
    const weatherData = await result.json();
    todayWeather(weatherData);


    insertHTMLWeatherInfo(weatherData, container);

    changeCurrentWeather();
    const toggleTemp = document.querySelector('#toggle-temp');

    searchPhoto(cityName);
    toggleTemp.addEventListener('click', () => {
      changeCurrentWeather();
    });
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Please Type a correct city Name');
  }
};
