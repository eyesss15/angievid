
let sunHeight = 600; 
let gotas = [];


let redVal = 0;
let greenVal = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(redVal, greenVal, 0);

  // Sol
  fill(255, 135, 5, 60);
  circle(windowWidth / 2, sunHeight, windowWidth / 6.5); // Sol más grande según el ancho de la ventana
  fill(255, 100, 0, 100);
  circle(windowWidth / 2, sunHeight, windowWidth / 6);

  // Montañas
  fill(110, 50, 18);
  triangle(windowWidth / 3, windowHeight, windowWidth / 1.15, windowHeight / 1.58, windowWidth * 1.2, windowHeight);
  fill(110, 95, 20);
  triangle(windowWidth / 3, windowHeight, windowWidth / 1.15, windowHeight / 1.58, windowWidth / 1.7, windowHeight);

  fill(150, 75, 0);
  triangle(-windowWidth / 6, windowHeight, windowWidth / 4, windowHeight / 2, windowWidth / 1.5, windowHeight);
  fill(100, 50, 12);
  triangle(-windowWidth / 6, windowHeight, windowWidth / 4, windowHeight / 2, 0, windowHeight);

  fill(150, 100, 0);
  triangle(windowWidth / 3, windowHeight, windowWidth / 1.33, windowHeight / 1.6, windowWidth * 1.2, windowHeight);
  fill(120, 80, 50);
  triangle(windowWidth / 3, windowHeight, windowWidth / 1.33, windowHeight / 1.6, windowWidth / 2.5, windowHeight);

  // Reducir la altura del sol hasta que llegue a 130
  if (sunHeight > 130) {
    sunHeight -= 2;
  }

  // Aumentar las variables de color durante el amanecer
  if (sunHeight < 480) {
    redVal += 4;
    greenVal += 1;
  }

  for (let i = gotas.length - 1; i >= 0; i--) {
    gotas[i].mover();
    gotas[i].mostrar();

    // Eliminar la gota si se sale del canvas
    if (gotas[i].y > height) {
        gotas.splice(i, 1);  // Eliminar la gota del arreglo
    }
}
}

function mousePressed() {
    for (let i = 0; i < 10; i++) {
        gotas.push(new Gota(random(width), random(-100, 0)));  
    }
}

// Ajustar el tamaño del canvas cuando se cambia el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Gota {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocidad = random(4, 10);  
        this.longitud = random(10, 20);  
    }

    mover() {
        this.y += this.velocidad;  
    }

    mostrar() {
        stroke(0, 0, 255);
        line(this.x, this.y, this.x, this.y + this.longitud);  
    }
}
