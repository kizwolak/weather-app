import './style.css';

async function fetchData() {
    const geo = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&appid=6167a5f6c02b8d41134a2bd1b106d82a');
    const georesults = await geo.json();
    console.log(georesults);
    const lat1 = georesults[0].lat;
    const long1 = georesults[0].lon;
    console.log(lat1);
    console.log(long1);
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${long1}&appid=6167a5f6c02b8d41134a2bd1b106d82a`);
    const awaitResult = await result.json();
    console.log(awaitResult);
    const temp = awaitResult.main.temp - 273.15;
    console.log(temp);
}

fetchData();