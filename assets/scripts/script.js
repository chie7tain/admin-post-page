const toggler = document.querySelector('#nav-toggle');
const sidebar = document.querySelector('#sidebar');

toggler.addEventListener('click', showNav);

function showNav() {
    sidebar.classList.toggle('sidebar-active');
}