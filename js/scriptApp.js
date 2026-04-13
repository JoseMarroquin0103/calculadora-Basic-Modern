// Constantes
const valorIngresado = document.querySelector('.input-num');
const valorIngresadoUno = document.querySelector('.valor-ingresado-1');
const valorIngresadoDos = document.querySelector('.valor-ingresado-2');
const valorOperadorPantalla = document.querySelector('.mostrar-operador');
const resultado = document.querySelector('.result-operacion');
const botonesNumericos = document.querySelectorAll('.btn-num');
const botonesOperadores = document.querySelectorAll('.btn-op');


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
            case "+":
                valorIngresadoUno.textContent = valorIngresado.textContent;
                valorOperadorPantalla.textContent = valorOperador.value;

                valorIngresadoUno.style.display = 'block';
                valorOperadorPantalla.style.display = 'block';

                if(valorIngresadoUno.textContent === valorIngresado.textContent){
                    valorIngresado.textContent = "0";
                }else{
                    valorIngresadoDos.textContent += valorIngresado.textContent;
                }
                break;
            case "=":
                valorIngresadoDos.textContent = valorIngresado.textContent;

                valorIngresadoDos.style.display = 'block';

                if(valorIngresado.textContent === valorIngresadoDos.textContent){
                    valorIngresado.textContent = "0";
                }
                break;
        }
    });
});

