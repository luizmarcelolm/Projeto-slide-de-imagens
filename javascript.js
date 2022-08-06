//contador
let contador = 1;

//função para passar imagens
Intervalo(function() {

    document.getElementById('slide-' + contador).checked = true;
    contador++;

    if (contador > 4) {
        contador = 1;
    }

}, 4000)