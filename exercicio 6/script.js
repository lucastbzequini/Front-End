const cria = document.getElementById("mainImage");
const btn = document.getElementById("btnImage");
const fundoDia = "sabri_bg.png";
const fundoNoite = "sabri_night.png";
const musica = new Audio('sabri_manchild.mp3');

const estados = {
    normal:  "sabri_neutral.png",
    puto: "sabri_cry.png",
    morto: "sabri_dead.png",
    comendo: "sabri_eat.png",
    alimentado: "sabri_full.png",
    dormir: "sabri_sleep.png",
    ferlini: "ferlini.jpg"
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;
let dead = 0;
let horas = 0;
let dia = 0;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 30){
                cria.src = estados.puto;
            }

            if(contador == 60){
                cria.src = estados.morto;
                dead++;
            }
        }, 1000);
}

function alimentar() {
    if (dead > 0) {
        console.log("Tarde demais... ela se foi.");
        return;
    }
    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

function atualizarFundo() {
    if (horas) clearInterval(horas);

    horas = setInterval(() => {
    horas++;
    
    if (horas >= 12) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
        dia = 1;
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
        dia = 0;
    }
    if(horas >=24) horas =0;

    }, 1000);
}


function trocarfundo(){
   if(dia == 0)
   {
    document.body.style.backgroundImage = `url('${fundoNoite}')`;

    contador = 0;

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        if (dead == 0) {
            cria.src = estados.dormir;
    }
        

        time_out = setTimeout(() => {
            if (dead == 0) {
            cria.src = estados.normal;
    }
            
        }, 2000);

    }, 1000);
dia = 1;
horas = 12;
    } 
    else{
        document.body.style.backgroundImage = `url('${fundoDia}')`;
        
dia = 0;
horas=0;
    }
}

function cantar(){
    cria.src = estados.ferlini;
if (musica.paused){
    musica.play().catch(error =>{
        console.log("navegador bloqueou");
    });
    musica.pause();
    musica.currentTime = 0;
}




}

function ferlini() {
    cria.src = estados.ferlini;
    contador = 0;

    console.log("GOSTOSINHO");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.ferlini;

        time_out = setTimeout(() => {
            if (dead == 0) {
            cria.src = estados.normal;
            }
        else
        {
        cria.src = estados.morto;
        }

    }, 2000);

    }, 1000);
}

controlador();
atualizarFundo();
