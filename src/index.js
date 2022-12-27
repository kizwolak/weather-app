import './style.css';
import searchIconLogic from './searchIconLogic';
import fetchData from './fetchData';

fetchData('Buenos Aires');
searchIconLogic();

const c = document.querySelector('.c');
const f = document.querySelector('.f');

c.addEventListener('click', () => {
    const tempH1 = document.querySelector('.tempH1');
    console.log(tempH1.textContent)
    if (!(tempH1.textContent.includes('C'))) {
        const farenheitTemp = tempH1.textContent.split('°');
        console.log(farenheitTemp[0]);
        const result = (farenheitTemp[0] -32) * (5/9);
        tempH1.textContent = `${result  }°C` 
    }
});

f.addEventListener('click', () => {
    const tempH1 = document.querySelector('.tempH1');
    if (!(tempH1.textContent.includes('F'))) {
        const celsiusTemp = tempH1.textContent.split('°');
        console.log(celsiusTemp[0]);
        const result = (celsiusTemp[0] * (9/5)) + 32;
        console.log(result);
        tempH1.textContent = `${result  }°F` 
    }
})
