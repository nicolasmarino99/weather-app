export const weatherStats = (cityWeather) => {
    let weekWeatherStats, j

    const weatherMenu =    `<div id="time-weather">
                        <button id="week">week</button>
                        <button id="month">month</button>
                        <button id="3-month">3-month</button>
                        <button id="5-month">5-month</button>
                    </div> `
            
    const weatherStatsInfo = (iterator) =>{
                    return    `<div class="weather-stats">
                                <div>sunday</div>
                                <div class="humidity"><i></i><p>${cityWeather.list[iterator].main.humidity}%</p></div>
                                <div>O</div>
                                <div>${cityWeather.list[iterator].main.temp_min}</div>
                                <div class="line">
                                    <div class="left-probable"></div>
                                    <div class="right-probable"></div>
                                </div>
                                <div>${cityWeather.list[iterator].main.temp_max}</div>
                          </div>` }
        for (j=0; j != 6; j++) {weekWeatherStats += weatherStatsInfo(j)} 
        const dataContainer = `${weatherMenu}<div id="data-container">${weekWeatherStats}</div>`
        return dataContainer
}