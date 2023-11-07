document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('header button');
    var mobileMenu = document.querySelector('header .absolute');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});
