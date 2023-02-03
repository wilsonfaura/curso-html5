var miaudio, reproducir, barra, progreso, maximo;
maximo=300;

function comenzar(){
    miaudio=document.getElementById("miaudio");
    reproducir=document.getElementById("play");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    play.addEventListener("click",clicando,false);
    barra.addEventListener("click",adelantando,false);
}

function clicando(){
    if((miaudio.paused==false) && (miaudio.ended==false)){
        miaudio.pause();
        reproducir.innerHTML="Play";
    }else{
        miaudio.play();
        reproducir.innerHTML="Pause";

        bucle=setInterval(estado, 100);
    }
}

function estado(){
    if(miaudio.ended==false){
        var total=parseInt(miaudio.currentTime*maximo/miaudio.duration);
        progreso.style.width=total+"px";
    }
}

function adelantando(posicion){
    if((miaudio.paused==false) && (miaudio.ended==false)){
        var ratonX=posicion.pageX-barra.offsetLeft;
        var nuevoTiempo=ratonX*miaudio.duration/maximo;
        miaudio.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+"px";
    }
}



window.addEventListener("load",comenzar,false);