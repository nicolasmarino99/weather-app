import '../assets/styles/global.scss';
import { weatherAppView } from '../views/weatherAppView'
import {getWeather} from '../db/apiCalls'

const root = document.querySelector('.root')
root.insertAdjacentHTML("afterbegin",weatherAppView())



getWeather('Bogota','metric')









