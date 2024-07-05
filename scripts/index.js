let api_key = "574e4c5c2052e45744593b504f4b09e3";
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let inputValue = input.value.trim();

  if (!inputValue) {
    alert(`Provide the city`);
  } else {
    fetchWeather(inputValue);
  }
});


const weather = async (city) =>{
  
}