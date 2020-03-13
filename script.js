const MENU = document.getElementById('nav_list');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('first'));
    event.target.classList.add('first');
});