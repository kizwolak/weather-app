import './style.css';
import { formatDistance, subDays , parseISO } from 'date-fns'
import { format, utcToZonedTime } from "date-fns-tz";
import getDate from './getDate';

const temperature = document.querySelector('.temperature');
const location = document.querySelector('.location');
const searchIcon = document.querySelector('#searchIcon');

async function fetchData() {
    const geo = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=New York&appid=6167a5f6c02b8d41134a2bd1b106d82a');
    const georesults = await geo.json();
    console.log(georesults);

    const lat1 = georesults[0].lat;
    const long1 = georesults[0].lon;

    console.log(lat1);
    console.log(long1);
    
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${long1}&appid=6167a5f6c02b8d41134a2bd1b106d82a`);
    const awaitResult = await result.json();
    console.log(awaitResult);

    const temp = document.createElement('h1');
    temp.textContent = Math.round(awaitResult.main.temp - 273.15);
    console.log(temp);
    temperature.appendChild(temp);

    const locationText = document.createElement('h2');
    locationText.textContent = awaitResult.name;
    location.appendChild(locationText); 

    getDate(lat1, long1);
}

fetchData();

let i = 0;
searchIcon.addEventListener('mouseenter', (e) => {
    i += 1;
    e.target.classList = 'iconSpin';
    setTimeout(() => {
        e.target.classList = '';
    }, 200);
    if (i === 10) {
        const surprise = document.createElement('p');
        surprise.textContent = 'STOP! I\'M GETTING DIZZY!!';
        e.target.parentElement.insertBefore(surprise, e.target);
    } 
});

searchIcon.addEventListener('click', () => {

});