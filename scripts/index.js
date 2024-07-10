let api_key = "574e4c5c2052e45744593b504f4b09e3";
let input = document.querySelector("input");
let button = document.querySelector("button");

const hideCurrent = document.querySelector(".hideCurrent");
const hideAll = document.querySelector(".hideAll");

button.addEventListener("click", () => {
  let inputValue = input.value.trim();

  if (!inputValue) {
    alert(`Provide the city`);
  } else {
    weather(inputValue);
  }
});

const weather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("error while fetching data");
    } else {
      const data = await response.json();
      console.log(data);
      updateWeather(data);
    }
  } catch (error) {
    console.error("Error", error);
  }
};

const updateWeather = (data) => {
  const current = data.list[0];
  document.getElementById("city").innerHTML = `${input.value}`;
  document.getElementById("current-date").innerHTML = new Date(
    current.dt * 1000
  ).toDateString();
  document.getElementById(
    "current-temp"
  ).textContent = `${current.main.temp}°C`;
  document.getElementById(
    "current-humidity"
  ).innerHTML = `${current.main.humidity}%`;
  document.getElementById(
    "current-wind-speed"
  ).innerHTML = `${current.wind.speed} km/h`;
  document.getElementById(
    "current-icon"
  ).src = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;

  const first = data.list[1 * 8 - 1];
  document.getElementById("date").innerHTML = new Date(
    first.dt * 1000
  ).toDateString();
  document.getElementById("temp").textContent = `${first.main.temp}°C`;
  document.getElementById("humidity").innerHTML = `${first.main.humidity}%`;
  document.getElementById("wind-speed").innerHTML = `${first.wind.speed} km/h`;
  const second = data.list[2 * 8 - 1];
  document.getElementById("date1").innerHTML = new Date(
    second.dt * 1000
  ).toDateString();
  document.getElementById("temp1").textContent = `${second.main.temp}°C`;
  document.getElementById("humidity1").innerHTML = `${second.main.humidity}%`;
  document.getElementById(
    "wind-speed1"
  ).innerHTML = `${second.wind.speed} km/h`;

  const third = data.list[3 * 8 - 1];
  document.getElementById("date2").innerHTML = new Date(
    third.dt * 1000
  ).toDateString();
  document.getElementById("temp2").textContent = `${third.main.temp}°C`;
  document.getElementById("humidity2").innerHTML = `${third.main.humidity}%`;
  document.getElementById("wind-speed2").innerHTML = `${third.wind.speed} km/h`;

  const fourth = data.list[4 * 8 - 1];
  document.getElementById("date3").innerHTML = new Date(
    fourth.dt * 1000
  ).toDateString();
  document.getElementById("temp3").textContent = `${fourth.main.temp}°C`;
  document.getElementById("humidity3").innerHTML = `${fourth.main.humidity}%`;
  document.getElementById(
    "wind-speed3"
  ).innerHTML = `${fourth.wind.speed} km/h`;

  const fifth = data.list[5 * 8 - 1];
  document.getElementById("date4").innerHTML = new Date(
    fifth.dt * 1000
  ).toDateString();
  document.getElementById("temp4").textContent = `${fifth.main.temp}°C`;
  document.getElementById("humidity4").innerHTML = `${fifth.main.humidity}%`;
  document.getElementById("wind-speed4").innerHTML = `${fifth.wind.speed} km/h`;
};
