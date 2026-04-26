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
    let replaceOperator = operationDisplay.textContent.replace("÷", "/").replace("x","*");
    let joinTerms = replaceOperator + currentDisplay.textContent;

    // resultDisplay.textContent = Number(operationResult.toFixed(2));

    operationDisplay.textContent = joinTerms.replace("/","÷").replace("*","x");
    resultDisplay.style.display = "block";
    currentDisplay.style.display = "none";
}

// Función para ir operando los valores ingresados
function operatingTerms(){
    // if(operationDisplay.textContent === ""){
    //     console.log("El valor está vacio");
    //     return;
    // }

    let firstValueEntered = currentDisplay.textContent;
    let operatorPressed = buttonNumber;
    let result = "";

    if(operatorPressed.value === "+"){
        if(currentDisplay.textContent === "0"){
            console.log("Presiono 0");
            return;
        } else {
            let sumValues = firstValueEntered + Number(currentDisplay.textContent);
            console.log(sumValues);
        }
    }
    
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

buttonOperator.forEach((operatorValue) => {
    operatorValue.addEventListener("click", function(){
        
        if(operatorValue.value === "="){
            calculateResult();
        }else{
            appendOperator(operatorValue);
            operatingTerms();
        }
    });
});