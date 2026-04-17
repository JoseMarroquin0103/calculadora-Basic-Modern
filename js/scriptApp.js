// Constantes
const currentDisplay = document.querySelector('.input-num');
const operationDisplay = document.querySelector('.operacion-ingresado');
const resultDisplay = document.querySelector('.result-operacion');
const buttonNumber = document.querySelectorAll('.btn-num');
const buttonOperator = document.querySelectorAll('.btn-op');

// Funciones
// Función para mostrar la operación
function appendOperator(signoOperar){
    operationDisplay.textContent += currentDisplay.textContent;
    operationDisplay.textContent += signoOperar.value;

    operationDisplay.style.display = 'block';
                
    currentDisplay.textContent = "0";
}

// Función para operar y mostrar el resultado
function calculateResult(){
    let reemplazarOperadores = operationDisplay.textContent.replace("÷", "/").replace("x","*");
    let obtenerUltimoValor = currentDisplay.textContent;

    let unirOperaciones = reemplazarOperadores + obtenerUltimoValor;

    let resultadoOperacion = eval(unirOperaciones); // Opera todos los terminos
    
    resultDisplay.textContent = Number(resultadoOperacion.toFixed(2));

    operationDisplay.textContent = unirOperaciones.replace("/","÷").replace("*","x");
    resultDisplay.style.display = "block";
    currentDisplay.style.display = "none";
}

// Mostrar numeros en pantalla calculadora
buttonNumber.forEach((valorNumero) => {
    valorNumero.addEventListener("click", function(){
        if(currentDisplay.textContent === "0"){
            currentDisplay.textContent = valorNumero.value;
        }else{
            currentDisplay.textContent += valorNumero.value;
        }
    });
});

buttonOperator.forEach((valorOperador) => {
    valorOperador.addEventListener("click", function(){
        let operador = valorOperador.value;

        switch(operador){
            case "÷":
                appendOperator(valorOperador);
                break;
            case "x":
                appendOperator(valorOperador);
                break;
            case "-":
                appendOperator(valorOperador);
                break;
            case "+":
                appendOperator(valorOperador);
                break;
            case "=":
                calculateResult();
                break;
        }
    });
});

