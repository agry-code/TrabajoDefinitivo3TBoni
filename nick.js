function mostrarTextoAlmacenado() {
  var textoAlmacenado = sessionStorage.getItem('texto') || 'sin identificar';
  var textoMostrado = document.getElementById('texto-mostrado');
  textoMostrado.textContent = textoAlmacenado;
  
  
}

function almacenarEnSessionStorage() {
  var textoInput = document.getElementById('texto-input').value;
  sessionStorage.setItem('texto', textoInput);
  alert('Bienvenido '+textoInput);
  
}