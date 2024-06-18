const input = document.getElementById('input-email');
const btnInput = document.getElementById('btn_input');
const mensajeError = document.getElementById('error_mesaje');

btnInput.addEventListener('click', enviarMensaje);

function enviarMensaje(){
    const contentInput = input.value;

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(contentInput)) {
        mensajeError.style.display = 'block';
        return;
    }

    mensajeError.style.display = 'none';
    alert("El mensaje se envio con exito")
}