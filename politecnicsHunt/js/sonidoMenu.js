const musicaAmbiente = new Audio("./sound/ambientSong.mp3");
const musicaBotones = new Audio("./sound/btn.mp3");

if (typeof musicaAmbiente.loop == "boolean") {
  musicaAmbiente.loop = true;
} else {
  musicaAmbiente.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
}

let encendido = false;
document.getElementById("myBtn").addEventListener("click", function () {
  if (encendido == false) {
    musicaAmbiente.play();
    encendido = true;
    document
      .getElementById("nivel-1")
      .addEventListener("mouseover", function () {
        musicaBotones.play();
      });
    document
      .getElementById("nivel-2")
      .addEventListener("mouseover", function () {
        musicaBotones.play();
      });
    document
      .getElementById("nivel-3")
      .addEventListener("mouseover", function () {
        musicaBotones.play();
      });
    document.getElementById("salir").addEventListener("mouseover", function () {
      musicaBotones.play();
    });
    document
      .getElementById("sonido")
      .addEventListener("mouseover", function () {
        musicaBotones.play();
      });
    document.getElementById("sonido").src = "./img/sound.png";
  } else if (encendido == true) {
    musicaAmbiente.pause();
    encendido = false;
    document.getElementById("sonido").src = "./img/sound-x.png";
  }
});
