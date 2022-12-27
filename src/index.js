import './style.css';
import { formatDistance, subDays , parseISO } from 'date-fns'
import { format, utcToZonedTime } from "date-fns-tz";
import getDate from './getDate';
import searchIconLogic from './searchIconLogic';

const temperature = document.querySelector('.temperature');
const location = document.querySelector('.location');
const searchIcon = document.querySelector('#searchIcon');
const input = document.querySelector('#input');
const localTime = document.querySelector('.localTime');

async function fetchData(cityInput) {
    const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&appid=6167a5f6c02b8d41134a2bd1b106d82a`);
    const georesults = await geo.json();
    console.log(georesults);

    const lat1 = georesults[0].lat;
    const long1 = georesults[0].lon;

    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${long1}&appid=6167a5f6c02b8d41134a2bd1b106d82a`);
    const awaitResult = await result.json();
    console.log(awaitResult);

    const temp = document.createElement('h1');
    const tempDesc = document.createElement('h2');
    temp.textContent = Math.round(awaitResult.main.temp - 273.15);
    tempDesc.textContent = awaitResult.weather[0].description;
    console.log(temp);
    temperature.appendChild(temp);
    temperature.appendChild(tempDesc);

    const locationText = document.createElement('h2');
    locationText.textContent = awaitResult.name;
    location.appendChild(locationText); 

    getDate(lat1, long1);

    const icon = document.createElement('img');
    const iconName = awaitResult.weather[0].icon;
    console.log(iconName);
    icon.src = await fetch(`http://openweathermap.org/img/wn/${iconName}@2x.png`);
}

fetchData('Buenos Aires');

searchIconLogic();
