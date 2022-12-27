import './style.css';
import searchIconLogic from './searchIconLogic';
import fetchData from './fetchData';

fetchData('Buenos Aires');
searchIconLogic();

const c = document.querySelector('.c');
const f = document.querySelector('.p');

c.addEventListener('click', () => {
    const tempH1 = document.querySelector('.tempH1');
    console.log(tempH1)
    if (!tempH1.textContent.includes('C')) {
        const celsiusTemp = tempH1.textContent.split('°');
        console.log(celsiusTemp[0]);
    }
});
