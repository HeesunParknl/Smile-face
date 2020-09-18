const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const face = document.querySelector('.face');


body.addEventListener('mousemove', eyeball);

function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    })
};


face.onclick = function () {
    h1.textContent = 'Ouch, it was hurt!';
}