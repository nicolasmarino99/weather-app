` <div id="today-weather">
<div class="cloud-1"></div>
<div class="cloud-2"></div>
<div class="cloud-3"></div>
<div id="app-stats">
    <div id="profile-notifications">
        <div id="btns-nots">
            <a id="btns-nots-1" href="#">Notifications</a>
            <a href="#" id="toggle-temp">F°</a> 
        </div>
        <div>
            <div class="profile-img"></div>
        </div>
    </div>
    <div id="date-weather">
        <div class="today">
            <i>{cityWeather.list[0].weather[0].icon}</i>
            <div id="date">
                <h2>Today</h2>
                <p>Sat, 3 Aug</p>
            </div>
        </div>
        <div class="grades">
            <div id="main-grade">
                <p id="grade">{Math.floor(cityWeather.list[0].main.temp)}</p>
                <p>°C</p>
            </div>
            <div id="current-city">{cityWeather.city.name}, {cityWeather.city.country}</div>
            <div class="suggestion">
                <p>Feels like {Math.floor(cityWeather.list[0].main.feels_like)}</p>
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
</div>`