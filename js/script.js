$(document).ready(function(){
  // Inicialização/Ativação do plugin Slick
  $('#img-carrossel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: false
  });
});   

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
  
  $(document).ready(function() {
      $('#buttonFrete').click(function() {
          var cep = $('#calcularFrete').val().replace(/\D/g, ''); 
          
          
          if (cep.length != 8) {
              alert('CEP inválido. Certifique-se de digitar apenas os números.');
              return false;
          }
          
  
          $.ajax({
              url: 'https://viacep.com.br/ws/' + cep + '/json/',
              dataType: 'json',
              success: function(data) {
                  if (!data.erro) {
                      $('#rua').val(data.logradouro);
                      $('#bairro').val(data.bairro);
                      $('#est_city').val(data.localidade + '/' + data.uf);
                  } else {
                      alert('CEP não encontrado.');
                  }
              },
              error: function() {
                  alert('Erro ao buscar informações de endereço. Por favor, tente novamente mais tarde.');
              }
          });
      });
  });
   // Função para verificar se o usuário já consentiu com o uso de cookies
   function checkCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
      // Mostra o modal se o consentimento ainda não foi dado
      document.getElementById('cookie-modal').style.display = 'block';
    }
  }

  // Função para definir o consentimento de cookies
  function setCookieConsent() {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookie-modal').style.display = 'none';
  }

  // Event listener para o botão de aceitar cookies
  document.getElementById('aceitar-cookies').addEventListener('click', setCookieConsent);

  // Verifica o consentimento de cookies quando a página carrega
  window.onload = checkCookieConsent;

  //Enviar e-mail e whatsapp promoção

var btnEnviar = document.getElementById("button");
var modalMensagem = document.getElementById("modal-mensagem")

btnEnviar.addEventListener('click',function(){
  modalMensagem.style.display = "block"
})

