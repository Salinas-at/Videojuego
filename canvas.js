let atacando = false;
let tiempoAtaque = 0;

let canvas = document.getElementById("juego");
let ctx = canvas.getContext("2d");

let bandido = {
  x: 150,
  y: 120,
  tamaño: 100,
  vida: 100,
  ataque: 10,
  direccion: "derecha"
}

let fondo = new Image();
fondo.src = "trees.png";

let img = new Image();
img.src = "bandido.png";

let imgAtaque = new Image();
imgAtaque.src = "bandidoAtaque.png";

 
function dibujarBandido() {
  let imagenActual = atacando ? imgAtaque : img;

  if (bandido.direccion === "derecha") {
    ctx.drawImage(imagenActual, bandido.x, bandido.y, 100, 100);
  } else {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(
      imagenActual,
      -bandido.x- 100,
      bandido.y,
      100,
      100
    );
    ctx.restore();
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

  // ✅ SOLO UNA VEZ
  if (atacando) {
    tiempoAtaque--;
    if (tiempoAtaque <= 0) {
      atacando = false;
    }
  }

  moverEnemigos();
  atacarBandido();
  dibujarBandido();
  dibujarEnemigos();
  //dibujarAtaque();

  requestAnimationFrame(gameLoop);
}

let d = 20;
let s = 20;
let w = 20;
let a = 20;

function mantenerBandidoDentro() {
  bandido.x = Math.max(0, Math.min(bandido.x, canvas.width - bandido.tamaño));
  bandido.y = Math.max(0, Math.min(bandido.y, canvas.height - bandido.tamaño));
}

function derecha() {
  bandido.x += 10;
  bandido.direccion = "derecha";
  mantenerBandidoDentro();
}
function abajo() {
  bandido.y += 10;
  mantenerBandidoDentro();
}
function izquierda() {
  bandido.x -= 10;
  bandido.direccion = "izquierda";
  mantenerBandidoDentro();
}
function arriba() {
  bandido.y -= 10;
  mantenerBandidoDentro();
}

fondo.onload = function () {

  img.onload = function () {
    gameLoop();
  };
  };
  
  imgAtaque.onload = () => console.log("cargó ataque");