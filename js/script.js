const imgs = document.getElementById("img-carrossel");
const img = document.querySelectorAll("#img-carrossel img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 98}%)`;
}
setInterval(carrossel, 1800);