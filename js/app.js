const menua = document.querySelectorAll('.menu-a');

menua.forEach(boton => {

    boton.addEventListener('click', e =>{
        e.preventDefault();
        
        const target = document.querySelector(boton.dataset.target);

        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    })
});