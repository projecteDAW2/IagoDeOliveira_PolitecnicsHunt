// funcion del movimiento de la caja
function movimientoCaja(caja) {
  // Dar estilo a la caja (para poder crear el spawn)
  caja.style.left = Math.floor(Math.random() * window.innerWidth - 100) + "px";
  caja.style.top = Math.floor(Math.random() * window.innerHeight - 100) + "px";

  // Un valor inicial aleatorio que se mueve a lo largo del eje x
  let speedX = parseInt(Math.random() * 15 + 1);
  // Un valor inicial aleatorio que se mueve a lo largo del eje y
  let speedY = parseInt(Math.random() * 15 + 1);

  // Obtener el valor izquierdo del cuadro actual
  let nowLeft = caja.offsetLeft;
  // Obtener el valor superior del cuadro actual
  let nowTop = caja.offsetTop;
  // Obtenga la distancia máxima de movimiento del eje x de la bola
  let maxWidth = container.offsetWidth - caja.offsetWidth;
  // Obtenga la distancia máxima de movimiento del eje y de la pelota
  let maxHeight = container.offsetHeight - caja.offsetHeight;

  // El temporizador entra en el ciclo
  setInterval(function () {
    // Cambiar el valor izquierdo de la pelota
    nowLeft += speedX;
    // Cuando la pelota llega al extremo derecho, la velocidad obtenida debe ser negativa
    if (nowLeft >= maxWidth) {
      speedX = parseInt(Math.random() * 15 + 1);
      speedX = -speedX;
    }
    // Cuando la pelota llega nuevamente al extremo izquierdo, la velocidad obtenida es positiva
    if (nowLeft <= 0) {
      speedX = parseInt(Math.random() * 15 + 1);
    }
    // Establecer el valor izquierdo para la pelota
    caja.style.left = nowLeft + "px";

    // Cambiar el valor superior de la pelota
    nowTop += speedY;
    // Cuando la pelota llega al fondo, la velocidad se vuelve negativa
    if (nowTop >= maxHeight) {
      speedY = parseInt(Math.random() * 15 + 1);
      speedY = -speedY;
    }
    // Cuando la pelota llega a la pelota superior nuevamente, la velocidad es positiva
    if (nowTop <= 0) {
      speedY = parseInt(Math.random() * 15 + 1);
    }
    // Establecer el valor más alto para la pelota
    caja.style.top = nowTop + "px";
  }, 30);
}