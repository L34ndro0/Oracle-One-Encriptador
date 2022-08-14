function borrarElementos() {
    document.getElementById("boton-copiar").style.display="flex";
    document.getElementById("cuadro-5").style.display="none";
    document.getElementById("munieco").style.display="none";    
}
function encriptar(){
    
    borrarElementos();
   
    cambio=document.querySelector(".procesar").value;
    cambio=cambio.replaceAll("e","enter");
    cambio=cambio.replaceAll("i","imes");
    cambio=cambio.replaceAll("a","ai");
    cambio=cambio.replaceAll("o","ober");
    cambio=cambio.replaceAll("u","ufat");

    document.querySelector(".resultado").value=cambio;   
}
function desencriptar(){
    
    borrarElementos();
    
    cambio=document.querySelector(".procesar").value;
    cambio=cambio.replaceAll("enter","e");
    cambio=cambio.replaceAll("imes","i");
    cambio=cambio.replaceAll("ai","a");
    cambio=cambio.replaceAll("ober","o");
    cambio=cambio.replaceAll("ufat","u");

    document.querySelector(".resultado").value=cambio;
}
function copiar() {
    navigator.clipboard.writeText(resultado.value);
}

var cambio;

document.getElementById("boton-encriptar").addEventListener("click",encriptar);
document.getElementById("boton-desencriptar").addEventListener("click",desencriptar);
document.getElementById("boton-copiar").addEventListener("click",copiar);













