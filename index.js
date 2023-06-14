// Obtener referencia al botón "Enviar"
let btnEnviar = document.getElementById('btn');

// Agregar un controlador de evento para el clic en el botón
btnEnviar.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento por defecto del formulario
  let numero1 = parseFloat(document.getElementById('numero1').value);
  let numero2 = parseFloat(document.getElementById('numero2').value);
  let numero3 = parseFloat(document.getElementById('numero3').value);
  let numero4 = parseFloat(document.getElementById('numero4').value);
  let numero5 = parseFloat(document.getElementById('numero5').value);
  let resultadoFinal = numero1+numero2+numero3+numero4+numero5
  let resultado = document.getElementById('Resultado');
   document.getElementById('Resultado').value = resultadoFinal
       }) 


     