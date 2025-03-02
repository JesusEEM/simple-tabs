const li1 = document.querySelector('#li-1');
const li2 = document.querySelector('#li-2');
const li3 = document.querySelector('#li-3');
const li4 = document.querySelector('#li-4');

const div1 = document.querySelector('#div-1');
const div2 = document.querySelector('#div-2');
const div3 = document.querySelector('#div-3');
const div4 = document.querySelector('#div-4');

const lista = [li1, li2, li3, li4];

const divs = [div1, div2, div3, div4];

console.log('Se requiere poner diseño a la pagina pipipipip');


lista.forEach(li => {
    li.addEventListener('click', () => {
        switch (li.id) {
            case 'li-1':
                div1.classList.add('visible');
                div1.classList.remove('unvisible');
                div2.classList.add('unvisible');
                div3.classList.add('unvisible');
                div4.classList.add('unvisible');
                div2.classList.remove('visible');
                div3.classList.remove('visible');
                div4.classList.remove('visible');
                break;
            
            case 'li-2':
                div2.classList.add('visible');
                div2.classList.remove('unvisible');
                div1.classList.add('unvisible');
                div3.classList.add('unvisible');
                div4.classList.add('unvisible');
                div1.classList.remove('visible');
                div3.classList.remove('visible');
                div4.classList.remove('visible');
                break;

            case 'li-3':
                div3.classList.add('visible');
                div3.classList.remove('unvisible');
                div1.classList.add('unvisible');
                div2.classList.add('unvisible');
                div4.classList.add('unvisible');
                div1.classList.remove('visible');
                div2.classList.remove('visible');
                div4.classList.remove('visible');
                break;

            case 'li-4':
                div4.classList.add('visible');
                div4.classList.remove('unvisible');
                div1.classList.add('unvisible');
                div2.classList.add('unvisible');
                div3.classList.add('unvisible');
                div1.classList.remove('visible');
                div2.classList.remove('visible');
                div3.classList.remove('visible');
                break;
        
            default:
                break;
        }
        
    });
});




