const contenedorPadre = document.getElementById('contenedor-padre');

//url del archivo json
const urlJson = 'data.json';

//usa fetch para obtener el archivo json
fetch(urlJson).then(response => {
    //verifica si la respuesta es exitosa
    if(!response.ok){
        throw new Error("Error al cargar el archivo JSON");
    }

    //convierte la  respuesta en formato JSON
    return response.json();
}).then(data => {
    //aqui puedes manipular los datos del archivo json

    console.log(data);

    data.forEach(element => {
        const puntos = document.createElement('section');
        puntos.classList.add('puntos');

        const cardPuntos = document.createElement('article');
        cardPuntos.classList.add('container-points', element.color);

        const div1 = document.createElement('div');

        const iconImg = document.createElement('img');
        iconImg.setAttribute('src', element.icon);

        const title = document.createElement('p');
        title.innerText = element.category;

        const div2 = document.createElement('div');

        const textPuntos = document.createElement('p');
        textPuntos.innerText = element.score + "/100";

        contenedorPadre.appendChild(puntos);

        puntos.appendChild(cardPuntos);

        cardPuntos.appendChild(div1);

        div1.appendChild(iconImg);
        div1.appendChild(title);

        cardPuntos.appendChild(div2);

        div2.appendChild(textPuntos);
    });
}).catch(error => {
    console.error('Hubo un problema con la operación fetch:', error)
});