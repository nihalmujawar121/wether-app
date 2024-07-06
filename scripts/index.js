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
    }
  } catch (error) {
    console.error("Error", error);
  }
};
