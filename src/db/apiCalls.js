import { todayWeather } from '../views/components/todayWeather'
import { weatherStats } from '../views/components/weatherStats'
import { weatherPlaces } from '../views/components/weatherPlaces'



const searchPhoto = async (keyWord) => {
    try {
        
        const clientIDKey = '5phIk2Z31V96pArCaFDbgnDH0rG6gJZ7NMaCr4R3CEg'
        let ulr2 = `https://api.unsplash.com/search/photos/?client_id=${clientIDKey}&query=${keyWord}`
        const data2 = await (await fetch(ulr2)).json()
        const photo = data2.results[0].urls.thumb
        
        const img1 = document.body.querySelector('#img-1')
        img1.style.background = `url(${photo})`;
        img1.style.backgroundSize = "cover";

    } catch(error) {
        alert(error)
    }
}

const getWeather = async (cityName,unit,container) => {
    
   try {
      
        const apiKey = '2bbd8cfc68b9d95c36a82ea2b731e3d3'
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}`
        
        const result = await fetch(url)
        const weatherData = await result.json()
        todayWeather(weatherData)
        console.log(weatherData)
        
        const weatherForecast = container.firstChild.nextElementSibling
        weatherForecast.insertAdjacentHTML("beforeend",weatherStats(weatherData))
        container.insertAdjacentHTML("beforeend",todayWeather(weatherData))
        const weatherPlacesContainer = weatherForecast.querySelector('#carrousel-places')
        console.log(weatherPlacesContainer)
        weatherPlacesContainer.insertAdjacentHTML("afterbegin",weatherPlaces(weatherData))
        
        searchPhoto(cityName)
        //console.log(weatherStats(weatherData))
    } catch(error) {
        alert('Please Type a correct city Name')
    }
}

export {getWeather}