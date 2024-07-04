function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    //i = es para que tome letras mayusculas y minusculas
    //g = tome en cuenta toda la linea o la oracion
    //m = tome en cuenta multiples lineas

    var textoEncriptado = frase.replace(/e/img,"enter");
    textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit"; 
}

function desencriptar(){
    var frase = document.getElementById("textoDesencriptado").value.toLowerCase();

    //i = es para que tome letras mayusculas y minusculas
    //g = tome en cuenta toda la linea o la oracion
    //m = tome en cuenta multiples lineas

    var textoEncriptado = frase.replace(/enter/img,"e");
    textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
