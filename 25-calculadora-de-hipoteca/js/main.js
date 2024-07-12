//Inputs
const inputAmount = document.getElementById('input-amount');
const spanAmount = document.getElementById('span-amount');

const inputYears = document.getElementById('input-years');
const spanYears = document.getElementById('span-years');

const inputInterest = document.getElementById('input-interest');
const spanInterest = document.getElementById('span-interest');

const inputOptionRepaiment = document.getElementById('repaiment');
const inputOptionInterest = document.getElementById('interest');

//Mensajes de error
const errorAmount = document.getElementById('error-amount');
const errorYears = document.getElementById('error-years');
const errorPorcentaje = document.getElementById('error-porcentaje');
const errorOptions = document.getElementById('error-option');

//Variables de Area de resultados
const containerResult = document.getElementById('seccion_results');
const imgEmpty = document.getElementById('img-empty');
const totalMensual = document.getElementById('total-mensual');
const total = document.getElementById('total');

//Variables de Botones
const btn = document.getElementById('btn_calcular');
const btnClear = document.getElementById('btn_clear');

btn.addEventListener('click', calculateRepayments);
btnClear.addEventListener('click', clear);

function calculos(){
    const amountP = Number(inputAmount.value);
    const interestR = (Number(inputInterest.value)) / 12 / 100;
    const yearsN = Number(inputYears.value) * 12;

    if(inputOptionRepaiment.checked){
        //Amortizacion constante
        let amortisacionConstante =  amountP * interestR * Math.pow(1 + interestR, yearsN) / (Math.pow(1 + interestR, yearsN) - 1);

        totalMensual.innerHTML = `$ ${amortisacionConstante.toFixed(2)}`;
        return;
    }

    if(inputOptionInterest.checked){
        //Hipoteca con unico interes (Interes simple)
        let interesSimple = amountP * interestR;

        totalMensual.innerHTML = `$ ${interesSimple.toFixed(2)}`;
        return
    }
}

function calculateRepayments(){
    const amount = Number(inputAmount.value);
    const years = Number(inputYears.value);
    const interest = Number(inputInterest.value);

    //Validacion de el input Amount
    if(!amount){
        mensajesDeErrorAmount();
        return
    }

    //Validacion de el input de años
    if(!years){
        mensajesDeErrorYears();
        return
    }

    //Validacion de el input de Interest
    if(!interest){
        mensajesDeErrorInterest();
        return
    }

    //Vlidacion de los input option
    if(!inputOptionRepaiment.checked && !inputOptionInterest.checked){
        mensajesDeErrorOptions();
        return;
    }

    mensajesReset();
    imgEmpty.style.display = 'none'
    containerResult.style.display = 'block';

    calculos();
}

function mensajesDeErrorAmount(){
    //Mensajes de error de el input Amount
    errorAmount.style.display = 'block'
    spanAmount.style.color = "white"
    spanAmount.style.background = "red";
    inputAmount.style.border = "1px solid red";
}

function mensajesDeErrorYears(){
    //Mensajes de error de el input Years
    errorYears.style.display = 'block'
    spanYears.style.color = "white"
    spanYears.style.background = "red";
    inputYears.style.border = "1px solid red";
}

function mensajesDeErrorInterest(){
    //Mnsajes de error para el input Interest
    errorPorcentaje.style.display = 'block'
    spanInterest.style.color = "white"
    spanInterest.style.background = "red";
    inputInterest.style.border = "1px solid red";
}

function mensajesDeErrorOptions(){
    errorOptions.style.display = 'block';
}

function mensajesReset(){
    //Mensajes reset de el input Amount
    errorAmount.style.display = 'none'
    spanAmount.style.color = "hsl(202, 55%, 16%)"
    spanAmount.style.background = "hsl(203, 41%, 72%)";
    inputAmount.style.border = "0px solid hsl(202, 55%, 16%)";
    

    //Mensajes reset de el input Years
    errorYears.style.display = 'none'
    spanYears.style.color = "hsl(202, 55%, 16%)"
    spanYears.style.background = "hsl(203, 41%, 72%)";
    inputYears.style.border = "0px solid hsl(202, 55%, 16%)";

    //Mensajes reset de el input Interest
    errorPorcentaje.style.display = 'none'
    spanInterest.style.color = "hsl(202, 55%, 16%)"
    spanInterest.style.background = "hsl(203, 41%, 72%)";
    inputInterest.style.border = "0px solid hsl(202, 55%, 16%)";

    //Mensaje reset de los input options
    errorOptions.style.display = 'none'

}

function clear(){
    inputAmount.value = "";
    inputYears.value = "";
    inputInterest.value = "";

    totalMensual.innerText = "$ 0.00";
    total.innerText = "$0.00"
}