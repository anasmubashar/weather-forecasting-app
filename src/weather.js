let city, temperature, humidity, windSpeed, weatherDesc, country;
const search = document.getElementById("search");
const weatherDiv = document.getElementById("weather");

const fetchWeatherData = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=51122b41f541e37ccc93611c7a8d7bbf`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    weatherDiv.innerHTML = "City not found or error in fetching data.";
  }
};

const fetchForecastData = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=51122b41f541e37ccc93611c7a8d7bbf`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    weatherDiv.innerHTML = "City not found or error in fetching data.";
  }
};

const updateWeatherDisplay = (data) => {
  const { main, name, sys, weather, wind } = data;
  city = name;
  country = sys.country;
  temperature = Math.round(main.temp - 273.15);
  humidity = main.humidity;
  windSpeed = wind.speed;
  weatherDesc = weather[0].description;
  weatherDiv.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-3xl font-bold">${city}, ${country}</h2>
                <p class="text-xl">${weatherDesc}</p>
            </div>
            <div class="text-right">
                <p class="text-5xl font-bold">${temperature}°</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind: ${windSpeed} m/s</p>
            </div>
        </div>
    `;
};

const updateCharts = (data) => {
  const dailyData = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = {
        temps: [],
        humidity: [],
        conditions: [],
      };
    }
    acc[date].temps.push(item.main.temp - 273.15);
    acc[date].humidity.push(item.main.humidity);
    acc[date].conditions.push(item.weather[0].main);
    return acc;
  }, {});

  const dates = Object.keys(dailyData);
  const avgTemps = dates.map((date) => {
    const sum = dailyData[date].temps.reduce((a, b) => a + b, 0);
    return sum / dailyData[date].temps.length;
  });
  const avgHumidity = dates.map((date) => {
    const sum = dailyData[date].humidity.reduce((a, b) => a + b, 0);
    return sum / dailyData[date].humidity.length;
  });

  // Temperature Chart
  new Chart(document.getElementById("temperatureChart"), {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Average Temperature (°C)",
          data: avgTemps,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });

  // Weather Conditions Chart
  const conditionCounts = dates.reduce((acc, date) => {
    dailyData[date].conditions.forEach((condition) => {
      acc[condition] = (acc[condition] || 0) + 1;
    });
    return acc;
  }, {});

  new Chart(document.getElementById("weatherConditionsChart"), {
    type: "doughnut",
    data: {
      labels: Object.keys(conditionCounts),
      datasets: [
        {
          data: Object.values(conditionCounts),
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 206, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Humidity Chart
  new Chart(document.getElementById("humidityChart"), {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Average Humidity (%)",
          data: avgHumidity,
          backgroundColor: "rgb(153, 102, 255)",
        },
      ],
    },
    options: {
      responsive: true,

      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
};

search.addEventListener("keypress", async (event) => {
  if (event.key === "Enter") {
    const cityName = search.value.trim();
    if (cityName === "") {
      weatherDiv.innerHTML = "Please enter a city name.";
      return;
    }

    const data = await fetchWeatherData(cityName);
    const forecast = await fetchForecastData(cityName);
    if (data) {
      updateWeatherDisplay(data);
      updateCharts(forecast);
    }
  }
});

// Initialize with a default city
fetchWeatherData("London").then((data) => {
  if (data) {
    updateWeatherDisplay(data);
  }
});
fetchForecastData("London").then((data) => {
  if (data) {
    updateCharts(data);
  }
});
