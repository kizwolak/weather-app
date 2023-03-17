import getDate from "./getDate";
import capitalizeFirstLetter from "./capitalise";
import getBg from "./getBg";

export default async function fetchData(cityInput) {
  const main = document.querySelector(".main");
  const location = document.querySelector(".location");
  const description = document.querySelector(".description");
  const tempDOM = document.querySelector(".temp");

  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=6167a5f6c02b8d41134a2bd1b106d82a`
  );
  const awaitResult = await result.json();

  const temp = document.createElement("h1");
  temp.classList = "tempH1";
  const tempDesc = document.createElement("h2");
  tempDesc.classList = "tempDesc";
  temp.textContent = `${Math.round(awaitResult.main.temp - 273.15)}°C`;
  tempDesc.textContent = capitalizeFirstLetter(
    awaitResult.weather[0].description
  );
  tempDOM.appendChild(temp);
  description.appendChild(tempDesc);

  const locationText = document.createElement("h2");
  locationText.textContent = awaitResult.name;
  location.appendChild(locationText);

  getDate(lat1, long1);

  const icon = document.createElement("img");
  const iconName = awaitResult.weather[0].icon;
  icon.src = `https://openweathermap.org/img/w/${iconName}.png`;
  icon.style.width = "0.8em";
  icon.style.height = "0.8em";
  tempDOM.appendChild(icon);

  if (iconName.includes("d")) {
    main.style.backgroundColor = "orange";
    main.style.color = "black";
  }
  if (iconName.includes("n")) {
    main.style.backgroundColor = "#3a2b59";
    main.style.color = "white";
  }

  getBg(cityInput);
}
