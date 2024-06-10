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

  var btnEnviar = document.querySelector("#button button");
var modalMensagem = document.getElementById("modal-mensagem")
var modalFechar = document.getElementById("fechar-promoção")

btnEnviar.addEventListener('click',function(){
  modalMensagem.style.display = "block";
})

modalFechar.addEventListener('click', function(){
  modalMensagem.style.display = "none"
})

//Interações alternada entre Adidas e Nike

var btnAdidas = document.getElementById("btn-adidas")

btnAdidas.addEventListener('click',function(){
    btnAdidas.style.backgroundColor = "white"
  if(btnNike.style.backgroundColor == "white"){
    btnNike.style.backgroundColor = "#ff9900"
    btnAdidas.style.backgroundColor = "white"
  }

  //Primeiro card
  document.getElementById("img1").src='/assets/image 21.png'
  document.getElementById("text1").innerHTML = "Camiseta Adicolor Classics Trefoil"
  document.getElementById("preço1").innerHTML = "R$ 109,99"
  document.getElementById("juros1").innerHTML = "4x de R$ 27,25 sem juros"
  //Segundo card
  document.getElementById("img2").src = '/assets/image 23.png'
  document.getElementById("text2").innerHTML = "Camiseta Estampada Camo Tongue Label"
  document.getElementById("preço2").innerHTML = "R$ 109,99"
  document.getElementById("juros2").innerHTML = "4x de R$ 27,25 sem juros"
  // Terceiro card
  document.getElementById("img3").src = '/assets/image 26.png'
  document.getElementById("text3").innerHTML = "Camiseta Manga Longa Adicolor Classics3 Stripes"
  document.getElementById("preço3").innerHTML = "R$ 169,99"
  document.getElementById("juros3").innerHTML = "4x de R$ 42,49 sem juros"
  // Quarto card
  document.getElementById("img4").src = '/assets/image 28.png'
  document.getElementById("text4").innerHTML = "Camiseta Oversize Adicolor Classics"
  document.getElementById("preço4").innerHTML = "R$ 189,99"
  document.getElementById("juros4").innerHTML = "4x de R$ 47,49 sem juros"
})

var btnNike = document.getElementById("btn-nike")

btnNike.addEventListener('click',function(){
    if(btnAdidas.style.backgroundColor == "white"){
      btnAdidas.style.backgroundColor = "#ff9900"
      btnNike.style.backgroundColor = "white"
    } 
    
  
    //Primeiro card
    document.getElementById("img1").src='/assets/blusaonikefem.png'
    document.getElementById("text1").innerHTML = "Blusão Nike Sportswear Club Fleece Feminino"
    document.getElementById("preço1").innerHTML = "R$ 209,99"
    document.getElementById("juros1").innerHTML = "4x de R$ 52,49 sem juros"
    //Segundo card
    document.getElementById("img2").src = '/assets/camisetanike.png'
    document.getElementById("text2").innerHTML = "Camiseta NikeCourt Heritage Masculina"
    document.getElementById("preço2").innerHTML = "R$ 149,99"
    document.getElementById("juros2").innerHTML = "4x de R$ 37,49 sem juros"
    // Terceiro card
    document.getElementById("img3").src = '/assets/jaquetanike.png'
    document.getElementById("text3").innerHTML = "Jaqueta Nike Repel Miler Masculina"
    document.getElementById("preço3").innerHTML = "R$ 299,99"
    document.getElementById("juros3").innerHTML = "4x de R$ 74,99 sem juros"
    // Quarto card
    document.getElementById("img4").src = '/assets/blusaonikemasc.png'
    document.getElementById("text4").innerHTML = "Blusão Nike Sportswear Club Fleece Masculino"
    document.getElementById("preço4").innerHTML = "R$ 209,99"
    document.getElementById("juros4").innerHTML = "4x de R$ 52,49 sem juros"
})