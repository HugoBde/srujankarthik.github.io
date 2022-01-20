let body = document.body;
let btn = document.getElementById("toggle-view");
btn.addEventListener('click', function () {
    body.classList.toggle('light-mode');
})

console.log('everything is loaded');