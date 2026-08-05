let kesempatan = 5;
let angkaRahasia = Math.floor(Math.random() * 100) + 1;

function tebak() {
    let jawaban = Number(document.getElementById("jawaban").value);
    let hasil = document.getElementById("hasil");

    if (jawaban === 67 ) {
    window.location.href = "rahasia.html";
    return;
}

    if (jawaban === angkaRahasia) {
        hasil.innerHTML = "👑 Good job! Tebakan benar!";
        return;
    }

    kesempatan--;

    if (jawaban < angkaRahasia) {
        hasil.innerHTML = "📉 kekecilan!";
    } else {
        hasil.innerHTML = "📈 kelebihan!";
    }

    document.getElementById("kesempatan").innerHTML =
        "❤️ Kesempatan: " + kesempatan;

    if (kesempatan === 0) {
        hasil.innerHTML = "💀 Game Over! Angka: " + angkaRahasia;
    }
}
g
