function atacar() {
  bandido.vida -= bandido.ataque;

if (bandido.vida < 0) {
  bandido.vida = 0;
}

document.getElementById("healt").textContent = "Vida: " + bandido.vida;

ctx.clearRect(0, 0, canvas.width, canvas.height)
dibujarBandido();
}
