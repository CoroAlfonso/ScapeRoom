function verificarPrueba1() {
  var textoIngresado = document.getElementById("textoDesbloqueo").value;
  // Aquí deberías comparar el texto ingresado con el que esperas
  if (textoIngresado === "vamcsbg@gmail.com") {
    document.getElementById("prueba2").style.display = "block";
  } else {
    alert("Texto incorrecto. Inténtalo de nuevo.");
  }
}
function verificarPrueba2() {
  var textoIngresado = document.getElementById("prueba2Desbloqueo").value;
  // Aquí deberías comparar el texto ingresado con el que esperas
  if (textoIngresado === "41°31'14.7-N 1°20'51.7-W") {
    document.getElementById("prueba3").style.display = "block";
  } else {
    alert("Texto incorrecto. Inténtalo de nuevo.");
  }
}