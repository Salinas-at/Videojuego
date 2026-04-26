let enemigos = [
  {x: 250, y: 120, vida: 50, tamaño: 60},
  {x: 100, y: 200, vida: 50, tamaño: 60}
];

let imgEnemigo = new Image();
imgEnemigo.src = "enemigo.png";

function dibujarEnemigos() {
  enemigos.forEach(e => {
    ctx.drawImage(imgEnemigo, e.x, e.y, e.tamaño, e.tamaño);
    
    ctx.fillStyle = "red";
    ctx.fillRect(e.x, e.y - 10, e.vida, 5);
  })
}

function atacar() {
  enemigos.forEach((e, index) => {
    
    
    let dx = bandido.x - e.x;
    let dy = bandido.y - e.y;
    let distancia = Math.sqrt(dx * dx + dy * dy);
    
    if (distancia < 80) {
      e.vida -= bandido.ataque
      
      if (e.vida <= 0) {
        enemigos.splice(index, 1);
      }
    }
  });
}
