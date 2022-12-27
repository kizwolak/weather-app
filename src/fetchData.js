import getDate from "./getDate";
import capitalizeFirstLetter from "./capitalise";

export default async function fetchData(cityInput) {
    const temperature = document.querySelector('.temperature');
    const location = document.querySelector('.location');
    const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&appid=6167a5f6c02b8d41134a2bd1b106d82a`);
    const georesults = await geo.json();
    console.log(georesults);

    const lat1 = georesults[0].lat;
    const long1 = georesults[0].lon;

    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${long1}&appid=6167a5f6c02b8d41134a2bd1b106d82a`);
    const awaitResult = await result.json();
    console.log(awaitResult);

    const tempAndIcon = document.querySelector('.tempAndIcon');
    const tempDOM = document.querySelector('.temp');
    const temp = document.createElement('h1');
    temp.classList = 'tempH1';
    const tempDesc = document.createElement('h2');
    temp.textContent = `${Math.round(awaitResult.main.temp - 273.15)}°C`
    tempDesc.textContent = capitalizeFirstLetter(awaitResult.weather[0].description);
    console.log(temp);
    tempDOM.appendChild(temp);
    tempAndIcon.appendChild(tempDesc);


    const locationText = document.createElement('h2');
    locationText.textContent = awaitResult.name;
    location.appendChild(locationText); 

    getDate(lat1, long1);

    const icon = document.createElement('img');
    const iconName = awaitResult.weather[0].icon;
    console.log(iconName);
    icon.src = `https://openweathermap.org/img/w/${iconName}.png`;
    icon.style.width = '0.8em';
    icon.style.height = '0.8em';
    tempDOM.appendChild(icon);
}