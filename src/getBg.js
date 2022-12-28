export default function getBg(cityInput) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=K2GD877H25o7bx3iLCx7LrOekHDAHuuY&s=${cityInput}`, {mode: 'cors'})
.then ((response) => response.json())
.then ((response) => {
    document.body.style.backgroundImage = `url(${response.data.images.original.url})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
})
};