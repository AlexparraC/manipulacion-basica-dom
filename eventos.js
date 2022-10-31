const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResultado = document.querySelector('#result');


function btnOnclick() {
    //respuesta profe (solo se concatenan no se operan por si solos)
    //const sumaInputs = input1.value + input2.value;
    //pResultado.innerText= "resultado: " + sumaInputs;

    //ejemplos compañeros.
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "resultado: " + sumaInputs;

    //const num1 = parseInt(input1.value);
    //const num2 = parseInt(input2.value);
    //const resultado = num1 + num2;
    //result.innerText = "resultado: " + resultado;
};



