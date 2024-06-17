// matrix.js
const matrixBackground = document.getElementById('matrix-background');
const canvasMatrix = document.createElement('canvas');
canvasMatrix.width = window.innerWidth;
canvasMatrix.height = window.innerHeight;
matrixBackground.appendChild(canvasMatrix);
const ctx = canvasMatrix.getContext('2d');

const fontSize = 16;
const columns = Math.floor(canvasMatrix.width / fontSize);
const drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvasMatrix.width, canvasMatrix.height);

    ctx.fillStyle = 'orange';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const rune = String.fromCharCode(0x16A0 + Math.random() * 96);
        ctx.fillText(rune, i * fontSize, y * fontSize);

        if (y * fontSize > canvasMatrix.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    });
}

setInterval(drawMatrix, 33);
