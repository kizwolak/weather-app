import { format, utcToZonedTime } from "date-fns-tz";

export default async function getDate(lat1, long1) {
    const time = document.querySelector('.localTime');
    const apiTime = await fetch(`https://dev.virtualearth.net/REST/v1/timezone/${lat1},${long1}?key=AhYi1G8C4M-UmPgzHe6BRetSjha0HmdY8u4QIffJkRBX5mkxbZLothe2eQPO39ff`);
    const apiTimeResult = await apiTime.json();
    const timeDesc = document.createElement('h3');
    console.log(apiTimeResult);
    const localTime = new Date(`${apiTimeResult.resourceSets[0].resources[0].timeZone.convertedTime.localTime}`);
    const parsedTime = utcToZonedTime(localTime);
    console.log(parsedTime);
    const formatted = format(parsedTime, 'eee, do MMM, HH:mm');
    timeDesc.textContent = `Local date: ${formatted}`;
    time.appendChild(timeDesc);
}