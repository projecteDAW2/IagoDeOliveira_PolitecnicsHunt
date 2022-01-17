document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
}, false);

var inicio = {
    iniciarJuego: function() {
        console.log("Juego iniciado");
        buclePrincipal.iterar();
    }
};