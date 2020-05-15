import '../assets/styles/global.scss';
import { weatherAppView } from '../views/weatherAppView'
import { getWeather } from '../db/apiCalls'
import { formSavedPlaces } from '../views/components/formSavedPlaces'
import { popItem, currentValue } from './helpers/btnEvents'


const insertCityWeather = async () => {
    const root = document.querySelector('.root')
    root.insertAdjacentHTML("afterbegin",weatherAppView())
    const weatherAppContainer = document.querySelector('.weather-app-container')
    
    // Step 1 get data from form
    const addCityBtn = document.querySelector('#Add-city')
    await popItem(addCityBtn,'.add-city-form','.black-bg',formSavedPlaces())
    

    
    await getWeather(await currentValue.query,'metric',weatherAppContainer)
}

insertCityWeather()




















