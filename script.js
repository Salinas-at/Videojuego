function atacar() {
  if (!atacando) {
    atacando = true;
    tiempoAtaque = 10;

    enemigos.forEach((e, i) => {
      let dx = bandido.x - e.x;
      let dy = bandido.y - e.y;
      let distancia = Math.sqrt(dx * dx + dy * dy);

      if (distancia < 80) { // rango real circular
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