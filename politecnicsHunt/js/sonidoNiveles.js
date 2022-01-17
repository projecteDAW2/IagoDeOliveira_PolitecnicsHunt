const musicaAmbiente = new Audio("./sound/big_boss_2_0.wav");
const musicaBotones = new Audio("./sound/btn.mp3");

if (typeof musicaAmbiente.loop == 'boolean')
{
  musicaAmbiente.loop = true;
}
else
{
  musicaAmbiente.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}


let encendido = false;
document.getElementById("myBtn").addEventListener("click", function() {
  if (encendido == false) {
    musicaAmbiente.play();
    encendido = true;
    if (document.getElementById("next") != null) {
      document.getElementById("next").addEventListener("mouseover", function() {
        musicaBotones.play();
      });
    }
    document.getElementById("repetir-nivel").addEventListener("mouseover", function() {
      musicaBotones.play();
    });
    document.getElementById("volver-menu").addEventListener("mouseover", function() {
      musicaBotones.play();
    });
    document.getElementById("ranking-boton").addEventListener("mouseover", function() {
      musicaBotones.play();
    });
} else if (encendido == true){
  musicaAmbiente.pause();
  encendido = false;
}
});