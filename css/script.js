function getCountryInfo() {
    const countryCode = document.getElementById('countryInput').value.toUpperCase();
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(response => response.json())
        .then(data => {
            const countryInfoDiv = document.getElementById('countryInfo');
            countryInfoDiv.innerHTML = `
                <h2>Country Info</h2>
                <p>Country: ${data.name.common}</p>
                <p>Capital: ${data.capital}</p>
                <p>Population: ${data.population}</p>
                <p>Languages: ${Object.values(data.languages).join(', ')}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching country info:', error);
        });
}

function getWeatherInfo() {
    const cityName = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfoDiv = document.getElementById('weatherInfo');
            weatherInfoDiv.innerHTML = `
                <h2>Weather Info</h2>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp - 273.15}°C</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather info:', error);
        });
}
