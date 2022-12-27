export default function searchIconLogic() {
    let i = 0;
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
        }
    });
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            temperature.innerHTML = '';
            location.innerHTML = '';
            localTime.innerHTML = '';
            const searchInput = input.value;
            fetchData(searchInput);
            input.value = '';
            input.classList = '';
            input.classList = 'hidden';   
        }
    })
};

