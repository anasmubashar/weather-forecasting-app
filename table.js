import { GoogleGenerativeAI } from "@google/generative-ai";

// Weather API key
const API_KEY = "51122b41f541e37ccc93611c7a8d7bbf";

// DOM elements
const searchInput = document.getElementById("search");
const tableBody = document.getElementById("tableBody");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Gemini API setup
const GeminiApi = "AIzaSyCar8kQJSppSiKCUSaDKOLKW9EV7uYCjMc";
const genAI = new GoogleGenerativeAI(GeminiApi);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt =
  "You are a weather chatbot that answers user queries based on weather data provided. Only respond to questions related to the weather, and redirect unrelated questions by saying: 'I can only assist with weather-related questions. How can I help you with the weather?'";

// Pagination variables
let currentPage = 1;
const rowsPerPage = 5;
let weatherData = [];

let currentCity = "London";

// Fetch weather data
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    weatherData = data.list.map((entry) => ({
      dateTime: new Date(entry.dt * 1000).toLocaleString(),
      temp: Math.round(entry.main.temp - 273.15),
      weather: entry.weather[0].main,
      humidity: entry.main.humidity,
      windSpeed: entry.wind.speed,
    }));

    currentCity = city; // Update the current city
    renderTable(1);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    tableBody.innerHTML =
      '<tr><td colspan="3" class="text-center text-red-500">City not found or error occurred.</td></tr>';
    throw error;
  }
}

// Render table with pagination
function renderTable(page) {
  tableBody.innerHTML = "";
  const start = (page - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, weatherData.length);

  for (let i = start; i < end; i++) {
    const row = `
            <tr>
                <td class="p-2 border-b">${weatherData[i].dateTime}</td>
                <td class="p-2 border-b">${weatherData[i].temp}°C</td>
                <td class="p-2 border-b">${weatherData[i].weather}</td>
            </tr>
        `;
    tableBody.innerHTML += row;
  }

  const totalPages = Math.ceil(weatherData.length / rowsPerPage);
  pageInfo.textContent = `Page ${page} of ${totalPages}`;
  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages;
  currentPage = page;
}

// Event listeners for pagination
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) renderTable(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(weatherData.length / rowsPerPage);
  if (currentPage < totalPages) renderTable(currentPage + 1);
});

// Search event listener
searchInput.addEventListener("keypress", async (event) => {
  if (event.key === "Enter") {
    const city = searchInput.value.trim();
    if (city) {
      try {
        await fetchWeatherData(city);
        addMessage(`Weather data for ${city} has been updated.`, false);
      } catch (error) {
        addMessage(`Failed to fetch weather data for ${city}.`, false);
      }
    }
  }
});

// Chatbot functionality
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `mb-2 ${isUser ? "text-right" : "text-left"}`;
  messageDiv.innerHTML = `
        <span class="inline-block p-2 rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }">
            ${message}
        </span>
    `;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function generateResponse(query) {
  try {
    const cityMatch = query.match(/in\s+(\w+)/i);
    let city = currentCity;

    if (cityMatch) {
      city = cityMatch[1];
      try {
        await fetchWeatherData(city);
      } catch (error) {
        return `I'm sorry, I couldn't find weather data for ${city}. Can you please check the city name and try again?`;
      }
    }

    const currentWeather = weatherData[0]; // Get the most recent weather data
    const weatherInfo = JSON.stringify({
      city: city,
      currentWeather: currentWeather,
      forecast: weatherData.slice(0, 5), // Include forecast for the next 5 time periods
    });

    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${prompt}\n\nWeather data: ${weatherInfo}\n\nUser query: ${query}`,
            },
          ],
        },
      ],
    });
    return response.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
  }
}

async function handleChatQuery() {
  const query = userInput.value.trim();
  if (!query) return;

  addMessage(query, true);
  userInput.value = "";

  addMessage("Thinking...", false);
  const response = await generateResponse(query);
  chatBox.removeChild(chatBox.lastChild); // Remove "Thinking..." message
  addMessage(response, false);
}

sendBtn.addEventListener("click", handleChatQuery);
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") handleChatQuery();
});

// Initialize with a default city
fetchWeatherData("London");
