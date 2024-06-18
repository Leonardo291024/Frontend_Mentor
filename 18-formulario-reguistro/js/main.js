//Inputs
const inputNombre = document.getElementById('input-name');
const inputLastName = document.getElementById('input-last-name');
const inputEmail = document.getElementById('input-email');
const inputPasword = document.getElementById('input-pasword');

//Mensajes de error
const errorName = document.getElementById('error-name');
const errorLastName = document.getElementById('error-lastName');
const errorEmail = document.getElementById('error-email');
const errorPasword = document.getElementById('error-pasword');

//Icono de error
const iconoName = document.getElementById('icono-name');
const iconoLastName = document.getElementById('icono-lastName');
const iconoEmail = document.getElementById('icono-email');
const iconoPasword = document.getElementById('icono-pasword');

const btn = document.getElementById('btn');

btn.addEventListener('click', enviarDatos);


function enviarDatos(){
    const nombre = inputNombre.value;
    const apellido = inputLastName.value;
    const correo = inputEmail.value;
    const contrasena = inputPasword.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nombre){
        errorName.style.display = 'block';
        iconoName.style.display = 'block';
        return
    }else{
        errorName.style.display = 'none';
        iconoName.style.display = 'none';
    }

    if(!apellido){
        errorLastName.style.display = 'block';
        iconoLastName.style.display = 'block';
        return
    }else{
        errorLastName.style.display = 'none';
        iconoLastName.style.display = 'none';
    }

    if(!emailRegex.test(correo)){
        errorEmail.style.display = 'block';
        iconoEmail.style.display = 'block';
        return
    }else{
        errorEmail.style.display = 'none';
        iconoEmail.style.display = 'none';
    }

    if(!contrasena){
        errorPasword.style.display = 'block';
        iconoPasword.style.display = 'block';
        return
    }else{
        errorPasword.style.display = 'none';
        iconoPasword.style.display = 'none';
    }

    alert("Te haz reguistrado correctamente");

}