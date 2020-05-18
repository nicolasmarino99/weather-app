// eslint-disable-next-line import/prefer-default-export
export const todayWeather = (cityWeather) => {
  let constString1 = '';
  let constString2 = '';

  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };

  const days = {
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    0: 'Sun',
  };


  const lineXContainer = () => {
    const constString = `<div class="line-x-container">
            <div class="line-x">
                <div class="line-x-chance"></div>
            </div>
            <p>10AM</p>
        </div>`;
    const specialString = `<div class="line-x-container">
            <div class="line-x">
                <div class="line-x-chance line-x-today"></div>
            </div>
            <p>10AM</p>
        </div>`;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i !== 2; i++) {
      constString1 += constString;
      constString2 += constString;
    }
    return constString1 + specialString + constString2;
  };


  const todayWeatherHTML = ` <div id="today-weather">
            <div class="cloud-1"></div>
            <div class="cloud-2"></div>
            <div class="cloud-3"></div>
            <div id="app-stats">
                <div id="profile-notifications">
                    <div id="btns-nots">
                        <a id="btns-nots-1" href="#">Notifications</a>
                        <a href="#" id="toggle-temp" >F</a> 
                    </div>
                    <div>
                        <div class="profile-img"></div>
                    </div>
                </div>
                <div id="date-weather">
                    <div class="today">
                        <img src="http://openweathermap.org/img/wn/${cityWeather.list[0].weather[0].icon}@2x.png" alt="">
                        <div id="date">
                            <h2>Today</h2>
                            <p>${days[new Date(cityWeather.list[0].dt_txt).getDay()]} , ${new Date(cityWeather.list[0].dt_txt).getDate()} ${months[new Date(cityWeather.list[0].dt_txt).getMonth()]}</p>
                        </div>
                    </div>
                    <div class="grades">
                        <div id="main-grade">
                            <p id="grade">${Math.floor(cityWeather.list[0].main.temp)}</p>
                            <p id="grade-not">°C</p>
                        </div>
                        <div id="current-city">${cityWeather.city.name}, ${cityWeather.city.country}</div>
                        <div class="suggestion">
                            <p>Feels like <span id="feels-like">${Math.floor(cityWeather.list[0].main.feels_like)}</span></p>
                            <p>•</p>
                            <p>Sunset 20:15</p>
                        </div>
                    </div>
                </div>
                <h3>Chance of rain</h3>
                <div id="chance-of-rain">
                    
                    <div id="y">
                        <p>sunny</p>
                        <p>rainy</p>
                        <p>heavy rain</p>
                    </div>
                    <div id="x">
                        ${lineXContainer()}
                    </div>
                </div>
            </div>    
            </div>`;


  return todayWeatherHTML;
};