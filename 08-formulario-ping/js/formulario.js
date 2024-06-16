const inputEmail  = document.getElementById('myInput');
const mensajeError = document.getElementById('error');
const btn = document.getElementById('btn');

btn.addEventListener('click', enviarEmail);

function enviarEmail(){
    const email  = inputEmail.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)){
        inputEmail.classList.add('input-error');
        mensajeError.style.display = 'block';
        return
    }

    inputEmail.classList.remove('input-error');
    mensajeError.style.display = 'none';
    alert("Reguistro exitoso!!!")
}