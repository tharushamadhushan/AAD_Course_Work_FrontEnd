document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8a06f4dc660ba18f71e14f9f327bd561'; // Replace with your OpenWeatherMap API key
    const city = 'Panadura'; // You can replace this with any city you want
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').textContent = `${location}`;
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('weatherDesc').textContent = `WeatherDesc: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('location').textContent = 'Error fetching weather data';
        });
});
