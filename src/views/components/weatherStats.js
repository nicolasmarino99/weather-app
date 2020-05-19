// eslint-disable-next-line import/prefer-default-export
export const weatherStats = (cityWeather) => {
  let weekWeatherStats = '';
  let j;

  const weatherMenu = `<div id="time-weather">
                                <button id="week">week</button>
                                <button id="month">month</button>
                                <button id="3-month">3-month</button>
                                <button id="5-month">5-month</button>
                            </div> `;

  const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday',
  };
  const weatherStatsInfo = (iterator) => `<div class="weather-stats">
                                <div>${days[new Date(cityWeather.list[iterator].dt_txt).getDay()]} ${new Date(cityWeather.list[iterator].dt_txt).getHours()}:00</div>
                                <div class="humidity"><i></i><p>${cityWeather.list[iterator].main.humidity}%</p></div>
                                <div><img src="http://openweathermap.org/img/wn/${cityWeather.list[0].weather[0].icon}@2x.png"></div>
                                <div class="temp-min">${cityWeather.list[iterator].main.temp_min}</div>
                                <div class="line">
                                    <div class="left-probable"></div>
                                    <div class="right-probable"></div>
                                </div>
                                <div class="temp-max">${cityWeather.list[iterator].main.temp_max}</div>
                          </div>`;
  // eslint-disable-next-line no-plusplus
  for (j = 0; j !== 7; j++) { weekWeatherStats += weatherStatsInfo(j); }
  const dataContainer = `${weatherMenu}<div id="data-container">${weekWeatherStats}</div>`;
  return dataContainer;
};