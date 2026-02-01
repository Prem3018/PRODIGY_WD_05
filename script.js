const apiKey = "6c148c8673eee70460ef9cbe47f5399e";

function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("location").innerText = data.name;
      document.getElementById("temp").innerText =
        `Temperature: ${data.main.temp} °C`;
      document.getElementById("condition").innerText =
        `Weather: ${data.weather[0].main}`;
      document.getElementById("humidity").innerText =
        `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").innerText =
        `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch(() => {
      alert("City not found");
    });
}
