import fetchData from "./fetchData";

export default function searchIconLogic() {
    let i = 0;
    const searchIcon = document.querySelector('#searchIcon');
    const input = document.querySelector('#input');
    const location = document.querySelector('.location');
    const time = document.querySelector('.localTime');
    const tempDOM = document.querySelector('.temp');
    const description = document.querySelector('.description');

    searchIcon.addEventListener('mouseenter', (e) => {
        i += 1;
        e.target.classList = 'iconSpin';
        setTimeout(() => {
            e.target.classList = '';
        }, 200)
        setTimeout(() => {
            i = 0;
        }, 3000)
        if (i === 10) {
            const surprise = document.createElement('p');
            surprise.textContent = 'STOP! I\'M GETTING DIZZY!!';
            e.target.parentElement.insertBefore(surprise, e.target);
            // TODO: reset count if the mouse did not move the magnifying glass for some time
            setTimeout(() => {surprise.textContent = ''}, 3000)
        } 
    });
    
    searchIcon.addEventListener('click', () => {
        if (input.classList.contains('active')) {
            input.classList = '';
            input.classList = 'hidden';   
        } else {
            input.classList = '';
            input.classList = 'active';
            input.focus();
        }
    });
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            tempDOM.innerHTML = '';
            location.innerHTML = '';
            time.innerHTML = '';
            description.innerHTML = '';
            const searchInput = input.value;
            fetchData(searchInput);
            input.value = '';
            input.classList = '';
            input.classList = 'hidden';   
        }
    })
};

