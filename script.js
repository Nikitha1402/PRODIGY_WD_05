document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const location = document.getElementById('location').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherResult.innerHTML = `The temperature in ${location} is ${temperature}°C with ${description}.`;
        })
        .catch(error => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `Error: ${error.message}`;
        });
});
