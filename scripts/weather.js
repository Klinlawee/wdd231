const city = 'Trier,DE'; // Using city and country code
const units = 'metric';
const currentTempElement = document.getElementById('current-temp');
const weatherIconElement = document.getElementById('weather-icon');
const weatherDescElement = document.getElementById('weather-desc');
const forecastContainer = document.getElementById('forecast');

// Weather icon mapping
const weatherIcons = {
  '01d': '☀️', '01n': '🌙',  // clear sky
  '02d': '⛅', '02n': '⛅',  // few clouds
  '03d': '☁️', '03n': '☁️',  // scattered clouds
  '04d': '☁️', '04n': '☁️',  // broken clouds
  '09d': '🌧️', '09n': '🌧️',  // shower rain
  '10d': '🌦️', '10n': '🌦️',  // rain
  '11d': '⚡', '11n': '⚡',  // thunderstorm
  '13d': '❄️', '13n': '❄️',  // snow
  '50d': '🌫️', '50n': '🌫️'   // mist
};

async function getWeather() {
  try {
    // Show loading state
    currentTempElement.textContent = 'Loading...';
    weatherDescElement.textContent = '';
    forecastContainer.innerHTML = '<div class="forecast-item">Loading forecast...</div>';
    
    // Fetch from your backend
    const response = await fetch(`/api/weather?city=${city}&units=${units}`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Process current weather
    const current = data.list[0];
    const currentTemp = current.main.temp.toFixed(1);
    const currentDesc = current.weather[0].description;
    const currentIcon = current.weather[0].icon;
    
    currentTempElement.textContent = `${currentTemp}°C`;
    weatherDescElement.textContent = currentDesc;
    weatherIconElement.alt = currentDesc;
    
    // Use emoji icon based on the icon code
    if (weatherIcons[currentIcon]) {
      weatherIconElement.textContent = weatherIcons[currentIcon];
    }

    // Process today + 3-day forecast
    forecastContainer.innerHTML = '';
    
    // Get today's noon forecast and next 3 days
    const forecastDays = data.list.filter(item => 
      item.dt_txt.includes('12:00:00')
    ).slice(0, 4); // Changed to include today and next 3 days

    forecastDays.forEach((day, index) => {
      let dateText;
      if (index === 0) {
        dateText = 'Today';
      } else {
        dateText = new Date(day.dt_txt).toLocaleDateString(undefined, { 
          weekday: 'short' 
        });
      }
      
      const temp = day.main.temp.toFixed(1);
      const icon = day.weather[0].icon;
      const desc = day.weather[0].description;
      
      const forecastItem = document.createElement('div');
      forecastItem.className = 'forecast-item';
      forecastItem.innerHTML = `
        <div class="forecast-day">${dateText}</div>
        <div class="forecast-icon">${weatherIcons[icon] || '☁️'}</div>
        <div class="forecast-temp">${temp}°C</div>
        <div class="forecast-desc">${desc}</div>
      `;
      forecastContainer.appendChild(forecastItem);
    });

  } catch (error) {
    console.error('Weather API error:', error);
    currentTempElement.textContent = 'Error loading data';
    weatherDescElement.textContent = 'Please try again later';
    forecastContainer.innerHTML = '<div class="forecast-item">Forecast unavailable</div>';
  }
}

// Initial load
getWeather();

// Refresh weather every 30 minutes
setInterval(getWeather, 30 * 60 * 1000);