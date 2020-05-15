// eslint-disable-next-line import/prefer-default-export
export const weatherPlaces = (cityWeather) => {
  const weatherPlacesHTML = `<div class="weather-img-cont">
                                <div class="img-place" id="img-1"></div>
                                <p>${cityWeather.city.country}, ${cityWeather.city.name}</p>
                            </div>`;
  return weatherPlacesHTML;
};