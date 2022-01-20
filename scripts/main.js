let body = document.body;
let btn = document.getElementById("toggle-view");
// let darkMode = document.querySelector('.bi bi-moon-fill');
btn.addEventListener('click', function () {
    body.classList.toggle('light-mode');
    btn.classList.toggle('bi-moon-fill');
    btn.classList.toggle('bi-brightness-high');
})

console.log('everything is loaded');