function mostrarOcultar(id) {
    var elemento = document.getElementById(id);
   

    if (!elemento) {
        return true;
    }
    if (elemento.style.display == "none") {
        elemento.style.display = "block"
    } else {
        elemento.style.display = "none"
    };

    
    return true;
};


var valor = true
function ocultarMostrar() {
  var uno = document.getElementById('btnOcultar');
  valor?uno.innerText = "Mostrar":uno.innerText = "Ocultar";
  valor=!valor
}ñ