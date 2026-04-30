// Constantes
const currentDisplay = document.querySelector('.input-num');
const operationDisplay = document.querySelector('.operacion-ingresado');
const resultDisplay = document.querySelector('.result-operacion');
const buttonNumber = document.querySelectorAll('.btn-num');
const buttonOperator = document.querySelectorAll('.btn-op');
const allClear = document.querySelector('.all-clear');
const decimalPoint = document.querySelector('.btn-deci');

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
    let replaceOperator = operationDisplay.textContent.replace("÷", "/").replace("x","*");
    let joinTerms = replaceOperator + currentDisplay.textContent;

    if(!joinTerms) return;

    // Convertimos los números de String a un Array
    let parts = joinTerms.split(/([+\-*/])/).map(p => {
        return (isNaN(p) || p.trim() === "") ? p : Number(p);
    });

    // Realizar múltiplicación y divisón
    for(let i = 0; i < parts.length; i++){
        if(parts[i] === "*" || parts[i] === "/"){
            let res = parts[i] === "*"
                ? parts[i - 1] * parts[i + 1]
                : parts[i - 1] / parts[i + 1];
            
            parts.splice(i - 1, 3, res);
            i--;
        }
    }

    // Realizar suma y resta
    let result = parts[0];
    for(let i = 1; i < parts.length; i += 2){
        let op = parts[i];
        let num = parts[i+1];
        if(op === "+") result += num;
        if(op === "-") result -= num;
    }

    // Mostrar resultado
    resultDisplay.textContent = Number(result.toFixed(2));

    operationDisplay.textContent = joinTerms.replace("/","÷").replace("*","x");
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

// Agregar el punto decimal
decimalPoint.addEventListener("click", () => {
    let addDecimalPoint = currentDisplay.textContent.split(/([.])/).map(pd => {
        return(isNaN(pd)) ? p : Number(pd);
    });

    for(let i = 0; i < addDecimalPoint.length; i++) {
        if(addDecimalPoint[i] === "."){
            return;
        } else {
            currentDisplay.textContent += decimalPoint.value;
        }
    }
});

buttonOperator.forEach((operatorValue) => {
    operatorValue.addEventListener("click", function(){
        
        if(operatorValue.value === "="){
            calculateResult();
        }else{
            appendOperator(operatorValue);
        }
    });
});

// Limpiar datos de la calculadora
allClear.addEventListener("click", function(){
    // Restablecer historial de termino ingresado
    operationDisplay.textContent = "";
    operationDisplay.style.display = "none";

    // Restablecer entrada de valores
    currentDisplay.textContent = "0";
    currentDisplay.style.display = "block";

    // Restablecer donde muestra el resultado
    resultDisplay.textContent = "0";
    resultDisplay.style.display = "none";
});