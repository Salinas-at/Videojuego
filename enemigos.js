let enemigos = [
  {x: 300, y: 120, vida: 50, tamaño: 100, velocidad: 0.5},
  {x: 100, y: 200, vida: 50, tamaño: 100, velocidad: 0.5}
];

let imgEnemigo = new Image();
imgEnemigo.src = "enemigo.png";

function moverEnemigos() {
  
  enemigos.forEach(e => {
    if (bandido.x > e.x) e.x += e.velocidad;
    if (bandido.x < e.x) e.x -= e.velocidad;
    
    if (bandido.y > e.y) e.y += e.velocidad;
    if (bandido.y < e.y) e.y -= e.velocidad;
  });
}

function atacarBandido() {
  enemigos.forEach(e => {
    
    let dx = bandido.x - e.x;
    let dy = bandido.y - e.y;
    let distancia = Math.sqrt(dx * dx + dy * dy);
    
    if (distancia < 50) {
      bandido.vida = Math.max(0, bandido.vida - 0.05);
    }
  });
}

function dibujarEnemigos() {
  enemigos.forEach(e => {
    
    ctx.drawImage(imgEnemigo, e.x, e.y, e.tamaño, e.tamaño);
    
    ctx.fillStyle = "red";
    ctx.fillRect(e.x, e.y - 10, e.vida, 5);

  }
  );
}
