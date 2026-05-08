function atacar() {
  if (!atacando) {
    atacando = true;
    tiempoAtaque = 10;

    let bandidoCentroX = bandido.x + bandido.tamaño / 2;
    let bandidoCentroY = bandido.y + bandido.tamaño / 2;
    let mirandoDerecha = bandido.direccion === "derecha";

    enemigos.forEach((e, i) => {
      let enemigoCentroX = e.x + e.tamaño / 2;
      let enemigoCentroY = e.y + e.tamaño / 2;
      let dx = bandidoCentroX - enemigoCentroX;
      let dy = bandidoCentroY - enemigoCentroY;
      let distancia = Math.sqrt(dx * dx + dy * dy);
      let estaEnFrente = mirandoDerecha ? enemigoCentroX >= bandidoCentroX : enemigoCentroX <= bandidoCentroX;

      if (distancia < 80 && estaEnFrente) { // rango real circular y frente al personaje
        e.vida -= bandido.ataque;

        if (e.vida <= 0) {
          enemigos.splice(i, 1);
        }
      }
    });
  }
}

console.log("atacando:", atacando);

console.log("enemigos: ", enemigos.length);