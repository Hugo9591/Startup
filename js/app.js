const precio = document.querySelector('#precio');
const contacto = document.querySelector('#contacto');
const contenedorPrecio = document.querySelector('#contenedorPrecio');
const contenedorContacto = document.querySelector('#contenedorContacto');

precio.addEventListener('click', function(e){
    e.preventDefault();

    contenedorPrecio.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

contacto.addEventListener('click', function(e){
    e.preventDefault();

    contenedorContacto.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});