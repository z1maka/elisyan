export default () => {
  const canvas = document.getElementById('partly_canvas'),
    ctx = canvas.getContext('2d');
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  const particles = [];
  const properties = {
    bgColor: 'transparent',
    particleColor: 'rgba(22, 181, 224, 1)',
    particleRds: 2,
    count: 60,
    particleMaxSpeed: 2,
    lineLength: 250
  };

  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  function reDrawBackground() {
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, w, h);
  }

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.speedX =
        Math.random() * (properties.particleMaxSpeed * 2) -
        properties.particleMaxSpeed;
      this.speedY =
        Math.random() * (properties.particleMaxSpeed * 2) -
        properties.particleMaxSpeed;
    }

    position() {
      if (
        (this.x + this.speedX > w && this.speedX > 0) ||
        (this.x + this.speedX < 0 && this.speedX < 0)
      ) {
        this.speedX *= -1;
      }
      if (
        (this.y + this.speedY > h && this.speedY > 0) ||
        (this.y + this.speedY < 0 && this.speedY < 0)
      ) {
        this.speedY *= -1;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }

    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRds, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = properties.particleColor;
      ctx.fill();
    }
  }
  function drawLines() {
    let x1, y1, x2, y2, length, opacity;
    for (const i in particles) {
      for (const j in particles) {
        x1 = particles[i].x;
        y1 = particles[i].y;
        x2 = particles[j].x;
        y2 = particles[j].y;
        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if (length < properties.lineLength) {
          opacity = 1 - length / properties.lineLength;
          ctx.lineWidth = '0.5';
          ctx.strokeStyle = `rgba(22, 181, 224, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }

  function reDrawParticles() {
    for (const i in particles) {
      particles[i].position();
      particles[i].reDraw();
    }
  }

  function loop() {
    reDrawBackground();
    reDrawParticles();
    drawLines();
    requestAnimationFrame(loop);
  }

  function init() {
    for (let i = 0; i <= properties.count; i++) {
      particles.push(new Particle());
    }
    loop();
  }

  init();
};
