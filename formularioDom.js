const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResultado = document.querySelector('#result');

/* lo que hizo fue evitar la recarga automática del formulario
 de la pagina que hace por defecto con el sumbit, y se logró 
 con la manipulación del dom escuchar el evento.*/
form.addEventListener('sumbit', sumarInputvalues);

function sumarInputvalues(event) {
        //console.log({event});
        event.preventDefault();
        const sumaInputs = input1.value + input2.value;
        pResultado.innerText= "resultado: " + sumaInputs;
};