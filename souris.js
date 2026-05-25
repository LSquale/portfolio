// Crée le curseur principal
let cursor = document.getElementById('custom-cursor');
if (!cursor) {
  cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);
}

// Crée plusieurs traînées
const trails = [];
const trailCount = 5;
for (let i = 0; i < trailCount; i++) {
  const t = document.createElement('div');
  t.className = 'cursor-trail';
  t.style.opacity = (0.2 - i*0.03).toString();
  document.body.appendChild(t);
  trails.push(t);
}

// Positions
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
const trailPos = Array(trailCount).fill({x:0, y:0});

// Écoute mouvement souris
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animation
function animateCursor() {
  // Curseur principal
  posX += (mouseX - posX) * 0.3;
  posY += (mouseY - posY) * 0.3;
  cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;

  // Traînées
  let prevX = posX;
  let prevY = posY;
  trails.forEach((t, i) => {
    trailPos[i] = {
      x: trailPos[i].x + (prevX - trailPos[i].x) * 0.2,
      y: trailPos[i].y + (prevY - trailPos[i].y) * 0.2
    };
    t.style.transform = `translate(${trailPos[i].x}px, ${trailPos[i].y}px) translate(-50%, -50%)`;
    prevX = trailPos[i].x;
    prevY = trailPos[i].y;
  });

  requestAnimationFrame(animateCursor);
}

// Agrandissement au survol des liens et boutons
document.querySelectorAll('a, .button, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '25px';
    cursor.style.height = '25px';
    trails.forEach(t => {
      t.style.width = '35px';
      t.style.height = '35px';
      t.style.opacity = 0.5;
    });
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '15px';
    cursor.style.height = '15px';
    trails.forEach((t,i) => {
      t.style.width = '20px';
      t.style.height = '20px';
      t.style.opacity = (0.2 - i*0.03).toString();
    });
  });
});

animateCursor();