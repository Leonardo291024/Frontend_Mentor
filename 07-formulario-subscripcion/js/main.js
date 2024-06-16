const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    let correo = document.getElementById('correo');
    let errorMesage = document.getElementById('error');
    if(correo.value === ""){
        correo.classList.add('error-input')
        //errorMesage.innerText = "Debes llenar el campo"
        event.preventDefault();
    }else{
        correo.classList.remove('error-input')
        errorMesage.style.display = "none";
        
    }

})



