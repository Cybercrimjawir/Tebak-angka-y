let progress = 0;

const bar = document.getElementById("progress");
const persen = document.getElementById("persen");

let loading = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";
    persen.innerHTML = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        document.getElementById("loading").style.display="none";

        startMatrix();

    }

},40);

function startMatrix(){

    const canvas=document.getElementById("matrix");

    canvas.style.display="block";

    const ctx=canvas.getContext("2d");

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    const huruf="010101010101101001010101001101010101";

    const ukuran=18;

    const kolom=canvas.width/ukuran;

    const jatuh=[];

    for(let i=0;i<kolom;i++) jatuh[i]=1;

    function hujan(){

        ctx.fillStyle="rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle="#00ff00";
        ctx.font=ukuran+"px monospace";

        for(let i=0;i<jatuh.length;i++){

            let text=huruf[Math.floor(Math.random()*huruf.length)];

            ctx.fillText(text,i*ukuran,jatuh[i]*ukuran);

            if(jatuh[i]*ukuran>canvas.height && Math.random()>0.975){

                jatuh[i]=0;

            }

            jatuh[i]++;

        }

    }

    let matrix=setInterval(hujan,35);

    setTimeout(()=>{

        clearInterval(matrix);

        canvas.style.display="none";

        document.getElementById("system").style.display="block";

    },3000);

}
