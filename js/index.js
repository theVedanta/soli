
let num = document.querySelector(".num");
let counter = 0;
let pause = document.querySelector(".pause");

setInterval(() => {
    if (counter == 100) {
        clearInterval();
    } else {
        counter++
        num.textContent = `${counter}%`
    };
}, 80);
