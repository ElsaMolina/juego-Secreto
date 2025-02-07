let numeroSecreto = 0;
let intentos = 0;
let listanNumerosSorteados = []; 
let numeroMaximo = 10 ;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return ;
}

//opción por medio de Element Id 
function verificarIntento(){
    let numeroUsuario = parseInt (document.getElementById("valorUsuario").value);
    console.log (intentos)
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos=== 1) ? "intento" : "intentos"}`);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    } else {
        //El usuario no acertó
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        } else{
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos ++ ;
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
    let valorCaja = document.querySelector ("#valorUsuario")
    valorCaja.value = ""
}

function generarNumeroSecreto(){
   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+ 1;

   console.log(numeroGenerado);
   console.log (listanNumerosSorteados);
    //Si ya sorteamos todos los números 
    if (listanNumerosSorteados.length== numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
    } else {
   // si el número generado está incluido en la lista 
   if (listanNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto ();
   }else {
       listanNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
   }
}
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1; 
    document.querySelector("#reiniciar").setAttribute("disabled","true")
}

function reiniciarJuego(){
    //Lo que hará esta función: 
    // limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de números y generar el número aleatorio
    //Iniciar el número de intentos
    //deshabilitar botón de nuevo juegos 
    condicionesIniciales();
    
}

condicionesIniciales();
