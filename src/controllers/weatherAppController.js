import '../assets/styles/global.scss';
import { weatherAppView } from '../views/weatherAppView';

import { formSavedPlaces } from '../views/components/formSavedPlaces';
import { popItemToRetrieveData } from './helpers/btnEvents';


const insertCityWeather = async () => {
  const root = document.querySelector('.root');
  root.insertAdjacentHTML('afterbegin', weatherAppView());


  // Step 1 get data from form
  const addCityBtn = document.querySelector('#Add-city');
  await popItemToRetrieveData(addCityBtn, '.add-city-form', '.black-bg', formSavedPlaces());
};


insertCityWeather();
