let kesempatan = 5;
let angkaRahasia = Math.floor(Math.random() * 100) + 1;

function tebak() {
    let jawaban = Number(document.getElementById("jawaban").value);
    let hasil = document.getElementById("hasil");

    if (jawaban === 01010111 01100101 01100010 00100000 01101001 01101110 01101001 00100000 01100010 01110101 01100001 01110100 01100001 01101110 00100000 01110111 01101001 01110010 01100001) {
    window.location.href = "rahasia.html";
    return;
}

    if (jawaban === angkaRahasia) {
        hasil.innerHTML = "👑 Good job! Tebakan benar!";
        return;
    }

    kesempatan--;

    if (jawaban < angkaRahasia) {
        hasil.innerHTML = "📉 kekecilan dongo!";
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
