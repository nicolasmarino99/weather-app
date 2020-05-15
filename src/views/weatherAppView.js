export const weatherAppView = () => {
    let weatherAppHTML = `
        <div class="weather-app-container">
            <div id="weather-forcast">
                <div id="search">
                    <i></i>
                    <input type="text" id="search-input" placeholder="Search new place">
            
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
                            <div id="Add-city" class="img-place">
                                <i></i>
                                <p>Add City</p>
                            </div>
                        </div>
                    </div>
                </div>
                

                
           
        </div>
        
        `
    return weatherAppHTML
}
