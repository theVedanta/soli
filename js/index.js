
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


let links = document.querySelectorAll(".alLink");
let inp = document.querySelector("#inp");
let inpVal = inp.value;
inp.addEventListener("keyup", () => {
    inpVal = inp.value;
});
for (let link of links) {
    link.addEventListener("mouseover", () => {
        inp.value = link.getAttribute('data-val');;
    });
    link.addEventListener("mouseout", () => {
        inp.value = inpVal;
    });
};

let norm = document.querySelector(".norm")
norm.textContent = `${window.location.href}`;
