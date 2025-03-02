const lista = document.querySelectorAll('li');
const divs = document.querySelectorAll('.main-div');

console.log('Se requiere poner diseño a la pagina pipipipip');


lista.forEach(li => {
    li.addEventListener('click', () => {
        const listaSeleccionada = li.id;
        console.log(listaSeleccionada)

        divs.forEach(div => {
            div.classList.remove('visible');
            div.classList.add('unvisible');
            
            if(div.id == `div-${listaSeleccionada}`) {
                console.log(div)
                div.classList.add('visible');
                div.classList.remove('unvisible');

            }
        });
    });
});




