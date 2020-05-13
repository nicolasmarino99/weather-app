import '../assets/styles/global.scss';
import { weatherAppView } from '../views/weatherAppView'

const root = document.querySelector('.root')

root.insertAdjacentHTML("afterbegin",weatherAppView())