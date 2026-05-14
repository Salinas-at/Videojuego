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
let img = new Image();
let imgAtaque = new Image();

let cargasCompletas = 0;
function cargarImagen() {
  cargasCompletas++;
  if (cargasCompletas === 3) {
    gameLoop();
  }
}

fondo.onload = cargarImagen;
img.onload = cargarImagen;
imgAtaque.onload = cargarImagen;

fondo.src = "trees.png";
img.src = "bandido.png";
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
  actualizarHUD();
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

function actualizarHUD() {
  const vidaElemento = document.getElementById("healt");
  if (vidaElemento) {
    vidaElemento.textContent = `Vida: ${Math.max(0, Math.round(bandido.vida))}`;
  }
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

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "w" || key === "arrowup") {
    arriba();
    event.preventDefault();
  }
  if (key === "s" || key === "arrowdown") {
    abajo();
    event.preventDefault();
  }
  if (key === "a" || key === "arrowleft") {
    izquierda();
    event.preventDefault();
  }
  if (key === "d" || key === "arrowright") {
    derecha();
    event.preventDefault();
  }
});
