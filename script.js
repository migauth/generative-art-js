/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Root {
  constructor (x, y){
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 1 - 2;
    this.speedY = Math.random() * 1 - 2;
    this.maxSize = Math.random() * 20 + 50;
    this.size = Math.random() * 1 + 2;
  }
  update(){
      this.x += this.speedX;
      this.y += this.speedY;
      this.size += 0.1;
      if (this.size < this.maxSize) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(40,100%,50%)';
        ctx.fill();
        ctx.stroke();
        requestAnimationFrame(this.update.bind(this));
      }
  }
}

window.addEventListener('mousemove', function(e){
  const root = new Root(e.x, e.y);
  root.update();
})
