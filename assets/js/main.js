document.addEventListener("DOMContentLoaded", function () {
    const burgerToggle = document.getElementById("burgerToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (burgerToggle && mobileMenu) {
        burgerToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
        });
    }
});