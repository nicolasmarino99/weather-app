export const weatherAppView = (cityWeather) => {
    let weatherAppHTML = `
    <div class="weather-app-container">
            <div id="weather-forcast">
                <div id="search">
                    <i></i>
                    <input type="text" placeholder="Search new place">
            
                    <select id="place-select" name="place-select">
                        <option value="" selected>My places</option>
                        <option value="Mr">Mr</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div id="weather-places">
                    <h1>Weather <span> Forecast</span></h1>
                    <div id="carrousel-places">
                        <div class="weather-img-cont">
                            <div class="img-place" id="img-1"></div>
                            <p>Germany, Berlin</p>
                        </div>
                        <div class="weather-img-cont">
                            <div class="img-place"></div>
                            <p>France, Paris</p>
                        </div>
                        <div class="weather-img-cont">
                            <div class="img-place"></div>
                            <p>USA, New York</p>
                        </div>
                        <div class="weather-img-cont">
                            <div id="Add-city" class="img-place">
                                <i></i>
                                <p>Add City</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="time-weather">
                    <button id="week">week</button>
                    <button id="month">month</button>
                    <button id="3-month">3-month</button>
                    <button id="5-month">5-month</button>
                </div>
                <div id="data-container">
                   <div class="weather-stats">
                       <div>sunday</div>
                       <div class="humidity"><i></i><p>54%</p></div>
                       <div>O</div>
                       <div>23 C°</div>
                       <div class="line">
                           <div class="left-probable"></div>
                           <div class="right-probable"></div>
                       </div>
                       <div>55C°</div>
                   </div>
                   <div class="weather-stats">
                       <div>sunday</div>
                       <div class="humidity"><i></i><p>54%</p></div>
                       <div>O</div>
                       <div>23 C°</div>
                       <div class="line">
                           <div class="left-probable"></div>
                           <div class="right-probable"></div>
                       </div>
                       <div>55C°</div>
                   </div>
                   <div class="weather-stats">
                       <div>sunday</div>
                       <div class="humidity"><i></i><p>54%</p></div>
                       <div>O</div>
                       <div>23 C°</div>
                       <div class="line">
                           <div class="left-probable"></div>
                           <div class="right-probable"></div>
                       </div>
                       <div>55C°</div>
                   </div>
                   <div class="weather-stats">
                       <div>sunday</div>
                       <div class="humidity"><i></i><p>54%</p></div>
                       <div>O</div>
                       <div>23 C°</div>
                       <div class="line">
                           <div class="left-probable"></div>
                           <div class="right-probable"></div>
                       </div>
                       <div>55C°</div>
                   </div>
                   <div class="weather-stats">
                       <div>sunday</div>
                       <div class="humidity"><i></i><p>54%</p></div>
                       <div>O</div>
                       <div>23 C°</div>
                       <div class="line">
                           <div class="left-probable"></div>
                           <div class="right-probable"></div>
                       </div>
                       <div>55C°</div>
                   </div>
                   <div class="weather-stats">
                       <div>sunday</div>
                       <div class="humidity"><i></i><p>54%</p></div>
                       <div>O</div>
                       <div>23 C°</div>
                       <div class="line">
                           <div class="left-probable"></div>
                           <div class="right-probable"></div>
                       </div>
                       <div>55C°</div>
                   </div>
                   <div class="weather-stats">
                       <div>sunday</div>
                       <div class="humidity"><i></i><p>54%</p></div>
                       <div>O</div>
                       <div>23 C°</div>
                       <div class="line">
                           <div class="left-probable"></div>
                           <div class="right-probable"></div>
                       </div>
                       <div>55C°</div>
                   </div>   
                </div>
            </div>
            <div id="today-weather">
                <div class="cloud-1"></div>
                <div class="cloud-2"></div>
                <div class="cloud-3"></div>
                <div id="app-stats">
                    <div id="profile-notifications">
                        <div id="btns-nots">
                            <a id="btns-nots-1" href="#">Notifications</a>
                            <a href="#">Places</a>
                        </div>
                        <div>
                            <div class="profile-img"></div>
                        </div>
                    </div>
                    <div id="date-weather">
                        <div class="today">
                            <i>O</i>
                            <div id="date">
                                <h2>Today</h2>
                                <p>Sat, 3 Aug</p>
                            </div>
                        </div>
                        <div class="grades">
                            <div id="main-grade">
                                <p id="grade">${Math.floor(cityWeather.list[0].main.temp)}</p>
                                <p>°C</p>
                            </div>
                            <div id="current-city">${cityWeather.city.name}, ${cityWeather.city.country}</div>
                            <div class="suggestion">
                                <p>Feels like ${Math.floor(cityWeather.list[0].main.feels_like)}</p>
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
                            <div class="line-x-container">
                                <div class="line-x">
                                    <div class="line-x-chance"></div>
                                </div>
                                <p>10AM</p>
                            </div>
                            <div class="line-x-container">
                                <div class="line-x">
                                    <div class= "line-x-chance"></div>
                                </div>
                                <p>10AM</p>             
                            </div>
                            <div class="line-x-container">
                                <div class="line-x">
                                    <div class="line-x-chance"></div>
                                </div>
                                <p>10AM</p>
                            </div>
                            <div class="line-x-container">
                                <div class="line-x line-x-today">
                                    <div class="line-x-chance line-x-today"></div>
                                </div>
                                <p>10AM</p>
                            </div>
                            <div class="line-x-container">
                                <div class="line-x">
                                    <div class="line-x-chance"></div>
                                </div>
                                <p>10AM</p>
                            </div>
                            <div class="line-x-container">
                                <div class="line-x">
                                    <div class="line-x-chance"></div>
                                </div>
                                <p>10AM</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        
        `
    return weatherAppHTML
}
