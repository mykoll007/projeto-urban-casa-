document.getElementById('metodo').addEventListener('change', function() {
    var selectedOption = this.value;
    var pixContainer = document.getElementById('pixCodeContainer');
    var boletoContainer = document.getElementById('boletoImageContainer');

    if (selectedOption === 'pix') {
      pixContainer.classList.remove('hidden');
      boletoContainer.classList.add('hidden');
    } else if (selectedOption === 'boleto') {
      pixContainer.classList.add('hidden');
      boletoContainer.classList.remove('hidden');
    } else {
      pixContainer.classList.add('hidden');
      boletoContainer.classList.add('hidden');
    }
  });