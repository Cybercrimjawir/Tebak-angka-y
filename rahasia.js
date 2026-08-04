let progress = 0;

const bar = document.getElementById("progress");
const persen = document.getElementById("persen");

let loading = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";
    persen.innerHTML = progress + "%";

    if (progress >= 100) {

        clearInterval(loading);

        document.getElementById("loading").style.display = "none";

        startMatrix();

    }

}, 35);

function startMatrix() {

    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.style.display = "block";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01";
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const matrix = setInterval(() => {

        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {

            const text = chars[Math.floor(Math.random() * chars.length)];

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;

        }

    }, 33);

    setTimeout(() => {

        clearInterval(matrix);

        canvas.style.display = "none";

        document.getElementById("system").style.display = "block";

    }, 3500);

                }
