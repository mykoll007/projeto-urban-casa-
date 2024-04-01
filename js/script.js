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

let timer;
let secondsRemaining = 24 * 3600 + 59 * 60 + 59;

function updateTimer() {
  secondsRemaining--;
  if (secondsRemaining <= 0) {
    clearInterval(timer);
    secondsRemaining = 24 * 3600 + 59 * 60 + 59; // Reiniciar para 24 horas, 59 minutos e 59 segundos
  }
  updateDisplay();
}

function updateDisplay() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.querySelector(".timer").innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

// Iniciar o cronômetro automaticamente
timer = setInterval(updateTimer, 1000);

function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
      closeModal();
    }
  }