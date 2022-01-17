let arrayImgCaja = ["./img/caja.png","./img/caja1.png","./img/caja2.png","./img/caja3.png","./img/caja4.png"];
let empezarTiempo = false;
let contadorTiempoRestante = null;
// Get the modal
var modal = document.getElementById("myModal1");
// Get the modal
var modal2 = document.getElementById("myModal2");
// Get the <span> element that closes the modal
var button = document.getElementsByClassName("boton-empezar-a-jugar")[0];
//llamar a abrir modal
abrirModal();
// When the user clicks on <span> (x), close the modal
button.onclick = function () {
  modal.style.display = "none";
  empezarTiempo = true;
  cronometro();
};
//funcion modal
function abrirModal() {
  modal.style.display = "block";
}
//funcion modal
function abrirModal2() {
  modal2.style.display = "block";
}

if (empezarTiempo == true) {
  //llamar a la funcion de restar tiempo y hacerlo cada 1s / 1000ms
}
function cronometro() {
  contadorTiempoRestante = setInterval(restarTiempo, 1000);
}
// Crear un div
const container = document.getElementById("containerId");
let puntos = document.getElementById("puntuacionId");
let numMax = 5;

//crear contenedor maxima pantalla
container.style.height = 384 + "px";
container.style.width = 615 + "px";

//crear div caja en DOM
for (let i = 0; i < numMax; i++) {
  //crear div
  let caja = document.createElement("div");
  // Establecer el estilo para la caja
  caja.style.left = Math.floor(Math.random() * window.innerWidth - 300) + "px";
  caja.style.top = Math.floor(Math.random() * window.innerHeight - 300) + "px";
  //establecer clase de caja
  caja.className = "caja";
  caja.id = "cajaID" + i;
  //funcion de click en la caja, añadiendo puntos
  caja.addEventListener(
    "click",
    function clickCaja() {
      this.style.visibility = "hidden";
      //Suma de los puntos Juego
      sumarPuntos();
      //Puntuación Juego
      document.getElementById("scoreId").innerHTML =
        "Score: <b>" + puntos + "/" + puntosNecesarios + "</b><br/>";
      //restar las cajas que faltan
      restarCajas();
      //cajas sobrantes
      document.getElementById("cajasRestantesId").innerHTML =
        "Faltan: <b>" + numCajas + "</b><br/>";
    },
    true
  );
  var img = document.createElement("img");
  img.className = "imagen-caja";
  img.src = arrayImgCaja[Math.floor(Math.random() * 5)];
  img.draggable = false;
  caja.appendChild(img);
  container.appendChild(caja);
  console.log(caja);
}

//crear array cajas con todas las cajas en el DOM
let cajas = document.getElementsByClassName("caja");
//call function moviment box
for (let i = 0; i < cajas.length; i++) {
  movimientoCaja(cajas[i]);
}

//puntos iniciales juego
puntos = 0;
//puntos necesarios para completar el juego
let puntosNecesarios = 50;
//tiempo del juego
let tiempo = 30;
//puntuación final
let puntuacionFinal = 0;

//restar tiempo (función)
function restarTiempo() {
  //restar tiempo
  tiempo--;
  document.getElementById("tiempoId").innerHTML =
    "Time: <b>" + tiempo + "</b><br/>";
  //condicional de si tiempo llega a 0
  if (puntos >= puntosNecesarios) {
    puntuacionFinal = puntos + (tiempo*2);
    //limpiar el interval para que deje de contar
    clearInterval(contadorTiempoRestante);
    document.getElementById("resultado-partida").innerHTML =
    "Enhorabuena! Te has hecho con la <b>VICTORIA!</b> </br> Has logrado: <b>" + puntuacionFinal + "</b> puntos<br/><br/><br/>";
    //limpiar el interval para que deje de contar
    clearInterval(contadorTiempoRestante);
    abrirModal2();
  }
  if (tiempo == 0 && puntos < puntosNecesarios) {
    //limpiar el interval para que deje de contar
    clearInterval(contadorTiempoRestante);
    document.getElementById("resultado-partida").innerHTML =
        "Lo sentimos, no has logrado completar el nivel... </br> Te han faltado: <b>" + numCajas + "</b> objetos por destruir<br/><br/><br/>";
    abrirModal2();
  }
}

//funcion sumar puntos
function sumarPuntos() {
  if (puntos < puntosNecesarios) {
    puntos += 10;
  }
}

//variable num cajas total actual
let numCajas = numMax;

//funcion restar cajas restantes
function restarCajas() {
  numCajas -= 1;
}