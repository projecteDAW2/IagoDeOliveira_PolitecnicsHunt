//namespace - espacio de nombres
//main loop - bucle principal
//aps - actualizaciones por segundo
//fps - frames por segundo
//callback
//1s = 1000ms

var buclePrincipal = {
	idEjecucion: null,
	ultimoRegistro: 0,
	fps: 0,
	iterar: function(registroTemporal) {
		buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
		buclePrincipal.dibujar();	

		if(registroTemporal - buclePrincipal.ultimoRegistro > 999) {
			buclePrincipal.ultimoRegistro = registroTemporal;
			document.getElementById("fpsId").innerHTML = "FPS: " + buclePrincipal.fps;
			console.log("FPS: " + buclePrincipal.fps);
			buclePrincipal.fps = 0;
		}
	},
	detener: function() {

	},
	dibujar: function(registroTemporal) {
		buclePrincipal.fps++;
	}
};
