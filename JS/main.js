let audio = document.getElementById("audio");
let display = document.getElementById("display");
let btnInit = document.getElementById("btnInit");

let controladorT = 0;
let controladorR = 0;

let score = document.getElementById("score");
let contador = 0;

let tempo = document.getElementById("tempo");
let tempoTotal = 30;

let janela = document.getElementById("janela");
let telhado = document.getElementById("telhado");
let sacada = document.getElementById("sacada");
let barril = document.getElementById("barril"); 
let carroca = document.getElementById("carroca");
let esquerda = document.getElementById("esquerda");
let meio = document.getElementById("meio"); 
let direita = document.getElementById("direita");

let janelaMorto = document.getElementById("janelaMorto");
let telhadoMorto = document.getElementById("telhadoMorto");
let sacadaMorto = document.getElementById("sacadaMorto");
let barrilMorto = document.getElementById("barrilMorto"); 
let carrocaMorto = document.getElementById("carrocaMorto");
let esquerdaMorto = document.getElementById("esquerdaMorto");
let meioMorto = document.getElementById("meioMorto"); 
let direitaMorto = document.getElementById("direitaMorto");

let bandits = [janela, telhado, sacada, barril, carroca, esquerda, meio, direita];
let cores = ["vermelho", "azul", "verde"];

function init(){
    janela.style.display = "none";
    telhado.style.display = "none";
    sacada.style.display = "none";
    barril.style.display = "none";
    carroca.style.display = "none";
    meio.style.display = "none";
    direita.style.display = "none";
    esquerda.style.display = "none";

    janelaMorto.style.display = "none";
    telhadoMorto.style.display = "none";
    sacadaMorto.style.display = "none";
    barrilMorto.style.display = "none";
    carrocaMorto.style.display = "none";
    esquerdaMorto.style.display = "none";
    meioMorto.style.display = "none";
    direitaMorto.style.display = "none";

    tempoTotal = 30;
    contador = 0;

    rodizio();
    cronometro();

    btnInit.style.display="none";
}

function aparece(obj){
    obj.style.display = "";
}

function esconde(obj){
    obj.style.display = "none";
    if(contador == 0){
        score.innerText = contador;
    }else{
        score.innerText = --contador;
    }
}

function escondeTiro(obj){
    obj.style.display = "none"; 
}

 function tiro(obj1, obj2){
    escondeTiro(obj2);
    console.log("You got me!");
    obj1.setAttribute("src", "/Resources/Img/Inimigo"+obj2.getAttribute("name")+"Morto.png");
    aparece(obj1);
    setTimeout(function(){escondeTiro(obj1)}, 500);
    score.innerText = ++contador;
    let aux = Math.floor(Math.random() * 5);
    if(aux == 1){
        tempoTotal = tempoTotal + 2;
    }    
    audio.play();
}

let rodizio = function(){
    let bandit = bandits[Math.floor(Math.random() * 8)];
    let cor = cores[Math.floor(Math.random() * 3)]
    bandit.setAttribute("src", "/Resources/Img/Inimigo"+cor+".png");
    bandit.setAttribute("name", cor);
    aparece(bandit);
    setTimeout(function(){if(bandit.style.display != "none"){esconde(bandit)}}, 1000);
    controladorR = setTimeout(rodizio, 1500);
    if(tempoTotal == 0){
        clearTimeout(controladorR);
    }
}
let cronometro = function(){
    controladorT  = setTimeout(function(){
        tempo.innerText = --tempoTotal;
        setTimeout(cronometro, 500 );
    }, 500);
    if(tempoTotal == 0){
        clearTimeout(controladorT);
        btnInit.style.display="";
    }
}