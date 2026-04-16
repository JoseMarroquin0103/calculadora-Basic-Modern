// Constantes
const valorIngresado = document.querySelector('.input-num');
const valorIngresadoUno = document.querySelector('.operacion-ingresado');
const resultado = document.querySelector('.result-operacion');
const botonesNumericos = document.querySelectorAll('.btn-num');
const botonesOperadores = document.querySelectorAll('.btn-op');

// Funciones
// Función para mostrar la operación
function pantallaMostrarOperacion(signoOperar){
    valorIngresadoUno.textContent += valorIngresado.textContent;
    valorIngresadoUno.textContent += signoOperar.value;

    valorIngresadoUno.style.display = 'block';
                
    valorIngresado.textContent = "0";
}

// Función para operar y mostrar el resultado
function realizarCalculoMostrar(){
    let reemplazarOperadores = valorIngresadoUno.textContent.replace("÷", "/").replace("x","*");
    let obtenerUltimoValor = valorIngresado.textContent;

    let unirOperaciones = reemplazarOperadores + obtenerUltimoValor;

    let resultadoOperacion = eval(unirOperaciones); // Opera todos los terminos
    
    resultado.textContent = Number(resultadoOperacion.toFixed(2));

    valorIngresadoUno.textContent = unirOperaciones.replace("/","÷").replace("*","x");
    resultado.style.display = "block";
    valorIngresado.style.display = "none";
}

// Mostrar numeros en pantalla calculadora
botonesNumericos.forEach((valorNumero) => {
    valorNumero.addEventListener("click", function(){
        if(valorIngresado.textContent === "0"){
            valorIngresado.textContent = valorNumero.value;
        }else{
            valorIngresado.textContent += valorNumero.value;
        }
    });
});

botonesOperadores.forEach((valorOperador) => {
    valorOperador.addEventListener("click", function(){
        let operador = valorOperador.value;

        switch(operador){
            case "÷":
                pantallaMostrarOperacion(valorOperador);
                break;
            case "x":
                pantallaMostrarOperacion(valorOperador);
                break;
            case "-":
                pantallaMostrarOperacion(valorOperador);
                break;
            case "+":
                pantallaMostrarOperacion(valorOperador);
                break;
            case "=":
                realizarCalculoMostrar();
                break;
        }
    });
});

