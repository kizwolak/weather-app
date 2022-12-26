import './style.css';

const temperature = document.querySelector('.temperature');
const location = document.querySelector('.location');
const time = document.querySelector('.time');

async function fetchData() {
    const geo = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Elblag&appid=6167a5f6c02b8d41134a2bd1b106d82a');
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

    const localTime = document.createElement('h3');

    const apiTime = await fetch(`https://dev.virtualearth.net/REST/v1/timezone/61.768335,-158.808765?key=AhYi1G8C4M-UmPgzHe6BRetSjha0HmdY8u4QIffJkRBX5mkxbZLothe2eQPO39ff`);
    const apiTimeResult = await apiTime.json();
    console.log(apiTimeResult);
}

async function timeConvert (offset) {
    currentTime = new Date();

}

fetchData();