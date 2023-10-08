const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

function changeImageAndAddClass(index) {
    MainImg.src = smallimg[index].src;
    
    // Видаляємо клас "active-photo" у всіх елементів з класом "small-img-col"
    for (var i = 0; i < smallimg.length; i++) {
        smallimg[i].parentElement.classList.remove("active-photo");
    }
    
    // Додаємо клас "active-photo" до батьківського елемента обраного малого зображення
    smallimg[index].parentElement.classList.add("active-photo");
}

// Налаштовуємо обробники подій для кожного малого зображення
smallimg[0].onclick = function () {
    changeImageAndAddClass(0);
}
smallimg[1].onclick = function () {
    changeImageAndAddClass(1);
}
smallimg[2].onclick = function () {
    changeImageAndAddClass(2);
}
smallimg[3].onclick = function () {
    changeImageAndAddClass(3);
}

