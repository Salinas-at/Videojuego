let canvas = document.getElementById("juego");
let ctx = canvas.getContext("2d");

let bandido = {
  x: 150,
  y: 120,
  tamaño: 50,
  vida: 100,
  ataque: 10
}

let fondo = new Image();
fondo.src = "trees.png";

let img = new Image();
img.src = "bandido.png";

function dibujarBandido() {
  ctx.drawImage(img, bandido.x, bandido.y, 100, 100);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

  dibujarBandido();
  dibujarEnemigos();
  
  requestAnimationFrame(gameLoop);
}

let d = 20;
let s = 20;
let w = 20;
let a = 20;

function derecha() {
 bandido.x += 10;
  dibujarBandido();
}
function abajo() {
  bandido.y += 10;
  dibujarBandido();
}
function izquierda() {
  bandido.x -= 10;
  dibujarBandido();
}
function arriba() {
  bandido.y -= 10;
  dibujarBandido();
}

fondo.onload = function () {

  img.onload = function () {
    gameLoop();
  };
  };