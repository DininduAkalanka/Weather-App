const apiKey = "387c133bd91923c0b50ae87abc9cfe96";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function chekweather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("City not found.");
        }
        
        const data = await response.json();
        console.log(data);

        // Update weather information
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Update weather icon based on condition
        const weatherCondition = data.weather[0].main;
        const weatherIcon = document.querySelector(".weather-icon");

        switch (weatherCondition) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Thunderstorm":
                weatherIcon.src = "images/thunderstorm.png";
                break;
            default:
                weatherIcon.src = "images/mist.png";
        }
    } catch (error) {
        alert(error.message);
    }
}

// Event listener for search button
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        chekweather(city);
    } else {
        alert("Please enter a city name.");
    }
});
