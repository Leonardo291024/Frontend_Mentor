document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event){
        let isValid = true;

       const popup = document.getElementById('popup');

        //Inputs
        const name = document.getElementById('input-name');
        const lastName = document.getElementById('input-last-name');
        const email = document.getElementById('input-email');
        const enquiryRadio = document.getElementById('enquiry');
        const requestRadio = document.getElementById('request');
        const textArea = document.getElementById('mensaje-area');
        const acepted = document.getElementById('check-acepted');

        //Mensajes de Error
        const errorName = document.getElementById('name-error');
        const errorLastName = document.getElementById('last-name-error');
        const errorEmail = document.getElementById('email-error');
        const typeError = document.getElementById('type-error');
        const textAreaError = document.getElementById('text-area-error');
        const aceptedError = document.getElementById('acepted-error');


        //Validacion de el Nombre
        if(name.value.trim() === ""){
            event.preventDefault();
            name.classList.add('input-error');
            errorName.style.display = 'block';
            isValid = false;
            return;
        }else{
            name.classList.remove('input-error');
            errorName.style.display = 'none';
            isValid;
        }

        //Validacion last name
        if(lastName.value.trim() === ""){
            event.preventDefault();
            lastName.classList.add('input-error');
            errorLastName.style.display = 'block'
            isValid = false;
            return
        }else{
            lastName.classList.remove('input-error');
            errorLastName.style.display = 'none'
            isValid;
        }

        //Validacion de  email
        if(email.value.trim() === ""){
            event.preventDefault();
            email.classList.add('input-error');
            errorEmail.style.display = 'block'
            isValid = false;
            return;
        }else{
            email.classList.remove('input-error');
            errorEmail.style.display = 'none'
            isValid;
        }

        //Validacion de los input radios
        if(!enquiryRadio.checked && !requestRadio.checked){
            event.preventDefault();
            typeError.style.display = 'block'
            return;
        }


        //Vlidacion de el Text area
        if(textArea.value === ""){
            event.preventDefault();
            textArea.classList.add('input-error');
            textAreaError.style.display = 'block';
            return;
        }else{
            textArea.classList.remove('input-error');
            textAreaError.style.display = 'none';
        }

        //Validacion de el input checBox
        if(!acepted.checked){
            event.preventDefault();
            aceptedError.style.display = 'block';
            return
        }else{
            aceptedError.style.display = 'none';
        }

        event.preventDefault()

        popup.style.display = 'block';

        setTimeout(function(){
            popup.style.display = 'none'
        }, 3000);

    });
});