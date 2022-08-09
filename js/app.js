let numeroRandom;
function comenzar(){
    // Selecciona el objeto del boton de comenzar por id
    // agrega el atributo hidden para que se oculte una vez que se hizo click
    let comenzarBtn = document.querySelector("#btnComenzar");
    comenzarBtn.setAttribute("hidden", "true");
    // Selecciona el objeto del article donde se encuentra el formulario para elegir el numero
    // le quita el atributo hidden para que se muestre el formulario que se encuentra en el article
    let formulario = document.querySelector("article");
    formulario.removeAttribute("hidden");
    // genera un numero random entre el 1 y el 10
    numeroRandom = Math.trunc(Math.random()*(10 + 1 - 1) + 1);
    console.log(numeroRandom);
    // llama a la funcion para hacer foco en el input donde pongo el numero
    inputFocus();
}
function adivinar(event){
    // cuando se hace el preventDefault no valida el min y max del formulario
    // Preguntar como hacer que valide en el formulario y despues haga el preventDefault
    // hace preventDefault del input type submit.
    event.preventDefault();
    // Obtiene el valor del numero que se ingreso en el input
    let numeroElegido = document.querySelector("#numero").value;
    // pregunta si el numero no existe o no esta dentro del rango (1-10)
    if(!numeroElegido || numeroElegido < 1 || numeroElegido > 10){
        // alerta que ingrese un numero valido entre 1 y 10 
        alert("Elige un número valido entre 1 y 10");
        // Limpia el valor ingresado en el input
        limpiarInput();
        // Hace foco en el input
        inputFocus();
    } else {
        // pregunta si el numero elegido es igual al numero magico
        if(numeroRandom == numeroElegido){
            // Alerta que adivino el numero
            alert("Felicitaciones adivinaste el número mágico");
            // Refresca la pagina para comenzar nuevamente el juego
            location.reload();
            // pregunta si el numero magico es mayor al elegido
        } else if (numeroRandom > numeroElegido){
            // Alerta que el numero magico es mayor
            alert("El número mágico es mas grande que el número elegido: " + numeroElegido);
            // Limpia el valor del input
            limpiarInput();
            // hace foco en el input
            inputFocus();
        } else {
            // si los numeros no son iguales y el magico no es mayor, entoces es menor
            // alerta que el numero magico es menor
            alert("El número mágico es menor al número elegido: " + numeroElegido);
            //limpia el input
            limpiarInput();
            // hace foco en el input
            inputFocus();
        }
    }
}
// funcion que limpia el valor del input
function limpiarInput(){
    document.querySelector("#numero").value = "";
}
// funcion que hace foco en el input
function inputFocus(){
    document.querySelector("#numero").focus();
}