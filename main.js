const button = document.getElementById('menu-button')
const menu = document.getElementById('menu')

button.addEventListener('click', showMenu )


function showMenu() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active')
    } else {
        menu.classList.add('is-active')
    }
}
